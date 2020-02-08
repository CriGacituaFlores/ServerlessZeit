const express = require('express');
const app = express()

app.get('*', (req, res) => {
  console.log('wenaa')
  res.send({ mensaje: 'Chanchito feliz uwu' })
})

module.exports = app;