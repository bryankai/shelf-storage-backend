exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', (table) => {
    table.increments();
    table.integer('hosts_id').notNullable().references('hosts.id');
    table.integer('guests_id').notNullable().references('guests.id');
    table.dateTime('start_date').notNullable()
    table.dateTime('end_date').notNullable()
    table.dateTime('cancelled_date').defaultTo(null)
    table.integer('total_cost').defaultTo(null)
    table.timestamps(true, true)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders')
};
