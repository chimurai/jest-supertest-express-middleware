const express = require('express')

const app = express()

app.get('/user', function (req, res) {
  res.status(200).json({ name: 'john' })
})

module.exports = app
