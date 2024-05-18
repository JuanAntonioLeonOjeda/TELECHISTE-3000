const { DataTypes } = require("sequelize")
const { connection } = require('../../database') // Instancia de la conexión generado en el archivo index.js de la carpeta database

const User = connection.define(
  "user", // Nombre de la tabla en la base de datos
  {
    // Columnas de la tabla
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Hacemos que sea un campo obligatorio
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true // Hacemos que sea un campo con valor único
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'), // Definimos 'user' y 'admin' como los únicos valores válidos para la columna 'role'
      defaultValue: 'user' // Hacemos que su valor por defecto sea 'user'
    }
  },
  {
    timestamps: false // Indicamos que no queremos generar las columnas de 'fecha de creación' ni de 'fecha de última actualización'
  }
)

module.exports = User
