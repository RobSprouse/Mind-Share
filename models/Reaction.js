import mongoose from "mongoose";
import formatDate from "../utils/helpers.js";

const { Schema } = mongoose;

const ReactionSchema = new Schema({
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
});

export default ReactionSchema;
