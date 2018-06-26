const TABLE_NAME = 'spaces'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: "Nice basement", description: 'Indoor, temperature controlled space for your precious belongings.', img_link: 'http://via.placeholder.com/350x150', hosts_id: 1, address: '111 South Jackson Street', city: 'Seattle', state: 'WA', zip: 98104, temp_control: true, access: true, size: 100, price: 100, active: true, deleted_at: null},
        {id: 2, name: "Mom's attic", description: 'Cozy short or long-term storage.', img_link: 'http://via.placeholder.com/350x150', hosts_id: 1, address: '5415 65th Ave W', city: 'Seattle', state: 'WA', zip: 98467, temp_control: false, access: false, size: 200, price: 100, active: true, deleted_at: null},
        {id: 3, name: 'Spacious Clean Garage', description: 'A nice garage for storing boxes and furniture.', img_link: 'http://via.placeholder.com/350x150', hosts_id: 2, address: '6513 44th Ave NE', city: 'Seattle', state: 'WA', zip: 98115, temp_control: false, access: false, size: 250, price: 100, active: true, deleted_at: null},
        {id: 4, name: 'Outdoor shed', description: 'Small shed for a number of boxes.  Perfect for college students.', img_link: 'http://via.placeholder.com/350x150', hosts_id: 3, address: '8232 15th Ave NE', city: 'Seattle', state: 'WA', zip: 98115, temp_control: false, access: true, size: 50, price: 100, active: false, deleted_at: null},
        {id: 5, name: 'Spare bedroom', description: 'Spare apartment bedroom available for shared storage', img_link: 'http://via.placeholder.com/350x150', hosts_id: 4, address: '4710 University Way NE', city: 'Seattle', state: 'WA', zip: 98105, temp_control: true, access: false, size: 90, price: 100, active: true, deleted_at: null},
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
