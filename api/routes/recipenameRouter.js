const router = require("express").Router();
const db = require('../../data/helpers/recipesDB.js');

router
      .get('/', (req, res) => {
            db.find()
                  .then(recipes => {
                        res.status(200).json(recipe);
                  })
                  .catch(err => {
                        res.status(500).json({ error: 'could not get anything from the database' })
                  })
      })
      .post('/', (req, res) => {
            db.add(req.body)
                  .then(recipe => {
                        res.status(201).json({ message: 'new recipe name created'})
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
                  .then(recipe => {
                  res.status(200).json(recipe);
                  })
                  .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: "Couldn't get that recipe name.." });
                  });
      })

module.exports = router;