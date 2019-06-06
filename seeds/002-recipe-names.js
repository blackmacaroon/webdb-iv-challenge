
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe-names').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe-names').insert([
        {dish_id: 1, recipe_name: 'Mushroom & Onion Pizza'}, //1
        {dish_id: 2, recipe_name: 'Pesto Gnocci'}, //2
        {dish_id: 3, recipe_name: 'Turkey Green Apple Fig Cheddar Quesadilla'}, //3
        {dish_id: 3, recipe_name: 'Salmon Reuben On Rye'}, //4
        {dish_id: 4, recipe_name: 'Berry Spinach Salad w/Mustard Vinegrette'}, //5
        {dish_id: 5, recipe_name: 'Mushroom Mashed Potatoes'},//6
        {dish_id: 6, recipe_name: 'Apricot Glazed Almond Cupcakes'}, //7
        {dish_id: 6, recipe_name: 'Chocolate Macarons'} //8
        
      ]);
    });
};
