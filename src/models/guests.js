const knex = require("../../db/knex");
const bcrypt = require("bcrypt");

////////////////////////////////////////////////////////////////////
// Guests
////////////////////////////////////////////////////////////////////

function getAllGuests(guests_id) {
  return knex("guests");
}

function getGuestByEmail(email) {
  return knex("guests").where({ email }).first();
}

function getOneGuest(id) {
  return knex("guests").where({ id }).first();
}

function createGuest(
  first_name,
  last_name,
  email,
  password,
  avatar = "https://www.lagersmit.com/wp-content/uploads/2014/09/default_avatar-2.gif"
) {
  return getGuestByEmail(email)
    .then(function (data) {
      if (data) throw { status: 400, message: "Email already being used" };
      const hp = bcrypt.hash(password, 10);
      return hp;
    })
    .then(function (hashedPassword) {
      return knex("guests")
        .insert({
          first_name,
          last_name,
          email,
          hashed_password: hashedPassword,
          avatar,
        })
        .returning("*")
        .then(function ([data]) {
          console.log("returned data", data);
          return data;
        });
    });
}

////////////////////////////////////////////////////////////////////
// ORDERS
////////////////////////////////////////////////////////////////////

function createOrder(guests_id, spaces_id, start_date, end_date, total_cost) {
  return knex("orders")
    .insert({
      guests_id,
      spaces_id,
      start_date,
      end_date,
      total_cost,
    })
    .returning("*")
    .then(function ([data]) {
      return data;
    });
}

function getAllOrdersByGuestId(guests_id) {
  return knex("orders")
    .where({ guests_id })
    .join("spaces", "spaces.id", "orders.spaces_id")
    .join("hosts", "hosts.id", "spaces.hosts_id")
    .select(knex.raw("orders.*"))
    .select(
      "spaces.name as name",
      "spaces.img_link as img_link",
      "spaces.address as address",
      "spaces.city as city",
      "spaces.state as state",
      "spaces.size as size",
      "spaces.lat as lat",
      "spaces.lng as lng",
      "hosts.id as hosts_id",
      "hosts.first_name as hostFirstName",
      "hosts.last_name as hostLastName",
      "hosts.avatar as hostAvatar"
    );
}

function getOneOrder(id) {
  return knex("orders").where({ id }).first();
}

function cancelOrderByGuest(id, cancelled_at) {
  return knex("orders")
    .where({ id })
    .update({ cancelled_at })
    .returning("*")
    .then(function ([data]) {
      return data;
    });
}

////////////////////////////////////////////////////////////////////
// Export
////////////////////////////////////////////////////////////////////

module.exports = {
  // Guests
  createGuest,
  getGuestByEmail,
  getAllGuests,
  getOneGuest,
  // // Orders
  createOrder,
  getAllOrdersByGuestId,
  getOneOrder,
  cancelOrderByGuest,
};
