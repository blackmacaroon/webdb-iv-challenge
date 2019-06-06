
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_names').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_names').insert([
        {dish_id: 1, name: 'Mushroom & Onion Pizza'},
        {dish_id: 2, name: 'Pesto Gnocci'},
        {dish_id: 3, name: 'Turkey Green Apple Fig Cheddar Quesadilla'},
        {dish_id: 3, name: 'Salmon Reuben On Rye'},
        {dish_id: 4, name: 'Berry Spinach Salad w/Mustard Vinegrette'},
        {dish_id: 5, name: 'Mushroom Mashed Potatoes'},
        {dish_id: 6, name: 'Apricot Glazed Almond Cupcakes'},
        {dish_id: 6, name: 'Chocolate Macarons'}
        
      ]);
    });
};
