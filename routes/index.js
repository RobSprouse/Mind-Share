import express from "express";
import apiRoutes from "./api/index.js";

const router = express.Router();

router.use("/api", apiRoutes, (req, res) => res.send("Wrong route!"));

export default router;
