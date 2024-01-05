import mongoose from "mongoose";

const { connect, connection } = mongoose;
const connectionString = "mongodb://localhost:27017/mind-shareDB";

connect(connectionString);

export default connection;
