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
  let total = 0
  let qpants = req.body.pants
  let qtshirt = req.body.tshirt
  let qhat = req.body.hat
  total = (await items.pants(qpants)) + (await items.tshirt(qtshirt)) + (await items.hat(qhat))
  res.json (total)
})

app.listen(port)
