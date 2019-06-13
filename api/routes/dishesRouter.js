const router = require("express").Router();
const db = require('../../data/helpers/dishesDB.js');

router
      .get('/', (req, res) => {
            db.find()
                  .then(dishes => {
                        res.status(200).json(dishes);
                  })
                  .catch(err => {
                        res.status(500).json({ error: 'could not get anything from the database' })
                  })
      })
      .post('/', (req, res) => {
            db.add(req.body)
                  .then(dish => {
                        res.status(201).json({ message: 'new dish created'})
                  })
                  .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: 'could not add to database' })
                  })
      })

router
      .get('/:id', (req, res) => {
            const id = req.params.id;
            db.findById(id)
                  .then(dish => {
                  res.status(200).json(dish);
                  })
                  .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: "Couldn't get that dish.." });
                  });
      })

module.exports = router;