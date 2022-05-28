const httpStatus = require('http-status');
const userModel  = require('./user.model');
const auth       = require('../../components/auth/helpers');
const AppError   = require('../../utils/ApiError');


const signUp = async (req) => {
    const existing_user = await userModel.getOneByEmail(req);
    if(existing_user){
        throw new AppError(httpStatus.CONFLICT, 'User already exists');
    }
    else{
        let data       = Object.assign({}, req.body);
        data.password  = auth.createHash(data.password);
        const user     = await userModel.signUp(req, data);
        if(user){
            const token = auth.signUser(user);
            return {user, token};
        }
    }
};

const signIn = async (req) => {
    const user = await userModel.getOneByEmail(req);
    if(!user){
        throw new AppError(httpStatus.NOT_FOUND, 'User Not Found');
    }
    const token = auth.signUser(user);
    return {user, token}; 
};

module.exports = {
    signUp,
    signIn
};