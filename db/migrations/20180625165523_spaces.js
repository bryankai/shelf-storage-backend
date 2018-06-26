exports.up = function(knex, Promise) {
  return knex.schema.createTable('spaces', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('description').notNullable().defaultTo('');
    table.string('img_link').defaultTo('');
    table.integer('hosts_id').notNullable().references('hosts.id');
    table.string('address').defaultTo('');
    table.boolean('temp_control').defaultTo('false');
    table.boolean('24/7_access').defaultTo('false');
    table.integer('size').defaultTo('0');
    table.integer('price').defaultTo('0');
    table.dateTime('deleted_at').defaultTo(null)
    table.timestamps(true, true)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('spaces')
};
