
exports.up = function(knex) {
  // 1 Recipe has many ingredients
  // Ingredients table will refer to Recipes table
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 128).notNullable()
  })
  .createTable('ingredients', tbl => {
     tbl.increments()
     tbl.string('recipe_name' ,128).notNullable()
     // foreign key that points to recipe table
     tbl.integer('recipe_id')
     .unsigned()
     .notNullable()
     .references('id')
     .inTable('recipe')
  })
};

exports.down = function(knex) {
    // shoes and socks principle cant take off your socks before your shoes
  return knex.schema.dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};
