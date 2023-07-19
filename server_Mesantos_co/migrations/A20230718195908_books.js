/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('books', table => {
        table.increments('id'); // adds an auto incrementing PK column
        table.string('title', 100).notNullable(); // equivalent of varchar(255)
        table.string('image_path', 350);
        table.string('description', 350).notNullable(); // equivalent of varchar(255)
        table.integer('cost').notNullable(); 
        table.integer('available').notNullable();
        table.timestamps(true, true); // utility columns, adds created_at and updated_at
      })
};  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('books')
};


