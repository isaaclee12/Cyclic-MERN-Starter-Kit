const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/events");
const maxEvents = require("../middleware/maxEvents");
const validateBody = require("../middleware/validateBody");
const validateObjectId = require("../middleware/validateObjectId");
const { createEventSchema } = require("../models/Event");

router.post(
  "/",
  validateBody(createEventSchema),
  maxEvents,
  eventsController.create
);

router.get("/", eventsController.getAll);

router.get("/:id", validateObjectId, eventsController.getOne);

router.delete(
  "/:id",
  validateObjectId,
  eventsController.deleteEvent
);

router.delete(
  "/deleteAllEvents/:groupId",
  eventsController.deleteAllEvents
);

module.exports = router;
