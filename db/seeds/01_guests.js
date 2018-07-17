const TABLE_NAME = 'guests'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, first_name: 'Steve', last_name: 'Johnson', email: 'steve@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe', avatar: 'https://a0.muscache.com/im/pictures/5a78c209-7374-4b2d-a963-b88e32c9a6e1.jpg?aki_policy=profile_x_medium'},
        {id: 2, first_name: 'John', last_name: 'Smith', email: 'john@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe', avatar: 'https://a0.muscache.com/im/pictures/dd8705f6-0465-47b6-9774-dc9cef4d6092.jpg?aki_policy=profile_x_medium'},
        {id: 3, first_name: 'James', last_name: 'Seattle', email: 'james@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe', avatar: 'https://a0.muscache.com/im/pictures/user/bf338316-bfd7-476b-81a8-55f56fd1032b.jpg?aki_policy=profile_x_medium'},
        {id: 4, first_name: 'Michael', last_name: 'Lopez', email: 'michael@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe', avatar: 'https://a0.muscache.com/im/pictures/user/11463f0f-6f47-493a-a515-5e1ce31f925c.jpg?aki_policy=profile_x_medium'},
        {id: 5, first_name: 'Jane', last_name: 'Smith', email: 'jane@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe', avatar: 'https://a0.muscache.com/im/pictures/user/9a7bdce8-fbda-4dd1-b6e3-4ef323c89bc0.jpg?aki_policy=profile_x_medium'},
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};

// user email test@gmail.com
// user password 123
