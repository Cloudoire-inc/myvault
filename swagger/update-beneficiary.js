module.exports = {
  tags: ['Update Beneficiary'],
  description: 'Beneficiary update',
  operationId: 'updateBeneficiary',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'beneficiary id',
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
            amount: {
              description: 'beneficiary amount',
              type: 'number',
            },
            wallet_name: {
              description: 'beneficiary wallet_name',
              type: 'string',
            },
            wallet_address: {
              description: 'beneficiary wallet_address',
              type: 'string',
            },
            user_id: {
              description: 'beneficiary user_id',
              type: 'integer',
            },
            market_cap: {
              description: 'beneficiary market_cap ',
              type: 'number',
            },
            last_updated: {
              description: 'beneficiary last_updated',
              type: 'string',
            },
            lockup_details_id: {
              description: 'lockup_details_id',
              type: 'integer',
            },
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
