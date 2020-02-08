const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Holasou plates')
})

router.get('/:id', (req, res) => {
  res.send(req.params.id)
})

router.post('/', (req, res) => {
  res.send('soy post')
})

router.put('/:id', (req, res) => {
  res.send('soy put')
})

router.delete('/:id', (req, res) => {
  res.send('delete')
})

module.exports = router;