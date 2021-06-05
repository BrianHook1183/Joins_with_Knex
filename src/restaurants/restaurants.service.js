const knex = require("../db/connection");

const tableName = "restaurants";

function averageRating() {
  // solution to previous assignment
  return knex(tableName).avg("rating").as("average").first();
}

function count() {
  return knex(tableName).count("restaurant_id").first();
}

function create(newRestaurant) {
  return knex(tableName)
    .insert(newRestaurant, "*")
    .then((createdRecords) => createdRecords[0]);
}

function destroy(restaurant_id) {
  return knex(tableName).where({ restaurant_id }).del();
}

function list() {
  // my solution
  return knex("restaurants as r")
    .join("owners as o", "o.owner_id", "r.owner_id")
    .select("r.restaurant_name", "o.owner_name", "o.email")
    .orderBy("o.owner_name");
}

function listAverageRatingByOwner() {
  //* sample result
  /* 
  {
  "data": [
    {
      "avg": 3.8200000000000003,
      "owner_name": "Amata Frenzel;"
    },
    {
      "avg": 2.25,
      "owner_name": "Curtice Grollmann"
    },
    {
      "avg": 2.45,
      "owner_name": "Daffy Furzer"
    }
  ]
}
  */
  // my solution
  return knex("restaurants as r")
    .join("owners as o", "o.owner_id", "r.owner_id")
    .avg("r.rating")
    .select("o.owner_name")
    .groupBy("o.owner_name");
}

function read(restaurant_id) {
  return knex(tableName).select("*").where({ restaurant_id }).first();
}

function readHighestRated() {
  // solution to previous assignment
  return knex(tableName)
    .max("rating")
    .select("*")
    .groupBy("rating", "restaurant_id")
    .orderBy("rating", "desc")
    .first();
}

function update(updatedRestaurant) {
  return knex(tableName)
    .select("*")
    .where({ restaurant_id: updatedRestaurant.restaurant_id })
    .update(updatedRestaurant, "*");
}

module.exports = {
  averageRating,
  count,
  create,
  delete: destroy,
  list,
  listAverageRatingByOwner,
  read,
  readHighestRated,
  update,
};
