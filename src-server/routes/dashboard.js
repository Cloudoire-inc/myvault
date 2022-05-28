/* eslint-disable consistent-return */
/* eslint-disable radix */
const Router = require('express-promise-router');
const auth = require('../components/auth/helpers');

module.exports = (app) => {
  const router = Router();
  const lockupDetails = require('../components/lockupDetails')(app);
  const beneficiaryServices = require('../components/beneficiary')(app);


  router.get('/locks/:tokenAddress', async (req, res) => {
    const data = await lockupDetails.getLocksByTokenAddress(req.params.tokenAddress);
    res.json(data);
  });

  router.get('/lock/:lockProxy', async (req, res) => {
    const lock = await lockupDetails.getLockByLockProxy(req.params.lockProxy);
    lock.beneficiaries = await beneficiaryServices.getAllByLockupDetailsId(lock.id);
    res.json(lock);
  });

  return router;
};
