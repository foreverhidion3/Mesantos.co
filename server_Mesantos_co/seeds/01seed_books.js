/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    { 
      id: 1,
      title: 'Sword Slinger', 
      image_path: '/images/SS_COVER_Reduced.svg',
      description: "In Elmareth, Creeper, a skilled halfling known as 'Sword Slinger,' joined allies to aid Valeria. Together, they conquered dark challenges, vanquished sorcerer Malachai, restoring peace. Creeper remained humble, cherishing friendships and homeland's beauty. A timeless tale of courage and bonds formed.", 
      cost: 24,
      available: 1000
    },
    {
      id: 2,
      title: 'Awakened',
      image_path: '/images/SS_COVER_Reduced.svg', 
      description: "Maimed wolf Coin and feline friend Heromine unite, embarking on an epic adventure to save their beloved forest. Facing perilous challenges, they demonstrate extraordinary teamwork, unwavering courage, and the power of true friendship. Through their bravery, they triumph against all odds.", 
      cost: 14,
      available: 500
    },
    {
      id: 3,
      title: 'The Tale of Kady',
      image_path: '/images/SS_COVER_Reduced.svg', 
      description: "In a remote medieval village, Kady, a half-demon, battles constant bullying and prejudice. Tormented by inner struggles, she yearns for acceptance and a sense of belonging. As tragedies befall her village, Kady's journey becomes a path of self-discovery, resilience, and the realization that her differences hold the key to strength and compassion.", 
      cost: 19,
      available: 750
    }
  ]);
}; 
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('books')
};
