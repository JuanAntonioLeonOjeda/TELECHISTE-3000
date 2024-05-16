const { DataTypes } = require("sequelize")
const { connection } = require("../../database")

const ContactInfo = connection.define("contact_info", {
  bio: {
    type: DataTypes.TEXT,
  },
  avatar: {
    type: DataTypes.STRING,
    defaultValue:
      "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=",
  }
  },
  {
    timestamps: false
  }
)

module.exports = ContactInfo
