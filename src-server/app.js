/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
/* eslint-disable camelcase */

const express = require('express');
const path = require('path');
const logger = require('morgan');
const passport = require('passport');

const swaggerUi = require('swagger-ui-express');
const xmlparser = require('express-xml-bodyparser');

const cors = require('cors');

const swaggerDocument = require('./swagger');
const DB = require('./db.js');

const apiAuth = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const userRoutes = require('./modules/user');

module.exports = async () => {
  const app = express();
  app.use(cors());

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(xmlparser());

  const { db } = await DB();
  app.set('db', db);

  app.use(express.static(path.join(__dirname, '../public')));

  // Enable CORS
  app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
  });

  passport.use(require('./components/auth/local')(app));
  passport.use(require('./components/auth/jwt')(app));

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.use('/auth', apiAuth(app));
  app.use('/dashboard', dashboardRoutes(app));
  app.use('/user', userRoutes(app));

  return app;
};
