
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'tsp'},
        {name: 'tbsp'},
        {name: 'fl oz'},
        {name: 'gram'},
        {name: 'cup'},
        {name: 'lb'},
        {name: 'pint'},
        {name: 'quart'},
        {name: 'gallon'},
        {name: 'ml'},
        {name: 'liter'},
        {name: 'pinch'},
        {name: 'hand full'},
        {name: 'unit'}
       
      ]);
    });
};
