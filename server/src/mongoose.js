const mongoose = require('mongoose')
const logger = require('./logger')

module.exports = function (app) {

  const {root_user, root_password, db_name, port, host} = app.get('mongodb');
  const password = encodeURIComponent(root_password);
  const connectionString = `mongodb://${root_user}:${password}@${host}:${port}/${db_name}?authSource=admin`

  mongoose.connect(
    connectionString,
    { useCreateIndex: true, useNewUrlParser: true }
  ).catch(err => {
    logger.error(err)
    process.exit(1)
  })

  app.set('mongooseClient', mongoose)
}
