module.exports = {
  tags: ['Delete Lockup details'],
  description: 'Delete Lockup details',
  operationId: 'deleteLockupDetails',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'lockup details id',
      required: true,
      type: 'string',
    },
  ],

  responses: {
    200: {
      description: 'lockup details delete successfully',
    },
    401: {
      description: 'unauthoried',
    },
  },
};
