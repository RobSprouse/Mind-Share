import mongoose from "mongoose";

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
               const dateObject = new Date(timestamp);
               return `${
                    dateObject.getMonth() + 1
               }/${dateObject.getDate()}/${dateObject.getFullYear()} at ${dateObject.getHours()}:${dateObject.getMinutes()}`;
          },
     },
});

export default ReactionSchema;
