const express = require('express');

const server = express();

server.use(express.json());

// sanity check route 
server.get('/', (req, res) => {
  res.send(`<h2>you're killin' it.</h2>`).json({ message: 'nailed it.' })
  .catch(err => {
        console.log(`\nERROR`, err);
        res.status(500).json({ error: "i cant. even."})
  })
});

module.exports = server;
