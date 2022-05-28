module.exports = app => {
  const db = app.get('db');
  const { tokens } = db;
  const module = {};

  // Create
  module.create = async row => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return tokens.save(row);
  };

  // Get one
  module.getOneById = async id => tokens.findOne({ id });
  module.getAllByUserId = async id => tokens.find({ user_id: id });

  // Update
  module.update = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return tokens.save(row);
  };

  // Delete
  module.delete = async id => {
    if (!Number(id)) throw new Error('No id given');
    return tokens.destroy({ id });
  };

  return module;
};
