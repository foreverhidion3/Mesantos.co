/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user_requests', table => {
        table.increments('id'); // adds an auto incrementing PK column
        table.string('first_name').notNullable(); // equivalent of varchar(255)
        table.string('last_name').notNullable(); // equivalent of varchar(255)
        table.string('email').notNullable(); // equivalent of varchar(255)
        table.timestamps(true, true); // utility columns, adds created_at and updated_at
    })
}; 
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_requests')
};


