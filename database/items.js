const db = require('./connection')


let objs =[
  {
    id:1,
    CODE: 'PANTS',
    NAME: 'Pants',
    PRICE: 5.00
  },
  {
    id:2,
    CODE: 'TSHIRT',
    NAME: 'T-shirt',
    PRICE: 20.00
  },
  {
    id:3,
    CODE: 'HAT',
    NAME: 'Hat',
    PRICE: 7.50
  }
]


const items = db.get('items')

function getAll(){
 let map1 = new Map()
 let a = items.find()
  if (!map1.has(a)){
    createItems()
  }
  return a
}

function createItems(){
  items.insert(objs)
}

function calculateItem(quantity, type){
  return findOneItem(type).then((items) => {
    if (type === 'PANTS' && quantity >= 2){
      return items.PRICE * (Math.floor(quantity/2) + (quantity %2))
    }else if(type === 'TSHIRT' && quantity >= 3){
      return ((items.PRICE * quantity) - ((0.05) * (items.PRICE * quantity)))
    }else{
      return items.PRICE * quantity
    }
  })
}

function findOneItem(type){
  return items.findOne({CODE: type})
}

module.exports = {
 getAll, createItems, calculateItem
}
