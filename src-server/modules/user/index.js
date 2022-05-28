/* eslint-disable consistent-return */
/* eslint-disable radix */
const Router         = require('express-promise-router');
const userMiddleware = require('./user.middleware');
const userController = require('./user.controller');
const userValidation = require('./user.validation');

module.exports = () => {
const router = Router();

router.post(('/signup'), userMiddleware(userValidation.signUp), userController.signUp);
router.post(('/signin'), userMiddleware(userValidation.signIn), userController.signIn);

return router;

};
