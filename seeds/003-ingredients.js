
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'yellow onion'},
        {name: 'eggs'},
        {name: 'mushrooms'},
        {name: 'sugar'},
        {name: 'flour'},
        {name: 'cocoa powder'},
        {name: 'fresh spinach'},
        {name: 'russet potatoes'},
        {name: 'fresh basil'},
        {name: 'slivered almonds'},
        {name: 'blueberries'},
        {name: 'strawberries'},
        {name: 'vinegarette'},
        {name: 'salmon'},
        {name: 'sliced turkey'},
        {name: 'yellow mustard'}
      ]);
    });
};
