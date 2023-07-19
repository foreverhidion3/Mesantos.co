/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_requests').del()
  await knex('user_requests').insert([
    {first_name: 'Steven', last_name: 'Phlaum', email: 'steep@gmail.com'},  
  ]);
};
 
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_requests')
};