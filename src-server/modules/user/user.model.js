const signUp = async (req, data) => {
    const db        = req.app.get('db');
    const row       = data;
    const { users } = db;
    if (!row) throw new Error('No row data given');
      delete row.id;
      return users.save(row);
}

const getOneByEmail = async (req) => {
    const db        = req.app.get('db');
    const { users } = db;
    const email     = req.body.email;
    const user      = await users.findOne({ email });
    return user;
}
module.exports = {
    signUp,
    getOneByEmail
};