const TABLE_NAME = 'hosts'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, first_name: 'Ariel', last_name: 'Anderson', email: 'ariel@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe', avatar: 'https://media.licdn.com/dms/image/C5603AQG9ptrSLXSIog/profile-displayphoto-shrink_800_800/0?e=1536192000&v=beta&t=1_xWVWIt3ezSwtp0GkD0QdT79OFdOJtUbGCDzYTo-XI'},
        {id: 2, first_name: 'Bob', last_name: 'Bolt', email: 'bob@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe', avatar: 'https://a0.muscache.com/im/pictures/user/ca134f6b-59e0-4e44-9c42-6b14ada1a07d.jpg?aki_policy=profile_x_medium'},
        {id: 3, first_name: 'Cathleen', last_name: 'Chase', email: 'cathleen@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe', avatar: 'https://a0.muscache.com/im/pictures/454744fa-f630-4200-a466-0ea0e7cd8ae9.jpg?aki_policy=profile_x_medium'},
        {id: 4, first_name: 'Daniel', last_name: 'Doppler', email: 'daniel@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe', avatar: 'https://a0.muscache.com/im/users/26967583/profile_pic/1427823555/original.jpg?aki_policy=profile_x_medium'},
        {id: 5, first_name: 'Emily', last_name: 'Everett', email: 'emily@gmail.com', hashed_password: '$2a$10$vmSqInKADj2nT7iy2C1z9.uggyjKcodbPgCFYyerIGFHwgyxnnlfe', avatar: 'https://a0.muscache.com/im/pictures/489fca10-66b4-4baa-a692-4744d49d810a.jpg?aki_policy=profile_x_medium'},
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};

// user email test@gmail.com
// user password 123
