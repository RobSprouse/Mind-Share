// COMMENT: imports the mongoose package for the schema and model setup, the ReactionSchema to be used a a sub-document, and the date formatting helper
import mongoose from "mongoose";
import ReactionSchema from "./Reaction.js";
import formatDate from "../utils/helpers.js";

// COMMENT: deconstructs the Schema and model constructors from mongoose
const { Schema, model } = mongoose;

// COMMENT: defines the ThoughtSchema
const ThoughtSchema = new Schema(
     {
          thoughtText: {
               type: String,
               required: "An entry between 1 and 280 characters is required",
               minLength: 1,
               maxLength: 280,
          },
          createdAt: {
               type: Date,
               default: Date.now,
               get: (timestamp) => {
                    return formatDate(timestamp);
               },
          },
          username: {
               type: String,
               required: "Username is required",
          },
          reactions: [ReactionSchema],
     },
     {
          toJSON: {
               virtuals: true,
               getters: true,
          },
     }
);

// COMMENT: defines the virtual reactionCount that retrieves the length of the thought's reactions array field on query
ThoughtSchema.virtual("reactionCount").get(function () {
     return this.reactions.length;
});

// COMMENT: creates the Thought model using the ThoughtSchema
const Thought = model("Thought", ThoughtSchema);

// COMMENT: exports the Thought model
export default Thought;
