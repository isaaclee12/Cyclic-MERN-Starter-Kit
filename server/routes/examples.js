import express from "express";
const router = express.Router();
import examplesController from "../controllers/examples.js";
import validateBody from "../middleware/validateBody.js";
import validateObjectId from "../middleware/validateObjectId.js";
import { createExampleSchema } from "../models/Example.js";

// These routes extend the /examples/ route
router.post(
  "/",
  validateBody(createExampleSchema),
  // maxExamples,
  // This calls the examples controller
  examplesController.create
);

router.get("/", examplesController.getAll);

router.get("/:id", validateObjectId, examplesController.getOne);

router.delete(
  "/:id",
  validateObjectId,
  examplesController.deleteExample
);

router.delete(
  "/deleteAllExamples/:groupId",
  examplesController.deleteAllExamples
);

export default router;
