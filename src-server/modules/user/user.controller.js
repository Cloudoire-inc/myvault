const userService    = require('./user.service');

const signUp = async (req, res) => {
    const user = await userService.signUp(req);
    return res.json(user);
};

const signIn = async (req, res) => {
    const user = await userService.signIn(req);
    return res.json(user);
};

module.exports = {
    signUp,
    signIn
};