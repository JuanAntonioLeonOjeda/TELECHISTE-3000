const { Sequelize } = require('sequelize')

// Instancia de la conexión a nuestra base de datos
const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
  }
)

// Función de comprobación de la conexión a la base de datos
const checkDB = async () => {
  try {
    await connection.authenticate()
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:')
    console.error(error)
  }
}

// Función para sincronizar los modelos definidos en nuestro código con nuestra base de datos
const syncModels = async () => {
  try {
    await connection.sync()
    console.log('Models syncrhonized!')
  } catch (error) {
    console.error("Unable to sync models:")
    console.error(error)
  }
}

module.exports = {
  connection,
  checkDB,
  syncModels
}