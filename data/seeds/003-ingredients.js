
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'yellow onion'},
        {ingredient: 'eggs'},
        {ingredient: 'mushrooms'},
        {ingredient: 'sugar'},
        {ingredient: 'flour'},
        {ingredient: 'cocoa powder'},
        {ingredient: 'fresh spinach'},
        {ingredient: 'russet potatoes'},
        {ingredient: 'fresh basil'},
        {ingredient: 'slivered almonds'},
        {ingredient: 'blueberries'},
        {ingredient: 'strawberries'},
        {ingredient: 'vinegarette'},
        {ingredient: 'salmon'},
        {ingredient: 'sliced turkey'},
        {ingredient: 'yellow mustard'}
      ]);
    });
};
