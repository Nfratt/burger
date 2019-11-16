// add mySQL
const mysql = require('promise-mysql');

// ORM's Export connection 
module.exports = {
  create: async function () {
    try {
      this.connection = await mysql.createConnection(process.env.NODE_ENV === 'production' ? process.env.JAWSDB_URL : require('./db-config'));
      console.log('DATABASE CONNECTION ESTABLISHED');
      console.table(this.connection.config);
    } catch (error) {
      console.log('ERROR: DB CONNECTION FAILED');
      console.table(error);
      process.exit(1);
    }
  },
  get: function () {
    return this.connection;
  },
  connection: null,
};
