module.exports = {
    tags: ['Delete ClaimHistroy'],
    description: 'Delete ClaimHistroy',
    operationId: 'deleteClaimHistroy',
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        name: 'id',
        in: 'query',
        description: 'ClaimHistroy id',
        required: true,
        type: 'string',
      },
    ],
  
    responses: {
      200: {
        description: 'ClaimHistroy delete successfully',
      },
      401: {
        description: 'unauthoried',
      },
    },
  };