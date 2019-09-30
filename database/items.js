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

async function pants(quantity){
  let p = await items.findOne({CODE: 'PANTS'}).then((items)=>{
    if (quantity >= 2){
      return items.PRICE * (Math.floor(quantity/2) + (quantity %2))
    }else{
      return items.PRICE * quantity
    }
  })
  return p
}

async function hat(quantity){
  var h = await items.findOne({CODE: 'HAT'}).then((items)=>{
      return items.PRICE * quantity
    })
  return h
}

async function tshirt(quantity){
  let t = items.findOne({CODE: 'TSHIRT'}).then((items)=> {
    if (quantity >= 3){
      return ((items.PRICE -1) * quantity)
    }else {
      return (items.PRICE * quantity)
    } 
  })
  return t
}

module.exports = {
 getAll, createItems, pants, tshirt, hat
}
