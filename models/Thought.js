import mongoose from "mongoose";
import ReactionSchema from "./Reaction.js";

const { Schema, model } = mongoose;

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
                    const dateObject = new Date(timestamp);
                    return `${
                         dateObject.getMonth() + 1
                    }/${dateObject.getDate()}/${dateObject.getFullYear()} at ${dateObject.getHours()}:${dateObject.getMinutes()}`;
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

ThoughtSchema.virtual("reactionCount").get(function () {
     return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

export default Thought;
