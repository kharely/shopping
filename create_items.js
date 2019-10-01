const db = require('./database/connection')
const items = db.get('items')

function options(){
return [
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
}

function createItems(){
  items.insert(options()).then(()=>{
    console.log('done')
  })
}

createItems()
