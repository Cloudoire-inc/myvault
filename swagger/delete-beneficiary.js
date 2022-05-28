module.exports = {
  tags: ['Delete Beneficiary'],
  description: 'Delete Beneficiary',
  operationId: 'deleteBeneficiary',
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

  responses: {
    200: {
      description: 'beneficiary delete successfully',
    },
    401: {
      description: 'unauthoried',
    },
  },
};