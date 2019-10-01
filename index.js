const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Joi = require('joi')
const port = 3000

const app = express()
const items = require('./database/items')

app.use(bodyParser.json());

app.get('/', function(req, res){
  items.getAll().then((items)=>{
    res.json(items)
  })
})

app.post('/', async function(req, res){
  let qpants = req.body.pants
  let qtshirt = req.body.tshirt
  let qhat = req.body.hat
  let total = (await items.calculateItem(qpants, 'PANTS')) + (await items.calculateItem(qtshirt, 'TSHIRT')) + (await items.calculateItem(qhat, 'HAT'))
  res.json (total)
})

app.listen(port)

module.exports = app
