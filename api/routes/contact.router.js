const router = require("express").Router();

const {
  getAllContactInfo,
  createContactInfo
} = require("../controllers/contact.controller");

router.get("/", getAllContactInfo);
// router.get("/:id", getOneUser);
router.post("/", createContactInfo);
// router.put("/:id", updateOneUser);
// router.delete("/:id", deleteOneUser);

module.exports = router;
