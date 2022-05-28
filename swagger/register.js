/* eslint-disable no-undef */
module.exports = {
  tags: ['Register an admin'],
  description: 'Register with your email, password, firstname, lastname',
  operationId: 'register',
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
            email: {
              description: 'your email',
              type: 'string',
            },
            password: {
              description: 'your password',
              type: 'string',
            },
            firstname: {
              description: 'your firstname',
              type: 'string',
            },
            lastname: {
              description: 'your lastname',
              type: 'string',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'register successful',
    },
  },
};
