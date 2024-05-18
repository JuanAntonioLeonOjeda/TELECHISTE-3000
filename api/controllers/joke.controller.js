const Joke = require('../models/joke.model')
const User = require('../models/user.model')

const createJoke = async (req, res) => {
  try {
    const joke = await Joke.create(req.body)

    res.status(200).json({
      message: "Joke created",
      result: joke,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating joke",
      result: error,
    });
  }
}

const addFavouriteJoke = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id)

    if (!joke) {
      res.status(404).json()
    }

    // Al definir una relación Many to Many entre Joke y User, Sequelize nos ha generado automáticamente el método addUser, donde podemos añadir al usuario que tenemos guardado en res.locals, que es el usuario logueado
    await joke.addUser(res.locals.user)

    res.status(200).json({
      message: 'joke added',
      result: joke
    })
  } catch (error) {
    
  }
}

const addLike = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id)

    if (!joke) {
      res.status(404).json({
        message: 'Joke not found',
        result: 0
      })
    }

    joke.likes++ // Aumentamos en 1 el contador de likes

    await joke.save() // Guardamos los cambios realizados al chiste en la base de datos

    res.status(200).json({
      message: 'Liked added',
      result: joke.likes
    })
  } catch (error) {
    
  }
}

module.exports = {
  createJoke,
  addFavouriteJoke,
  addLike
}
