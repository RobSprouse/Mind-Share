// COMMENT: imports the express package and the userController
import express from "express";
import { userController } from "../../controllers/userController.js";

const router = express.Router();

// COMMENT: deconstructs the methods from the userController to be used in the routes
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend } = userController;

// COMMENT: defines the routes for the methods
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

// COMMENT: exports the router for ./index.js
export default router;
