module.exports = {
    tags: ['Update ClaimHistroy details'],
    description: 'Beneficiary ClaimHistroy details',
    operationId: 'updateClaimHistroyDetails',
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        name: 'id',
        in: 'query',
        description: 'ClaimHistroy details id',
        required: true,
        type: 'string',
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
        description: 'update successful',
      },
      401: {
        description: 'unauthoried',
      },
    },
  };