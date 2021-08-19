
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : process.env.HOST || '127.0.0.1',
      user : process.env.USER_DB_MYSQL || 'root',
      password : process.env.PASS_DB_MYSQL || 'root',
      database : process.env.DB_NAME_MYSQL || 'coder_17'
    }
  }
};
