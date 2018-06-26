exports.up = function (knex, Promise) {
    return knex.schema.createTable('hosts', table => {
        table.increments()
        table.string('first_name').notNullable()
        table.string('last_name').notNullable()
        table.string('email').notNullable()
        table.string('hashed_password').notNullable()
        table.timestamps(true, true)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('hosts')
};
