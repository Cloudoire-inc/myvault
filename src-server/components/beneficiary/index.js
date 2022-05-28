module.exports = app => {
  const db = app.get('db');
  const { beneficiary } = db;
  const module = {};

  // Create
  module.create = async row => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return beneficiary.save(row);
  };

  // Get one
  module.getOneById = async id => beneficiary.findOne({ id });
  module.getAllByUserId = async user_id => beneficiary.find({ user_id });
  module.getAllByLockupDetailsId = async lockup_details_id => beneficiary.find({ lockup_details_id });
  module.getAllByAddress = async wallet_address => beneficiary.find({ wallet_address });

  // Update
  module.update = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return beneficiary.save(row);
  };

  // Delete
  module.delete = async id => {
    if (!Number(id)) throw new Error('No id given');
    return beneficiary.destroy({ id });
  };

  return module;
};
