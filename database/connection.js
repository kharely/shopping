const monk = require('monk')
const connection = process.env.MONGODB_URI || 'localhost/shopping';
const db = monk(connection)

db.then(() => {
  console.log('connected to server')
})

module.exports = db
