// Import MySQL connection.
const conn = require('../config/connection.js');
function printQuestionMarks(num) {
    const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push('?');
    }
  
    return arr.toString();
  }
  
  //  convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    const arr = [];
  
    // loop through the keys & push the key/value as a string int arr
    for (const key in ob) {
    // skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        let value = ob[key];
        // if string with spaces, adds quotes
    
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
          value = `'${value}'`;
        }
        arr.push(`${key} = ${value}`);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  
  // Object for all our SQL statement functions.
  const orm = {
    all: function(tableInput) {
      const queryString = `SELECT * FROM ${tableInput};`;
      return conn.get().query(queryString);
    },
  
    create: function(table, cols, vals) {
      const queryString = `
      INSERT INTO ${table}
      (${cols.toString()}) 
      VALUES (${printQuestionMarks(vals.length)});
      `;
  
      console.log(queryString);
  
      return conn.get().query(queryString, vals);
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    update: function(table, objColVals, condition) {
      const queryString = `
      UPDATE ${table}
      SET ${objToSql(objColVals)}
      WHERE ${condition};
      `;
  
      console.log(queryString);
      return conn.get().query(queryString);
    },
  
    delete: function(table, condition, cb) {
      const queryString = `
      DELETE FROM ${table}
      WHERE ${condition};
      `;
  
      console.log(queryString);
      return conn.get().query(queryString);
    },
  };
  
  // Export the orm object for the model (burger.js).
  module.exports = orm;
  