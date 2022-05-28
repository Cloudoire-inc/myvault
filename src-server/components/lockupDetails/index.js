module.exports = app => {
  const db = app.get('db');
  const { lockup_details } = db;
  const module = {};

  // Create
  module.create = async row => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return lockup_details.save(row);
  };

  // Get one 
  module.getOneById = async id => lockup_details.findOne({ id });
  module.getAllByUserId = async user_id => lockup_details.find({ user_id });

  module.getAll = async () => lockup_details.find({ step: '/token-lock-process-complete', is_finished: true });
  
  module.getLocksByTokenAddress = async (_tokenAddress) => lockup_details.find({ step: '/token-lock-process-complete', is_finished: true, coin_name_id: _tokenAddress});
  
  module.getLockByLockProxy = async lock_proxy => lockup_details.findOne({ lock_proxy });

  // Update
  module.update = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return lockup_details.save(row);
  };

  // Delete
  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return lockup_details.destroy({ id });
  };

  return module;
};
