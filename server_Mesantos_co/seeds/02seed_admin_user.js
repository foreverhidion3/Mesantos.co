const bcrypt = require('bcrypt')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const seedWithHashed = [
    {
      first_name: 'Mesantos',
      last_name:'Kimura',
      email: await bcrypt.hash('1234creeper', 10),
      password: '1234creeper', 
      books_id: 1,
      // email_list: 1,
      super_admin: true,
    },
    {
      first_name: 'John',
      last_name:'James',
      email: 'jjjuice@gmail.com',
      password: await bcrypt.hash('@#!*&%$+19', 10),
      books_id: 2,
      super_admin: false
    },
    {
      first_name: 'Emma',
      last_name: 'Smith',
      email: 'emmasmith@face.com',
      password: await bcrypt.hash('P@ssth1sWWORD', 10),
      books_id: 1,
      super_admin: false
    },
    {
      first_name: 'Michael',
      last_name: 'Johnson',
      email: 'michaeljohnson@hotmail.com',
      password: await bcrypt.hash('SecurePassword123', 10),
      books_id: 1,
      super_admin: false
    },
    {
      first_name: 'Sophia',
      last_name: 'Brown',
      email: 'sophiabrown@testers.com',
      password: await bcrypt.hash('5tr0ngP@ss', 10),
      books_id: 3,
      super_admin: false
    },
    {
      first_name: 'William',
      last_name: 'Anderson',
      email: 'wanderson@galvanize.com',
      password: await bcrypt.hash('Pa$$w0rd$18!', 10),
      books_id: 2,
      super_admin: false
    },
    {
      first_name: 'Olivia',
      last_name: 'Davis',
      email: 'oliviadavis@gmail.com',
      password: await bcrypt.hash('MyP@ssword1', 10),
      books_id: 1,
      super_admin: false
    }
  ]
  // Deletes ALL existing entries
  await knex('admin_user').del()
  await knex('admin_user').insert(seedWithHashed);
};




