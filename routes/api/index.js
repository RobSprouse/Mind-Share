// COMMENT: this index.js file defines the routes after api/ routes
// COMMENT: imports the express package and the userRoutes and thoughtRoutes
import express from "express";
import userRoutes from "./userRoutes.js";
import thoughtRoutes from "./thoughtRoutes.js";

const router = express.Router();

// COMMENT: defines the routes
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

// COMMENT: exports the router for ../routes/index.js
export default router;
