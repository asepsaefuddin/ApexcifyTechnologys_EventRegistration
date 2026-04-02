const router = require("express").Router();
const {
  getEvents,
  getEventById,
  createEvent
} = require("../controllers/event.controller");

router.get("/", getEvents);
router.get("/:id", getEventById);
router.post("/", createEvent);

module.exports = router;