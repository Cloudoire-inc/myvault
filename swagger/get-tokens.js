module.exports = {
  tags: ['Get Tokens By User Id'],
  description: 'Fetch all the Tokens',
  operationId: 'getTokens',
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
      description: 'fetch all tokens data',
    },
  },
};
