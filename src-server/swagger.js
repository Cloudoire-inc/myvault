/* eslint-disable no-dupe-keys */
// eslint-disable-next-line import/prefer-default-export
const getUser = require('../swagger/get-user');
const login = require('../swagger/login');

const createBeneficiary = require('../swagger/create-beneficiary');
const getBeneficiary = require('../swagger/get-beneficiary');
const updateBeneficiary = require('../swagger/update-beneficiary');
const deleteBeneficiary = require('../swagger/delete-beneficiary');

const createLockupDetails = require('../swagger/create-lockup-details');
const getLockupDetails = require('../swagger/get-lockup-details');
const getAllLockupDetails = require('../swagger/get-all-locks');
const updateLockupDetails = require('../swagger/update-lockup-details');
const deleteLockupDetails = require('../swagger/delete-lockup-details');

const createUser = require('../swagger/create-user');
const updateUser = require('../swagger/update-user');
const deleteUser = require('../swagger/delete-user');

const createTokens = require('../swagger/create-tokens');
const getTokens = require('../swagger/get-tokens');
const updateTokens = require('../swagger/update-tokens');
const deleteTokens = require('../swagger/delete-tokens');

const createClaimHistroy = require('../swagger/create-claim-histroy');
const getClaimHistroy = require('../swagger/get-claim-histroy');
const updateClaimHistroy = require('../swagger/update-claim-histroy');
const deleteClaimHistroy = require('../swagger/delete-claim-histroy');
const getLocksByTokenAddr = require('../swagger/get-locks-by-token-addr');
const getLockByProxyAddress = require('../swagger/get-lock-by-proxy-address');

module.exports = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'Polkalokr Api Documentation V6',
    description: 'Polkalokr Api documentation for Polkalokr technical test',
    termsOfService: '',
  },
  basePath: '/',
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Local server',
    },
    {
      url: 'https://vault-be-dev.lokr.io',
      description: 'staging server',
    },
  ],
  paths: {
    '/auth/login': {
      post: login,
    },
    '/auth/me': {
      get: getUser,
    },
    '/auth/createUser': {
      post: createUser,
    },
    '/auth/updateUser': {
      put: updateUser,
    },
    '/auth/deleteUser': {
      delete: deleteUser,
    },
    '/auth/createTokens': {
      post: createTokens,
    },
    '/auth/getTokens': {
      get: getTokens,
    },
    '/auth/updateTokens': {
      put: updateTokens,
    },
    '/auth/deleteTokens': {
      delete: deleteTokens,
    },
    '/auth/createBeneficiary': {
      post: createBeneficiary,
    },
    '/auth/getBeneficiary': {
      get: getBeneficiary,
    },
    '/auth/updateBeneficiary': {
      put: updateBeneficiary,
    },
    '/auth/deleteBeneficiary': {
      delete: deleteBeneficiary,
    },
    '/auth/createLockupDetails': {
      post: createLockupDetails,
    },
    '/auth/getLockupDetails': {
      get: getLockupDetails,
    },
    '/auth/getAllLocks': {
      get: getAllLockupDetails,
    },
    '/auth/updateLockupDetails': {
      put: updateLockupDetails,
    },
    '/auth/deleteLockupDetails': {
      delete: deleteLockupDetails,
    },
    '/auth/createClaimHistroy': {
      post: createClaimHistroy,
    },
    '/auth/getClaimHistroy': {
      get: getClaimHistroy,
    },
    '/auth/updateClaimHistroy': {
      put: updateClaimHistroy,
    },
    '/auth/deleteClaimHistroy': {
      delete: deleteClaimHistroy,
    },
    '/dashboard/locks/:tokenAddress': {
      get: getLocksByTokenAddr,
    },
    '/dashboard/lock/:lockProxy': {
      get: getLockByProxyAddress,
    },
  },
};
