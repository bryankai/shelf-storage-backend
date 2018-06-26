exports.up = function(knex, Promise) {
  return knex.schema.createTable('spaces', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('img_link').defaultTo('');
    table.integer('hosts_id').notNullable().references('hosts.id');
    table.string('address').defaultTo('');
    table.string('city').defaultTo('');
    table.string('state').defaultTo('');
    table.integer('zip').defaultTo(null);
    table.boolean('temp_control').defaultTo(false);
    table.boolean('access').defaultTo(false);
    table.integer('size').defaultTo(null);
    table.integer('price').defaultTo(null);
    table.dateTime('deleted_at').defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('spaces')
};
