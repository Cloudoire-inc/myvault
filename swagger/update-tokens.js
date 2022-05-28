module.exports = {
  tags: ['Update Tokens'],
  description: 'Tokens update',
  operationId: 'updateTokens',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: 'id',
      in: 'query',
      description: 'Tokens id',
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
            token_name: {
              description: 'token name',
              type: 'string',
            },
            token_value: {
              description: 'token value',
              type: 'number',
            },
            token_avatar: {
              description: 'token avatar',
              type: 'string',
            },
            user_id: {
              description: 'user id',
              type: 'integer',
            },
            coins_name: {
              description: 'coins_name ',
              type: 'string',
            },
            coins_symbol: {
              description: 'coins_symbol',
              type: 'string',
            },
            market_cap: {
              description: 'market_cap',
              type: 'number',
            },
            last_updated: {
              description: 'market_cap last_updated time',
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
