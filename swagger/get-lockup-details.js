module.exports = {
  tags: ['Get Lockup details'],
  description: 'Fetch all the lockup details by user_id',
  operationId: 'getLockupDetails',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: 'user_id',
      in: 'query',
      description: 'lockup details user_id',
      required: false,
      type: 'string',
    },
    {
      name: 'lockup_details_id',
      in: 'query',
      description: 'lockup details lockup_details_id',
      required: false,
      type: 'string',
    },
  ],
  responses: {
    200: {
      description: 'fetch all lockup details data',
    },
  },
};
