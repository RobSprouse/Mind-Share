import mongoose from "mongoose";

const { Schema, model } = mongoose;

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

UserSchema.virtual("friendCount").get(function () {
     return this.friends.length;
});

const User = model("User", UserSchema);

export default User;
