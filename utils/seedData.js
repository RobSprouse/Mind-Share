// COMMENT: imports the required modules, the connection to the database, and the faker package, and the User and Thought models
import connection from "../config/connection.js";
import faker from "faker";
import User from "../models/User.js";
import Thought from "../models/Thought.js";

/* COMMENT: 
      This function will connect to the database and seed it.
      By using the faker package, this function will assign fake, readable data into the various fields that need the data.
      This can be utilized to insert a large amount of seed data without having to manually create your own.
      I have utilized it also to assigned createdAt dates and times that make sense when viewing it, creating past dates and times for the thoughts and reactions,
      with the reactions having a date and time that occurs after the creation of the thought. 
      GitHub copilot was utilized in discovering the faker package and used in assisting in the formatting of the function*/

// COMMENT: defines the seedData function
async function seedData() {
     connection.once("open", () => {
          console.log("Connected to database and seeding...");
     });

     // COMMENT: defines the users and thoughts arrays to be populated with the seeded data
     const users = [];
     const thoughts = [];

     // COMMENT: loops through the number of times specified to create a new user with a fake username and email, and pushes it to the users array
     for (let i = 0; i < 50; i++) {
          const user = new User({
               username: faker.internet.userName(),
               email: faker.internet.email(),
          });
          users.push(user);
     }

     // COMMENT: saves the users from the users array into the database
     await User.insertMany(users);

     // COMMENT: for every user, a random number of friends will be assigned from the users array that doesn't include the user, and will be saved to the user's friends array
     for (const user of users) {
          const friends = users.filter((u) => u.username !== user.username);
          user.friends = friends.slice(0, Math.floor(Math.random() * 10));
          await user.save();

          // COMMENT: for every user, a random number of thoughts will be assigned with a random past date and time and saved to the database, and then the thoughts are pushed to the thoughts array
          const numThoughts = Math.floor(Math.random() * 10);
          for (let i = 0; i < numThoughts; i++) {
               let thought = new Thought({
                    thoughtText: faker.lorem.sentence(),
                    username: user.username,
                    createdAt: faker.date.past(),
               });

               thought = await thought.save();

               thoughts.push(thought);
          }
     }

     /* COMMENT: 
      for every thought that's saved to the database and passed to the array, a random number of reactions will be assigned to them with a 
      random past date and time that occurs after the creation of the thought, with a user from the users' array, and saved to the database */
     for (const thought of thoughts) {
          const numReactions = Math.floor(Math.random() * 10);

          for (let i = 0; i < numReactions; i++) {
               const user = users[Math.floor(Math.random() * users.length)];
               const rawThought = thought.toObject({ getters: false });
               const reaction = {
                    reactionBody: faker.lorem.sentence(),
                    username: user.username,
                    createdAt: faker.date.between(new Date(rawThought.createdAt), new Date()),
               };
               thought.reactions.push(reaction);
          }

          await thought.save();
     }
     console.log("Data seeded successfully!");
     process.exit(0);
}

// COMMENT: calls the seedData function
seedData().catch(console.error);
