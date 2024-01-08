// COMMENT: imports the Thought and User models
import Thought from "../models/Thought.js";
import User from "../models/User.js";

// COMMENT: exports the thoughtController which contains the methods for all of the routes
export const thoughtController = {
     // COMMENT: Get all thoughts
     async getAllThoughts(req, res) {
          try {
               const thoughts = await Thought.find({});
               res.json(thoughts);
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     },
     // COMMENT: Get a single thought by its _id
     async getThoughtById({ params }, res) {
          try {
               const thought = await Thought.findOne({ _id: params.id });
               if (!thought) {
                    res.status(404).json({ message: "No thought found with this id!" });
                    return;
               }
               res.json(thought);
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     },
     // COMMENT: Create a new thought
     async createThought({ body, params }, res) {
          try {
               const thought = await Thought.create(body);
               const user = await User.findByIdAndUpdate(
                    params.userId,
                    { $push: { thoughts: thought._id } },
                    { new: true, runValidators: true }
               );

               if (!user) {
                    return res.status(404).json({ message: "No user with this id!" });
               }

               res.json({ thought, user });
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     },
     // COMMENT: Update a thought by its _id
     async updateThought({ params, body }, res) {
          try {
               const updatedThought = await Thought.findOneAndUpdate({ _id: params.id }, body, { new: true });
               if (!updatedThought) {
                    res.status(404).json({ message: "No thought found with this id!" });
                    return;
               }
               res.json(updatedThought);
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     },
     // COMMENT: Delete a thought by its _id
     async deleteThought({ params }, res) {
          try {
               const thought = await Thought.findOneAndDelete({ _id: params.id });
               if (!thought) {
                    res.status(404).json({ message: "No thought found with this id!" });
                    return;
               }
               res.json(thought);
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     },
     // COMMENT: Add a reaction to a thought
     async addReaction({ params, body }, res) {
          try {
               const updatedThought = await Thought.findOneAndUpdate(
                    { _id: params.thoughtId },
                    { $push: { reactions: body } },
                    { new: true, runValidators: true }
               );
               if (!updatedThought) {
                    res.status(404).json({ message: "No thought found with this id!" });
                    return;
               }
               res.json(updatedThought);
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     },
     // COMMENT: Remove a reaction from a thought
     async deleteReaction({ params }, res) {
          try {
               const updatedThought = await Thought.findOneAndUpdate(
                    { _id: params.thoughtId },
                    { $pull: { reactions: { reactionId: params.reactionId } } },
                    { new: true }
               );
               if (!updatedThought) {
                    res.status(404).json({ message: "No thought found with this id!" });
                    return;
               }
               res.json(updatedThought);
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     },
};
