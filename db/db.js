module.exports = function (success, error) {
  if (typeof error !== 'function') {
    error = () => {}
  }

  const mongoose = require('mongoose')
  const { DBHOST, DBNAME, DBPORT } = require('./config/config')
  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)
  mongoose.connection.once('open', async () => {
    success()
  })
  mongoose.connection.on('error', () => {
    error()
  })
  mongoose.connection.on('close', () => {
    console.log('连接关闭')
  })
}
