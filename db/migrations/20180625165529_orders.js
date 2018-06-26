exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', (table) => {
    table.increments();
    table.integer('guests_id').notNullable().references('guests.id');
    table.integer('spaces_id').notNullable().references('spaces.id');
    table.dateTime('start_date').notNullable();
    table.dateTime('end_date').notNullable();
    table.dateTime('cancelled_at').defaultTo(null);
    table.integer('total_cost').defaultTo(null)
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders')
};
