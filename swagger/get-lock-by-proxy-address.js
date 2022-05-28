module.exports = {
  tags: ['Dashboard'],
  description: 'Get Lock by lock proxy',
  operationId: 'get-lock',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: 'lockProxy',
      in: 'path',
      description: 'lock proxy address',
      required: true,
      type: 'string',
    },
  ],
  responses: {
    200: {
      description: 'lock including beneficiaries by lock proxy address',
    },
    401: {
      description: '',
    },
  },
};
