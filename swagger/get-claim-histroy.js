module.exports = {
    tags: ['Get ClaimHistroy Details'],
    description: 'Fetch all the ClaimHistroy Details by user_id or graph_details_id',
    operationId: 'getClaimHistroyDetails',
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        name: 'user_id',
        in: 'query',
        description: 'user id',
        required: false,
        type: 'string',
      },
      {
        name: 'graph_details_id',
        in: 'query',
        description: 'graph_details_id',
        required: false,
        type: 'string',
      },
    ],
    responses: {
      200: {
        description: 'fetch all ClaimHistroy details data',
      },
    },
  };