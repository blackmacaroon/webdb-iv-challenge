const db = require('../config.js');


module.exports = {
      find,
      findById,
      add,
      update,
      remove
};

function find() {
      return db('dishes');
}

function findById(id) {
      return db('dishes')
      .where({ id })
      .first();
}

async function add(dish) {
      const [id] = await db('dishes').insert(dish);
      return findById(id)
}

function update(id, changes) {
      return db('dishes')
      .where({ id })
      .update(changes);
}

function remove(id) {
      return db('dishes')
      .where({ id })
      .del();
}