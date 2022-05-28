module.exports = {
  tags: ['Get Beneficiary'],
  description: 'Fetch all the beneficiary By User Id Or Lockup Details Id',
  operationId: 'getBeneficiary',
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
      name: 'lockup_details_id',
      in: 'query',
      description: 'lockup_details_id',
      required: false,
      type: 'string',
    },
    {
      name: 'address',
      in: 'query',
      description: 'wallet_address',
      required: false,
      type: 'string',
    },
  ],
  responses: {
    200: {
      description: 'fetch all beneficiary data',
    },
  },
};
