// COMMENT: imports the mongoose package for the schema and model setup, and the ThoughtSchema
import mongoose from "mongoose";
import Thought from "./Thought.js";

// COMMENT: deconstructs the Schema and model constructors from mongoose
const { Schema, model } = mongoose;

// COMMENT: defines the UserSchema
const UserSchema = new Schema(
     {
          username: {
               type: String,
               unique: true,
               required: "Username is required",
               trim: true,
          },
          email: {
               type: String,
               unique: true,
               required: "Email is required",
               match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid e-mail address"],
          },
          thoughts: [
               {
                    type: Schema.Types.ObjectId,
                    ref: "Thought",
               },
          ],
          friends: [
               {
                    type: Schema.Types.ObjectId,
                    ref: "User",
               },
          ],
     },
     {
          toJSON: {
               virtuals: true,
          },
     }
);

// COMMENT: defines the pre hook for the deleteOne() method to delete the user's associated thoughts before deleting the user
UserSchema.pre("deleteOne", { document: true, query: false }, async function (next) {
     try {
          await Thought.deleteMany({ username: this.username });
          next();
     } catch (error) {
          next(error);
     }
});

// COMMENT: defines the virtual friendCount that retrieves the length of the user's friends array field on query
UserSchema.virtual("friendCount").get(function () {
     return this.friends.length;
});

// COMMENT: creates the User model using the UserSchema
const User = model("User", UserSchema);

// COMMENT: exports the User model
export default User;
