// COMMENT: imports the mongoose package for the schema and the date formatting helper
import mongoose from "mongoose";
import formatDate from "../utils/helpers.js";

// COMMENT: deconstructs the Schema constructor from mongoose
const { Schema } = mongoose;

// COMMENT: defines the ReactionSchema
const ReactionSchema = new Schema(
     {
          reactionId: {
               type: Schema.Types.ObjectId,
               default: () => new mongoose.Types.ObjectId(),
          },
          reactionBody: {
               type: String,
               required: true,
               maxLength: 280,
          },
          username: {
               type: String,
               required: true,
          },
          createdAt: {
               type: Date,
               default: Date.now,
               get: (timestamp) => {
                    return formatDate(timestamp);
               },
          },
     },
     {
          toJSON: {
               getters: true,
          },
     }
);

// COMMENT: exports the ReactionSchema
export default ReactionSchema;
