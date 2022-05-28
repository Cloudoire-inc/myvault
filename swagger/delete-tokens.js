module.exports = {
  tags: ['Delete Tokens'],
  description: 'Delete Tokens',
  operationId: 'deleteTokens',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'tokens id',
      required: true,
      type: 'string',
    },
  ],

  responses: {
    200: {
      description: 'tokens delete successfully',
    },
    401: {
      description: 'unauthoried',
    },
  },
};