const TABLE_NAME = 'spaces'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: "Nice basement", description: 'Indoor, temperature controlled space for your precious belongings.', img_link: 'https://images.unsplash.com/photo-1520615893238-4b864f6d16b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90fe505a1015c64ab137e64b72bb6aa4&auto=format&fit=crop&w=2866&q=80', hosts_id: 1, address: '111 South Jackson Street', city: 'Seattle', state: 'WA', zip: 98104, temp_control: true, access: true, size: 100, price: 100, active: true, deleted_at: null},
        {id: 2, name: "Mom's attic", description: 'Cozy short or long-term storage.', img_link: 'https://mezzattic.com/wp-content/uploads/2018/02/attic-door-pull-pull-down-attic-stairs-hatch-google-search-attic-attic-stair-pull-down-hardware.jpg', hosts_id: 1, address: '5415 65th Ave W', city: 'Seattle', state: 'WA', zip: 98467, temp_control: false, access: false, size: 200, price: 100, active: true, deleted_at: null},
        {id: 3, name: 'Spacious Clean Garage', description: 'A nice garage for storing boxes and furniture.', img_link: 'https://images.unsplash.com/photo-1468664093569-795a12e8b31c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f051f4d8dd0361db6c3721dfdc82bbea&auto=format&fit=crop&w=2850&q=80', hosts_id: 2, address: '6513 44th Ave NE', city: 'Seattle', state: 'WA', zip: 98115, temp_control: false, access: false, size: 250, price: 100, active: true, deleted_at: null},
        {id: 4, name: 'Outdoor shed', description: 'Small shed for a number of boxes.  Perfect for college students.', img_link: 'https://images.unsplash.com/photo-1468802424679-73df7d3d467e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=852c15dc5bf2a0e23c8730f1fd9fb5ef&auto=format&fit=crop&w=2850&q=80', hosts_id: 3, address: '8232 15th Ave NE', city: 'Seattle', state: 'WA', zip: 98115, temp_control: false, access: true, size: 50, price: 100, active: true, deleted_at: null},
        {id: 5, name: 'Spare bedroom', description: 'Spare apartment bedroom available for shared storage', img_link: 'https://images.unsplash.com/photo-1519119668-e2ea8e7278f7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0400754496d315f757fa8c43152b10cd&auto=format&fit=crop&w=2767&q=80', hosts_id: 4, address: '4710 University Way NE', city: 'Seattle', state: 'WA', zip: 98105, temp_control: true, access: false, size: 90, price: 100, active: true, deleted_at: null},
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
