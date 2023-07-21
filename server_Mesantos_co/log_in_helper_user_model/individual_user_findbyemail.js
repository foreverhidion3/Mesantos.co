const knex = require('knex')(require('../knexfile.js')['development']);

class User_find {
    static async findByEmail(email) {
        const users = await knex('admin_user').where('email', email);
        return users.length ? users[0] : null;
    }
}

module.exports = User_find;