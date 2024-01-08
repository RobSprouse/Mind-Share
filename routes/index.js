// COMMENT: this index.js file defines the entry point for all of the routes in the application
// COMMENT: imports the express package and the apiRoutes file
import express from "express";
import apiRoutes from "./api/index.js";

const router = express.Router();

// COMMENT: defines the only entry route that will be used in this application and if the user attempts to access any other route, they will receive an error message
router.use("/api", apiRoutes, (req, res) => res.send("This route does not exist!"));

// COMMENT: exports the router for the ../index.js file
export default router;
