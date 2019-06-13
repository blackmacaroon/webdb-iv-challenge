const db = require('../config.js');


module.exports = {
      find,
      findById,
      add,
      update,
      remove
};

function find() {
      return db('recipe-name');
}

function findById(id) {
      return db('recipe-name')
      .where({ id })
      .first();
}

async function add(recipeName) {
      const [id] = await db('recipe-name').insert(recipeName);
      return findById(id)
}

function update(id, changes) {
      return db('recipe-name')
      .where({ id })
      .update(changes);
}

function remove(id) {
      return db('recipe-name')
      .where({ id })
      .del();
}