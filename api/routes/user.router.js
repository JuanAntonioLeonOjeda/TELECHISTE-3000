const router = require("express").Router()

const {
  getAllUsers,
  getOneUser,
  getOwnProfile,
  createUser,
  updateOneUser,
  deleteOneUser
} = require('../controllers/user.controller')

const {
  checkAuth,
  checkAdmin
} = require('../middelwares')

router.get('/', checkAuth, checkAdmin, getAllUsers)
router.get('/profile', checkAuth, getOwnProfile)
router.get('/:id', getOneUser)
router.post('/', createUser)
router.put('/:id', updateOneUser)
router.delete('/:id', deleteOneUser)

module.exports = router
