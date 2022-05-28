module.exports = {
  tags: ['Update User'],
  description: 'Update User',
  operationId: 'updateUser',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'user id',
      required: true,
      type: 'string',
    },
  ],
  requestBody: {
    content: {
      'application/x-www-form-urlencoded': {
        schema: {
          type: 'object',
          properties: {
            username: {
              description: 'username',
              type: 'string',
            },
            password: {
              description: 'password',
              type: 'string',
            },
            email: {
              description: 'email',
              type: 'string',
            },
            emailverified: {
              description: 'email Verified',
              type: 'string',
            },
            objectid: {
              description: 'objectId',
              type: 'string',
            },
            authdataobj: {
              description: 'MetaMask auth Data Obj',
              type: 'string',
            },
            signature: {
              description: 'MetaMask auth signature',
              type: 'string',
            },
            authtype: {
              description: 'MetaMask auth type',
              type: 'string',
            },
            // ethaddress: {
            //   description: 'ethAddress',
            //   type: 'string',
            // },
            acl: {
              description: 'Access Control list',
              type: 'string',
            },
            sessiontoken: {
              description: 'sessionToken',
              type: 'string',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'User created successfully',
    },
    401: {
      description: 'user exist',
    },
  },
};
