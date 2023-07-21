const knex = require('knex')(require('../knexfile.js')['development']);

class User_find {
    static async findByEmail(email) {
        return knex('admin_user').where('email', email);
    }
}

module.export = User_find;