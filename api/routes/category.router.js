const router = require("express").Router()

const {
  getAllCategories,
  getOneCategory,
  createCategory,
  updateOneCategory,
  deleteOneCategory,
  getCategoryJokes
} = require("../controllers/category.controller")

router.get("/", getAllCategories)
router.get("/:id", getOneCategory)
router.get('/:id/jokes', getCategoryJokes)
router.post("/", createCategory)
router.put("/:id", updateOneCategory)
router.delete("/:id", deleteOneCategory)

module.exports = router
