module.exports = app => {
    const db = app.get('db');
    const { claim_histroy } = db;
    const module = {};

    // create
    module.create = async row => {
        if (!row) throw new Error('No row data given');
        delete row.id;
        return claim_histroy.save(row);
      };

    module.getOneByUserId = async id => claim_histroy.findOne({ user_id: id });
    // module.getOneById = async id => token_category.findOne({ id });
    module.getAll = async () => claim_histroy.find();
    module.getAllByUserId = async user_id => claim_histroy.find({ user_id });
    module.getAllByGraphDetailsId = async graph_details_id => claim_histroy.find({ graph_details_id })

    // Update
    module.update = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return claim_histroy.save(row);
    };

    // Delete
    module.delete = async id => {
    if (!Number(id)) throw new Error('No id given');
    return claim_histroy.destroy({ id });
    };

    return module;
}