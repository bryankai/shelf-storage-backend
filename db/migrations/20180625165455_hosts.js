exports.up = function (knex, Promise) {
    return knex.schema.createTable('hosts', table => {
        table.increments()
        table.string('first_name').notNullable()
        table.string('last_name').notNullable()
        table.string('email').notNullable()
        table.string('hashed_password').notNullable()
        table.string('avatar').defaultTo('https://www.lagersmit.com/wp-content/uploads/2014/09/default_avatar-2.gif')
        table.timestamps(true, true)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('hosts')
};
