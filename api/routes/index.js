const router = require('express').Router() // Creo una instancia de router de express para definir las posibles rutas a emplear

router.get("/", (req, res) => {
  res.status(200).send("Express working");
});

module.exports = router // Exporto la instancia de este router para poder importarlo en el index.js principal