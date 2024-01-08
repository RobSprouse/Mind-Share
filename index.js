// COMMENT: imports the express package, the connecting config, and the routes
import express from "express";
import connection from "./config/connection.js";
import router from "./routes/index.js";

// COMMENT: defines the port and the express app
const PORT = 3001;
const app = express();

// COMMENT: defines the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

// COMMENT: connects to the database and starts the server
connection.once("open", () => {
     app.listen(PORT, () => {
          console.log(`API server running on port ${PORT}!`);
     });
});
