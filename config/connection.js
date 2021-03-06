// add mySQL
const mysql = require('promise-mysql');
const dbconfig=require('./db-config.js')

// ORM's Export connection 
module.exports = {
  create: async function () {
    try {
      console.log(process.env.NODE_ENV === 'production',process.env.JAWSDB_URL);
      this.connection = await mysql.createConnection(dbconfig );
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
