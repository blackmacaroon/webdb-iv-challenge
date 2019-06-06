
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('measurements').del()
    .then(function () {
      // Inserts seed entries
      return knex('measurements').insert([
        {measurement_unit: 'tsp'},
        {measurement_unit: 'tbsp'},
        {measurement_unit: 'fl oz'},
        {measurement_unit: 'gram'},
        {measurement_unit: 'cup'},
        {measurement_unit: 'lb'},
        {measurement_unit: 'pint'},
        {measurement_unit: 'quart'},
        {measurement_unit: 'gallon'},
        {measurement_unit: 'ml'},
        {measurement_unit: 'liter'},
        {measurement_unit: 'pinch'},
        {measurement_unit: 'hand full'},
        {measurement_unit: 'each'}
       
      ]);
    });
};
