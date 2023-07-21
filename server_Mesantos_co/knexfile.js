// Update with your config settings.
require("dotenv").config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const knex = require('knex')({
  client: 'pg',
  connection: process.env.DB_CONNECTION_STRING,
  pool: {
    min: 2,   // Minimum 
    max: 10,  // Maximum 
  },
});

module.exports = {
  development: knex,
};










// const string = process.env.DB_CONNECTION_STRING

//   module.exports = {

//     development: {
//       client: 'pg',
//       connection: string     
//     }
//   }


// module.exports = {

//   development: {
//     client: 'pg',
//     connection: {
//       host: '127.0.0.1',
//       password: 'docker',
//       user: 'postgres',
//       port: 5432,
//       database: 'mesantos_co_db'
//     }
//   }

// };
