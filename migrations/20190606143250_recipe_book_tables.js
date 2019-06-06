
exports.up = function(knex, Promise) {
  return knex.schema
      .createTable('dishes', tbl => {
            tbl
            .increments();
            tbl
            .string('dish_type', 60)
            .notNullable()
            .unique()
      })
      .createTable('recipe-names', tbl => {
            tbl
            .increments();
            tbl
            .string('recipe_name', 100)
            .notNullable()
            tbl
            .integer('dish_id')
            .unsigned()
            .references('id')
            .inTable('dishes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
      })
      .createTable('ingredients', tbl => {
            tbl
            .increments()
            tbl
            .string('ingredient', 100)
      })
      .createTable('measurements', tbl => {
            tbl
            .increments()
            tbl
            .string('measurement_unit', 60)
      })
      .createTable('recipes')
};

exports.down = function(knex, Promise) {
      return knex.schema
            .dropTableIfExists('dishes')
            .dropTableIfExists('recipe-names')
            .dropTableIfExists('ingredients')
            .dropTableIfExists('measurements')
            .dropTableIfExists('recipes')
  
};
