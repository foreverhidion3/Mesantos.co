/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('admin_user', table => {
        table.increments('id'); // adds an auto incrementing PK column
        table.string('first_name').notNullable(); // equivalent of varchar(255)
        table.string('last_name').notNullable(); // equivalent of varchar(255)
        table.string('email').notNullable(); // equivalent of varchar(255)
        table.string('password').notNullable(); // equivalent of varchar(255)
        table.integer('books_id'); 
        // table.string('email_list').notNullable(); 
        table.boolean('super_admin');
        table.timestamps(true, true); // utility columns, adds created_at and updated_at

        table.foreign('books_id').references('id').inTable('books').onDelete('cascade');
        // table.foreign('email_list').references('id').inTable('email').onDelete('cascade');
      })
};  
exports.down = function(knex) {
 return knex.schema.alterTable('admin_user', table => {
   table.dropForeign('books_id')
//    table.dropForeign('email_list')
 })
 .then(function() {
    return knex.schema.dropTableIfExists('admin_user')
 });
};