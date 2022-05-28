module.exports = {
  tags: ['Delete User'],
  description: 'Delete User',
  operationId: 'deleteUser',
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

  responses: {
    200: {
      description: 'User delete successfully',
    },
    401: {
      description: 'unauthoried',
    },
  },
};
