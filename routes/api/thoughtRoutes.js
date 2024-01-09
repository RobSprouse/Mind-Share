// COMMENT: imports the express package and the thoughtController
import express from "express";
import { thoughtController } from "../../controllers/thoughtController.js";

const router = express.Router();

// COMMENT: deconstructs the methods from the thoughtController to be used in the routes
const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, deleteReaction } =
     thoughtController;

// COMMENT: defines the routes for the methods
router.route("/").get(getAllThoughts);
router.route("/:userId").post(createThought);
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);
router.route("/:thoughtId/reactions").post(addReaction);
router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

// COMMENT: exports the router for ./index.js
export default router;
