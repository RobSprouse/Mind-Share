// COMMENT: imports the mongoose package to enable a connection to the database
import mongoose from "mongoose";

// COMMENT: deconstructs connect and connection from mongoose and defines the connection to the database
const { connect, connection } = mongoose;
const connectionString = "mongodb://localhost:27017/mind-shareDB";

// COMMENT: connects to the database
connect(connectionString);

// COMMENT: exports the connection
export default connection;
