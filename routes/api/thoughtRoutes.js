import express from "express";
import { thoughtController } from "../../controllers/thoughtController.js";
const router = express.Router();
const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, deleteReaction } =
     thoughtController;

router.route("/").get(getAllThoughts);
router.route("/:userId").post(createThought);
router.route("/:thoughtId/reactions").post(addReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);
router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

export default router;
