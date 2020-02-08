const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Holasou plates')
})

module.exports = router;