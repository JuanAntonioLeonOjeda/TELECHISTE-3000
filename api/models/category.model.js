const { DataTypes } = require("sequelize")
const { connection } = require("../../database")

const Category = connection.define(
  'category',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

module.exports = Category