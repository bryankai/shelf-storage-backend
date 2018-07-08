exports.up = function(knex, Promise) {
  return knex.schema.createTable('spaces', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('img_link').defaultTo('');
    table.integer('hosts_id').notNullable().references('hosts.id');
    table.string('address').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.integer('zip').notNullable();
    table.float('lat').notNullable();
    table.float('lng').notNullable();
    table.boolean('temp_control').defaultTo(false);
    table.boolean('access').defaultTo(false);
    table.integer('size').defaultTo(null);
    table.integer('price').defaultTo(null);
    table.boolean('active').defaultTo(false);
    table.dateTime('deleted_at').defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('spaces')
};
