module.exports = {
  tags: ['Get all Locks'],
  description: 'Fetch all the lockup details',
  operationId: 'Lock',
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    200: {
      description: 'fetch all lockup details data',
    },
  },
};
