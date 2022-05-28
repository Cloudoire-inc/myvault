const Joi           = require('joi'); 
const httpStatus    = require('http-status');
const pick          = require('../../utils/pick');
const AppError      = require('../../utils/ApiError');

const userMiddleware = (schema) => (req, res, next) => {
    const validSchema      = pick(schema, ['params', 'query', 'body']);
    const object           = pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' }, abortEarly: false })
    .validate(object);
    if (error) {
        const { details } = error; 
        const errorMessage = details.map((i) => i.message).join(',');
        return next(new AppError(httpStatus.UNPROCESSABLE_ENTITY, errorMessage))
    }
    Object.assign(req, value);
    return next();
};

module.exports = userMiddleware;