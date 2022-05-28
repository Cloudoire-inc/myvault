// const DB_NAME = 'postgres';
// const DB_USER = 'ruikuadmin';
// const DB_PASSWORD = 'Ruiku12345';
// const DB_HOST = 'aadv9p0g61xf9l.cgeea6ej5lmu.us-east-2.rds.amazonaws.com';
// const DB_PORT = '5432';
// const DB_ENABLE_SSL = 0;

const DB_NAME = 'ebdb';
const DB_USER = 'ruikuadmin';
const DB_PASSWORD = 'Ruiku12345';
const DB_HOST = 'postgres.crj8h3jnhhww.eu-west-2.rds.amazonaws.com';
const DB_PORT = '5432';
const DB_ENABLE_SSL = 0;

const hostWithPort = `${DB_HOST}${DB_PORT ? `:${DB_PORT}` : ''}`;
let connectionStr = `postgres://${DB_USER}:${DB_PASSWORD}@${hostWithPort}/${DB_NAME}`;
if (DB_ENABLE_SSL) connectionStr += '?ssl=false';

const schema = 'public';

module.exports = {
  connectionStr,
  schema
};
