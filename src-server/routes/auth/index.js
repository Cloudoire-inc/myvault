/* eslint-disable consistent-return */
/* eslint-disable radix */
const Router = require('express-promise-router');
const _ = require('lodash');
const auth = require('../../components/auth/helpers');
const { parseInt, add } = require('lodash');

const isNotEmpty = value => (value === undefined || value === null || value === '' ? false : true);

module.exports = app => {
  const router = Router();
  const users = require('../../components/users')(app);
  const beneficiary = require('../../components/beneficiary')(app);
  const lockup_details = require('../../components/lockupDetails')(app);
  const tokens = require('../../components/tokens')(app);
  const claim_histroy = require('../../components/claim_histroy')(app);

  router.post('/login', async (req, res) => {
    const user = await users.getOneByEthaddress(req.body.ethaddress);
    if (!user) {
      res.send();
      return;
    }

    req.logIn(user, { session: false }, err2 => {
      if (err2) {
        res.send(err2);
      } else {
        const token = auth.signUser(user);
        res.json({ user, token });
      }
    });
  });

  router.post('/createUser', async (req, res) => {
    const params = req.body;
    const checkuser = await users.getOneByEthaddress(params.ethaddress);

    if (!checkuser) {
      const user = await users.create(params);
      const token = auth.signUser(user);
      return res.json({ user, token });
    }
    res.status(401).json({ message: 'user exist' });
  });

  router.put('/updateUser', auth.authenticate, async (req, res) => {
    if (req.body.password) {
      req.body.password = auth.createHash(req.body.password);
    }
    const data = await users.update(
      parseInt(req.query.id),
      _.pick(
        req.body,
        req.body.username ? 'username' : null,
        isNotEmpty(req.body.emailverified) ? 'emailverified' : null,
        req.body.email ? 'email' : null,
        req.body.password ? 'password' : null,
        req.body.objectid ? 'objectid' : null,
        // req.body.ethaddress ? 'ethaddress' : null,
        req.body.authtype ? 'authtype' : null,
        req.body.signature ? 'signature' : null,
        req.body.acl ? 'acl' : null,
        req.body.sessiontoken ? 'sessiontoken' : null,
      ),
    );
    res.json(data);
  });

  router.delete('/deleteUser', auth.authenticate, async (req, res) => {
    const data = await users.delete(parseInt(req.query.id));
    res.json(data);
  });

  router.get('/me', auth.authenticate, (req, res) => res.json(req.user));

  router.post('/createBeneficiary', auth.authenticate, async (req, res) => {
    const data = await beneficiary.create(req.body);
    res.json(data);
  });

  router.get('/getBeneficiary', auth.authenticate, async (req, res) => {
    const lockup_details_id = parseInt(req.query.lockup_details_id);
    const user_id = parseInt(req.query.user_id);
    const address = req.query.address;

    let data = [];
    if (user_id) {
      data = await beneficiary.getAllByUserId(user_id);
    } else if (lockup_details_id) {
      data = await beneficiary.getAllByLockupDetailsId(lockup_details_id);
    } else if (address) {
      data = await beneficiary.getAllByAddress(address);
    }
    else if (address) {
      data = await beneficiary.getAllByAddress(address);
    }
    res.json(data);
  });

  router.put('/updateBeneficiary', auth.authenticate, async (req, res) => {
    const data = await beneficiary.update(
      parseInt(req.query.id),
      _.pick(
        req.body,
        isNotEmpty(req.body.amount) ? 'amount' : null,
        req.body.wallet_name ? 'wallet_name' : null,
        req.body.wallet_address ? 'wallet_address' : null,
        req.body.user_id ? 'user_id' : null,
        isNotEmpty(req.body.market_cap) ? 'market_cap' : null,
        req.body.last_updated ? 'last_updated' : null,
        req.body.lockup_details_id ? 'lockup_details_id' : null,
        req.body.claimed_amount ? 'claimed_amount' : null,
      ),
    );
    res.json(data);
  });

  router.delete('/deleteBeneficiary', auth.authenticate, async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await beneficiary.delete(id);
    res.json(data);
  });

  router.post('/createLockupDetails', auth.authenticate, async (req, res) => {
    const data = await lockup_details.create(req.body);
    res.json(data);
  });

  router.get('/getLockupDetails', auth.authenticate, async (req, res) => {
    const user_id = parseInt(req.query.user_id);
    const lockup_details_id = parseInt(req.query.lockup_details_id);
    let data = [];
    
    if(lockup_details_id){
      data = await lockup_details.getOneById(lockup_details_id);
    }
    else if(user_id){
      data = await lockup_details.getAllByUserId(user_id);
    }

    res.json(data);
  });

  router.get('/getAllLocks', async (req, res) => {
      data = await lockup_details.getAll();
    res.json(data);
  });

  router.put('/updateLockupDetails', auth.authenticate, async (req, res) => {
      const data = await lockup_details.update(
      parseInt(req.query.id),
      _.pick(
        req.body,
        isNotEmpty(req.body.lock_amount) ? 'lock_amount' : null,
        isNotEmpty(req.body.releases) ? 'releases' : null,
        req.body.distribution_type ? 'distribution_type' : null,
        req.body.schedule_type ? 'schedule_type' : null,
        req.body.interval_slots ? 'interval_slots' : null,
        req.body.linear_timestamps ? 'linear_timestamps' : null,
        req.body.schedule ? 'schedule' : null,
        req.body.graph_template_type ? 'graph_template_type' : null,
        req.body.last_unlock_date_time ? 'last_unlock_date_time' : null,
        req.body.start_lock_token_date_time ? 'start_lock_token_date_time' : null,
        req.body.start_release_date_time ? 'start_release_date_time' : null,
        req.body.user_id ? 'user_id' : null,
        isNotEmpty(req.body.nft_percentage) ? 'nft_percentage' : null,
        req.body.coin_id ? 'coin_id' : null,
        req.body.coin_balance ? 'coin_balance' : null,
        req.body.token_category ? 'token_category' : null,
        req.body.unlock_type ? 'unlock_type' : null,
        isNotEmpty(req.body.smart_contract) ? 'smart_contract' : null,
        isNotEmpty(req.body.main_chart_value) ? 'main_chart_value' : null,
        req.body.coin_name_id ? 'coin_name_id' : null,
        req.body.step ? 'step' : null,
        req.body.lock_proxy ? 'lock_proxy' : null,
        req.body.transaction_hash ? 'transaction_hash' : null,
        isNotEmpty(req.body.market_cap) ? 'market_cap' : null,
        req.body.last_updated ? 'last_updated' : null,
        req.body.payment_type ? 'payment_type' : null,
        isNotEmpty(req.body.transaction_fee) ? 'transaction_fee' : null,
        isNotEmpty(req.body.processing_fee) ? 'processing_fee' : null,
        isNotEmpty(req.body.platform_fee) ? 'platform_fee' : null,
        req.body.claim_amount ? 'claim_amount' : 0,
        req.body.start_timestamp ? 'start_timestamp' : null,
        req.body.coin_decimals ? 'coin_decimals' : null,
        req.body.is_finished ? 'is_finished' : null,
        req.body.network_id ? 'network_id' : null,

      ),
    );
    res.json(data);
  });

  router.delete('/deleteLockupDetails', auth.authenticate, async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await lockup_details.delete(id);
    res.json(data);
  });

  router.post('/createTokens', auth.authenticate, async (req, res) => {
    const data = await tokens.create(req.body);
    res.json(data);
  });

  router.get('/getTokens', auth.authenticate, async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await tokens.getAllByUserId(id);
    res.json(data);
  });

  router.put('/updateTokens', auth.authenticate, async (req, res) => {
    const data = await tokens.update(
      parseInt(req.query.id),
      _.pick(
        req.body,
        req.body.token_name ? 'token_name' : null,
        isNotEmpty(req.body.token_value) ? 'token_value' : null,
        req.body.token_avatar ? 'token_avatar' : null,
        req.body.release_date_time ? 'release_date_time' : null,
        req.body.user_id ? 'user_id' : null,
        req.body.coins_name ? 'coins_name' : null,
        req.body.coins_symbol ? 'coins_symbol' : null,
        isNotEmpty(req.body.market_cap) ? 'market_cap' : null,
        req.body.last_updated ? 'last_updated' : null,
      ),
    );
    res.json(data);
  });

  router.delete('/deleteTokens', auth.authenticate, async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await tokens.delete(id);
    res.json(data);
  });

  router.post('/createClaimHistroy', auth.authenticate, async (req, res) => {
    const data = await claim_histroy.create(req.body);
    res.json(data);
  });

  router.get('/getClaimHistroy', auth.authenticate, async (req, res) => {
    const user_id = parseInt(req.query.user_id);
    const graph_details_id = parseInt(req.query.graph_details_id);
    let data = [];
    if (graph_details_id) {
      data = await claim_histroy.getAllByGraphDetailsId(graph_details_id);
    } else if (user_id) {
      data = await claim_histroy.getAllByUserId(user_id);
    }
    res.json(data);
  });

  router.put('/updateClaimHistroy', auth.authenticate, async (req, res) => {
    const data = await claim_histroy.update(
      parseInt(req.query.id),
      _.pick(
        req.body,
        req.body.name ? 'name' : null,
        isNotEmpty(req.body.claim_amount) ? 'claim_amount' : null,
        req.body.ether_scan_link ? 'ether_scan_link' : null,
        req.body.claim_date ? 'claim_date' : null,
        req.body.user_id ? 'user_id' : null,
        req.body.graph_details_id ? 'graph_details_id' : null,
      ),
    );
    res.json(data);
  });

  router.delete('/deleteClaimHistroy', auth.authenticate, async (req, res) => {
    const id = parseInt(req.query.id);
    const data = await claim_histroy.delete(id);
    res.json(data);
  });

  return router;
};
