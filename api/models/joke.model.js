const { DataTypes } = require("sequelize")
const { connection } = require("../../database")

const Joke = connection.define(
  'joke',
  {
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  },
  {
    timestamps: false
  }
)

module.exports = Joke
