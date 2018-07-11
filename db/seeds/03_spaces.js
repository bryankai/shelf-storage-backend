const TABLE_NAME = 'spaces'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: "Nice basement", description: 'Indoor, temperature controlled space for your precious belongings.', img_link: 'https://images.unsplash.com/photo-1520615893238-4b864f6d16b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90fe505a1015c64ab137e64b72bb6aa4&auto=format&fit=crop&w=2866&q=80', hosts_id: 1, address: '111 South Jackson Street', city: 'Seattle', state: 'WA', zip: 98104, lat: 47.598976, lng: -122.333787, temp_control: true, access: true, size: 250, price: 10, active: true, deleted_at: null},
        {id: 2, name: "Mom's attic", description: 'Cozy short or long-term storage.', img_link: 'https://mezzattic.com/wp-content/uploads/2018/02/attic-door-pull-pull-down-attic-stairs-hatch-google-search-attic-attic-stair-pull-down-hardware.jpg', hosts_id: 1, address: '5415 65th Ave W', city: 'Seattle', state: 'WA', zip: 98467, lat: 47.675535, lng: -122.268995, temp_control: false, access: false, size: 150, price: 7, active: true, deleted_at: null},
        {id: 3, name: 'Spacious Clean Garage', description: 'A nice garage for storing boxes and furniture.', img_link: 'https://images.unsplash.com/photo-1468664093569-795a12e8b31c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f051f4d8dd0361db6c3721dfdc82bbea&auto=format&fit=crop&w=2850&q=80', hosts_id: 2, address: '6513 44th Ave NE', city: 'Seattle', state: 'WA', zip: 98115, lat: 47.676227, lng: -122.281182, temp_control: false, access: false, size: 250, price: 5, active: true, deleted_at: null},
        {id: 4, name: 'Outdoor shed', description: 'Small shed for a number of boxes.  Perfect for college students.', img_link: 'https://images.unsplash.com/photo-1468802424679-73df7d3d467e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=852c15dc5bf2a0e23c8730f1fd9fb5ef&auto=format&fit=crop&w=2850&q=80', hosts_id: 3, address: '8232 15th Ave NE', city: 'Seattle', state: 'WA', zip: 98115, lat: 47.689463, lng: -122.311888, temp_control: false, access: true, size: 50, price: 3, active: true, deleted_at: null},
        {id: 5, name: 'Spare bedroom', description: 'Spare apartment bedroom available for shared storage', img_link: 'https://images.unsplash.com/photo-1519119668-e2ea8e7278f7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0400754496d315f757fa8c43152b10cd&auto=format&fit=crop&w=2767&q=80', hosts_id: 4, address: '4710 University Way NE', city: 'Seattle', state: 'WA', zip: 98105, lat: 47.663376, lng: -122.312603, temp_control: true, access: false, size: 90, price: 4, active: true, deleted_at: null},
        {id: 6, name: "Storage Closet", description: 'A storage closet that can be used for storage.  It is approximately 5x5ft.  Clean and easy access.', img_link: 'http://mariakillam.com/wp-content/uploads/2012/05/guestbefore-1024x768.jpg', hosts_id: 1, address: '4106 12th Ave NE', city: 'Seattle', state: 'WA', zip: 98105, lat: 47.657107, lng: -122.315259, temp_control: true, access: false, size: 25, price: 3, active: true, deleted_at: null},
        {id: 7, name: "Storage Room in Kent Warehouse", description: "We're a small start-up that has an unused 5x5 ft office for storage.  We can reduce the size of the room as well which would then be shared. ", img_link: 'https://socialpantry.co.uk/wp-content/uploads/2017/03/HH-Empty-Office-space-copy-1024x768.jpg', hosts_id: 4, address: '6013 S 194th St', city: 'Kent', state: 'WA', zip: 98032, lat: 47.427924, lng: -122.261304, temp_control: false, access: false, size: 25, price: 5, active: true, deleted_at: null},
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
