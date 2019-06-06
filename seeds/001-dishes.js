
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: "pizzas"},
        {name: "pastas"},
        {name: "sandwiches"},
        {name: "salads"},
        {name: "sides"},
        {name: "desserts"}
      ]);
    });
};
