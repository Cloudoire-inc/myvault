/* eslint-disable no-undef */
module.exports = {
  tags: ['Admin Login'],
  description: 'Login with your ethaddress',
  operationId: 'login',
  security: [
    {
      bearerAuth: [],
    },
  ],
  requestBody: {
    content: {
      'application/x-www-form-urlencoded': {
        schema: {
          type: 'object',
          properties: {
            ethaddress: {
              description: 'moralis ethaddress',
              type: 'string',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'login successful',
    },
    405: {
      description: 'User does not exist',
    },
  },
};
