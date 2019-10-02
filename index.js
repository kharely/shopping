const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Joi = require('joi')
const port = 3000

const app = express()
const items = require('./database/items')

app.use(bodyParser.json());
app.use(cors())
app.use(morgan('tiny'))

app.get('/', function(req, res){
  items.getAll().then((items)=>{
    res.json(items)
  })
})

app.post('/', async function(req, res){
  let pants = await items.calculateItem(req.body.pants, 'PANTS')
  let tshirt = await items.calculateItem(req.body.tshirt, 'TSHIRT')
  let hat = await items.calculateItem(req.body.hat, 'HAT')
  let total = pants + tshirt + hat
  res.json({'total':total, 'pants':pants, 'tshirt':tshirt, 'hat':hat})
})

app.listen(port)

module.exports = app
