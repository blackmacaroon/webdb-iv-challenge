const router = require("express").Router();
const db = require('../../data/helpers/ingredientsDB.js');

router
      .get('/', (req, res) => {
            db.find()
                  .then(ingredients => {
                        res.status(200).json(ingredients);
                  })
                  .catch(err => {
                        res.status(500).json({ error: 'could not get anything from the database' })
                  })
      })
      .post('/', (req, res) => {
            db.add(req.body)
                  .then(ingredient => {
                        res.status(201).json({ message: 'new ingredient created'})
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
                  .then(ingredient => {
                  res.status(200).json(ingredient);
                  })
                  .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: "Couldn't get that ingredient.." });
                  });
      })

module.exports = router;