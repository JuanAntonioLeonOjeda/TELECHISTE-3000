const router = require("express").Router()

const { 
  createJoke,
  addFavouriteJoke,
  addLike
 } = require("../controllers/joke.controller")

const {
  checkAuth
} = require('../middelwares')

router.post('/', createJoke)
router.post('/:id/favorite', checkAuth, addFavouriteJoke)
router.put('/:id/like', addLike)

module.exports = router
