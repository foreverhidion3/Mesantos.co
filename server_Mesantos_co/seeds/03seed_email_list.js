/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('email_list').del()
  await knex('email_list').insert([
  { email: 'john.doe@example.com' },
  { email: 'jane.smith@example.com' },
  { email: 'mike.williams@example.com' },
  { email: 'emily.johnson@example.com' },
  { email: 'robert.jones@example.com' },
  { email: 'susan.brown@example.com' },
  { email: 'david.davis@example.com' },
  { email: 'laura.miller@example.com' },
  { email: 'steven.wilson@example.com' },
  { email: 'sophia.jackson@example.com' },
  { email: 'william.white@example.com' },
  { email: 'olivia.anderson@example.com' },
  { email: 'charles.thomas@example.com' },
  { email: 'ava.rodriguez@example.com' },
  { email: 'elizabeth.harris@example.com' },
  { email: 'james.smith@example.com' },
  { email: 'amelia.johnson@example.com' },
  { email: 'michael.williams@example.com' },
  { email: 'oliver.jones@example.com' },
  { email: 'lily.brown@example.com' },
  { email: 'emma.davis@example.com' },
  { email: 'logan.miller@example.com' },
  { email: 'abigail.wilson@example.com' },
  { email: 'benjamin.jackson@example.com' },
  { email: 'chloe.white@example.com' },
  { email: 'daniel.anderson@example.com' },
  { email: 'sophia.rodriguez@example.com' },
  { email: 'evelyn.harris@example.com' },
  { email: 'alexander.smith@example.com' },
  { email: 'grace.johnson@example.com' },
  { email: 'matthew.williams@example.com' },
  { email: 'harper.jones@example.com' },
  { email: 'scarlett.brown@example.com' },
  { email: 'david.davis@example.com' },
  ]);
}