import User from "../models/User.js";
import Thought from "../models/Thought.js";

export const userController = {
     // COMMENT: Get all users
     async getAllUsers(req, res) {
          try {
               const users = await User.find({});
               res.json(users);
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     },
     // COMMENT: Get a single user by its _id and populated thought and friend data
     async getUserById({ params }, res) {
          try {
               const user = await User.findOne({ _id: params.id })
                    .populate({
                         path: "thoughts",
                         select: "-__v",
                    })
                    .populate({
                         path: "friends",
                         select: "-__v",
                    })
                    .select("-__v");
               if (!user) {
                    res.status(404).json({ message: "No user found with this id!" });
                    return;
               }
               res.json(user);
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     },
     // COMMENT: Create a new user
     async createUser({ body }, res) {
          try {
               const user = await User.create(body);
               res.json(user);
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     },
     // COMMENT: Update a user by its _id
     async updateUser({ params, body }, res) {
          try {
               const updatedUser = await User.findOneAndUpdate({ _id: params.id }, body, { new: true });
               if (!updatedUser) {
                    res.status(404).json({ message: "No user found with this id!" });
                    return;
               }
               res.json(updatedUser);
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     },
     // COMMENT: Delete a user by its _id
     async deleteUser({ params }, res) {
          try {
               const deletedUser = await User.findOneAndDelete({ _id: params.id });
               if (!deletedUser) {
                    res.status(404).json({ message: "No user found with this id!" });
                    return;
               }
               res.json(deletedUser);
          } catch (err) {
               console.log(err);
               res.status(500).json(err);
          }
     },
     // COMMENT: Add a new friend to a user's friend list
     async addFriend({ params }, res) {
          const { userId, friendId } = params;
          const updatedUser = await User.findOneAndUpdate(
               { _id: userId },
               { $addToSet: { friends: friendId } },
               { new: true }
          );
          if (!updatedUser) {
               res.status(404).json({ message: "No user found with this id!" });
               return;
          }
          res.json(updatedUser);
     },
     // COMMENT: Remove a friend from a user's friend list
     async deleteFriend({ params }, res) {
          const { userId, friendId } = params;
          const updatedUser = await User.findOneAndUpdate(
               { _id: userId },
               { $pull: { friends: friendId } },
               { new: true }
          );
          if (!updatedUser) {
               res.status(404).json({ message: "No user found with this id!" });
               return;
          }
          res.json(updatedUser);
     },
};
