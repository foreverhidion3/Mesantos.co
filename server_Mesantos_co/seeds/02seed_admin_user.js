/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('admin_user').del()
  await knex('admin_user').insert([
    {
      first_name: 'Mesantos',
      last_name:'Kimura',
      email: 'K_Mesantos@protonmail.com',
      password: '1234creeper',
      books_id: 1,
      // email_list: 1,
      super_admin: true,
    },
    {
      first_name: 'John',
      last_name:'James',
      email: 'jjjuice@gmail.com',
      password: '@#!*&%$+19',
      books_id: 2,
      super_admin: false
    },
    {
      first_name: 'Emma',
      last_name: 'Smith',
      email: 'emmasmith@face.com',
      password: 'P@ssth1sWWORD',
      books_id: 1,
      super_admin: false
    },
    {
      first_name: 'Michael',
      last_name: 'Johnson',
      email: 'michaeljohnson@hotmail.com',
      password: 'SecurePassword123',
      books_id: 1,
      super_admin: false
    },
    {
      first_name: 'Sophia',
      last_name: 'Brown',
      email: 'sophiabrown@testers.com',
      password: '5tr0ngP@ss',
      books_id: 3,
      super_admin: false
    },
    {
      first_name: 'William',
      last_name: 'Anderson',
      email: 'wanderson@galvanize.com',
      password: 'Pa$$w0rd$18!',
      books_id: 2,
      super_admin: false
    },
    {
      first_name: 'Olivia',
      last_name: 'Davis',
      email: 'oliviadavis@gmail.com',
      password: 'MyP@ssword1',
      books_id: 1,
      super_admin: false
    }
  ]);
};




