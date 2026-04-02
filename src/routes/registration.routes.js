const router = require("express").Router();
const {
  getRegistrations,
  getUserRegistrations,
  registerEvent,
  cancelRegistration
} = require("../controllers/registration.controller");

router.get("/", getRegistrations);
router.get("/user/:user", getUserRegistrations);
router.post("/", registerEvent);
router.delete("/:id", cancelRegistration);

module.exports = router;