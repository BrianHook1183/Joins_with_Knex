# Node, Express, and PostgreSQL: Joins with Knex Assignment

## Instructions

At "Thinkful Eats", you've been tasked to query the database to get information about the owners of various restaurants in the city. There are currently two tables, restaurants and owners in the database. The restaurants table has the following columns:

- restaurant_id (primary key)
- restaurant_name (required string)
- cuisine (required string)
- address (required string)
- rating (optional numeric)
- owner_id (required foreign key)

The owners table has the following columns:

- owner_id (primary key)
- owner_name (required string)
- email (required string)
- address (required string)

To complete this assignment, you will need to complete the tasks described below to get the tests to pass.

## Existing files

In this checkpoint, all the required server routes have already set up for you, so you won't have to edit any of the _.router.js files. The test suite will automatically set up a test database and migrate as well as seed the database with some test data as well. Take some time to understand the content of the existing files, especially the _.router.js files to understand how and where the requests are routed.

> Do not directly change any of the seed data, as the tests rely on the specific test data set to work properly.

You will then have to write Knex queries to complete the functions defined inside the _.service.js and _.controller.js files.

## Tasks

In src/restaurants/restaurants.service.js:

1. Complete the list() query builder function to get a list of all the restaurants and their owners. Return only the restaurant_name, owner_name, email columns in your result. Order your results by owner_name.

2. Complete the listAverageRatingByOwner() query builder function to get the average restaurant rating grouped by owners. A sample result looks like the following:

```
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
```

Then in src/restaurants/restaurants.controller.js, update the listAverageRatingByOwner() route handler to call service.listAverageRatingByOwner().
