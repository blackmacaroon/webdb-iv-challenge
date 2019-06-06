// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipebook.db3' //this file and db will be created when we run the migrations
    },
    useNullAsDefault: true
  },

  

};
