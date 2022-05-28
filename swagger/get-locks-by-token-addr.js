module.exports = {
  tags: ['Dashboard'],
  description: 'Get Locks by token address',
  operationId: 'get-locks',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: 'tokenAddress',
      in: 'path',
      description: 'token address',
      required: true,
      type: 'string',
    },
  ],
  responses: {
    200: {
      description: 'All locks of token address',
    },
    401: {
      description: '',
    },
  },
};
