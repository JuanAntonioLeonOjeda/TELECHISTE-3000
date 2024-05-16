const User = require('../api/models/user.model')
const ContactInfo = require('../api/models/contact.model')
const Joke = require('../api/models/joke.model')
const Category = require('../api/models/category.model')

const defineRelations = () => {
  //ONE TO ONE
  User.hasOne(ContactInfo)
  ContactInfo.belongsTo(User)

  // ONE TO MANY
  User.hasMany(Joke)
  Joke.belongsTo(User)

  Category.hasMany(Joke)
  Joke.belongsTo(Category)

  //MANY TO MANY
  User.belongsToMany(Joke, { 
    through: 'favorites', 
    timestamps: false 
  })
  Joke.belongsToMany(User, { 
    through: 'favorites', 
    timestamps: false 
  })
}

module.exports = defineRelations