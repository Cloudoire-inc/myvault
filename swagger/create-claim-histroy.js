module.exports = {
  tags: ['Create ClaimHistroy'],
  description: 'Create a new ClaimHistroy',
  operationId: 'CreatClaimHistroy',
  security: [
    {
      bearerAuth: [],
    },
  ],
  requestBody: {
    content: {
      'application/x-www-form-urlencoded': {
        schema: {
          type: 'object',
          properties: {
            claim_amount: {
              description: 'ClaimHistroy claim_amount',
              type: 'number',
            },
            name: {
              description: 'ClaimHistroy name',
              type: 'string',
            },
            ether_scan_link: {
              description: 'ClaimHistroy ether_scan_link',
              type: 'string',
            },
            user_id: {
              description: 'ClaimHistroy user_id',
              type: 'integer',
            },
            claim_date: {
              description: 'ClaimHistroy claim_date ',
              type: 'string',
            },
            graph_details_id: {
              description: 'ClaimHistroy graph_details_id ',
              type: 'integer',
            }
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'ClaimHistroy created successfully',
    },
    401: {
      description: 'unauthoried',
    },
  },
};
