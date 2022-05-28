const Joi = require('joi');

const signUp = { 
    body: Joi.object().keys({ 
        email: Joi.string().required().email().label('Email'),
        password: Joi.string().required().min(8).max(15).label('Password'),
        password_confirmation: Joi.any().equal(Joi.ref('password')).required().label('Confirm password').messages({ 'any.only': '{{#label}} does not match' })
    })
};

const signIn = { 
    body: Joi.object().keys({ 
        email: Joi.string().required().email().label('Email'),
        password: Joi.string().required().label('Password'),
    })
};

module.exports = {
    signUp,
    signIn
};
