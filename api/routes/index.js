const router = require('express').Router() // Creo una instancia de router de express para definir las posibles rutas a emplear

const userRouter = require('./user.router')
const contactRouter = require('./contact.router')
const categoryRouter = require('./category.router')
const jokeRouter = require('./joke.router')
const authRouter = require('./auth.router')

router.use('/user', userRouter)
router.use('/contact', contactRouter)
router.use('/category', categoryRouter)
router.use('/joke', jokeRouter)
router.use('/auth', authRouter)

module.exports = router // Exporto la instancia de este router para poder importarlo en el index.js principal