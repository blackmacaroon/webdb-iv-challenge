
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {dish_type: "pizzas"},
        {dish_type: "pastas"},
        {dish_type: "sandwiches"},
        {dish_type: "salads"},
        {dish_type: "sides"},
        {dish_type: "desserts"}
      ]);
    });
};
