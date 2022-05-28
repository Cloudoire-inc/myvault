module.exports = {
  tags: ['Update Lockup details'],
  description: 'Beneficiary Lockup details',
  operationId: 'updateLockupDetails',
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
  requestBody: {
    content: {
      'application/x-www-form-urlencoded': {
        schema: {
          type: 'object',
          properties: {
            lock_amount: {
              description: 'lockup details lock_amount',
              type: 'number',
            },
            releases: {
              description: 'lockup details releases',
              type: 'number',
            },
            distribution_type: {
              description: 'lockup details distribution_type',
              type: 'string',
            },
            schedule_type: {
              description: 'lockup details schedule_type title',
              type: 'string',
            },
            graph_template_type: {
              description: 'lockup details graph_template_type title',
              type: 'string',
            },
            last_unlock_date_time: {
              description: 'lockup details last_unlock_date_time',
              type: 'string',
            },
            start_lock_token_date_time: {
              description: 'lockup details start_lock_token_date_time',
              type: 'string',
            },
            start_release_date_time: {
              description: 'lockup details start_release_date_time',
              type: 'string',
            },
            user_id: {
              description: 'user id',
              type: 'integer',
            },
            nft_percentage: {
              description: 'nft percentage',
              type: 'number',
            },
            coin_id: {
              description: 'coin_id',
              type: 'string',
            },
            coin_name_id: {
              description: 'coin_name_id',
              type: 'string',
            },
            token_category: {
              description: 'lockup details token category',
              type: 'string',
            },
            unlock_type: {
              description: 'lockup details unlock type',
              type: 'string',
            },
            smart_contract: {
              description: 'lockup details unlock smart contract',
              type: 'boolean',
            },
            step: {
              description: 'lockup details Process Step',
              type: 'string',
            },
            market_cap: {
              description: 'beneficiary market_cap ',
              type: 'number',
            },
            last_updated: {
              description: 'beneficiary last_updated',
              type: 'string',
            },
            payment_type: {
              description: 'payment payment_type',
              type: 'string',
            },
            transaction_fee: {
              description: 'payment transaction_fee',
              type: 'number',
            },
            processing_fee: {
              description: 'payment processing_fee',
              type: 'number',
            },
            platform_fee: {
              description: 'payment platform_fee',
              type: 'number',
            },
            main_chart_value: {
              description: 'main_chart_value',
              type: 'string',
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
