# Mind-Share

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description:

This repository was created as a part of the University of Richmond's Bootcamp, Module 18 Challenge. The challenge was to build a social networking API that user's can share their thoughts, react to friends' thoughts, and create a friend list. The application uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

The following User Story and Acceptance Criteria were provided for this challenge:

> ## User Story
>
> ```md
> AS A social media startup
> I WANT an API for my social network that uses a NoSQL database
> SO THAT my website can handle large amounts of unstructured data
> ```
>
> ## Acceptance Criteria
>
> ```md
> GIVEN a social network API
> WHEN I enter the command to invoke the application
> THEN my server is started and the Mongoose models are synced to the MongoDB database
> WHEN I open API GET routes in Insomnia for users and thoughts
> THEN the data for each of these routes is displayed in a formatted JSON
> WHEN I test API POST, PUT, and DELETE routes in Insomnia
> THEN I am able to successfully create, update, and delete users and thoughts in my database
> WHEN I test API POST and DELETE routes in Insomnia
> THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
> ```

## Table of Contents

-    [Installation](#installation)
-    [Usage](#usage)
-    [License](#license)
-    [Contributing](#contributing)
-    [Tests](#tests)
-    [Questions](#questions)

## Installation

This application has not been deployed to a live site. To see this application in it's development environment, please follow the instructions below.

This application requires Node.js to run. Please visit https://nodejs.org/en/ to download Node.js if it is not already installed on your computer.

This application also requires MongoDB to run. Follow the [MongoDB installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb) to install MongoDB locally.

If you are unfamiliar with cloning a repository, please click on the following link to learn: [Github docs | Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

To install this application, clone the repository, navigate to its directory in the terminal, and run `npm install` in the command line to install the required dependencies.

## Usage

Navigate to the root directory of the application in the terminal and run the command `npm run seed` to seed the database. This will create the database and collections needed to run the application and populate them with data. This assumes you followed the instructions in the MongoDB installation guide to install MongoDB locally and did not change the default settings.

While still in the root directory of the application in the terminal, run `npm run start` in the command line to start the server.

To test the API routes, use an application such as [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) to test the API routes. I used Insomnia to test the API routes for this application. The following JSON file located in the devAssets folder can be imported into Insomnia to test the API routes: [Mind-Share Insomnia Routes](devAssets/M18-Insomnia-Routes.json). In the address bar where the URL is entered, there are empty placeholders for id's. These id's can be found in the database and copied and pasted into the URL to test the routes.

To manually enter in the routes to test the API, the following routes can be used, replacing the parameters with the appropriate id's:

-    GET all users: http://localhost:3001/api/users
-    GET a single user by its `_id` and populated thought and friend data (userId being the \_id of the User): http://localhost:3001/api/users/:userId
-    POST a new user: http://localhost:3001/api/users
-    PUT to update a user by its `_id`: http://localhost:3001/api/users/:userId
-    DELETE to remove user by its `_id`: http://localhost:3001/api/users/:userId
-    POST to add a new friend to a user's friend list (:friendId being the friend's user's id): http://localhost:3001/api/users/:userId/friends/:friendId
-    DELETE to remove a friend from a user's friend list: http://localhost:3001/api/users/:userId/friends/:friendId
-    GET to get all thoughts: http://localhost:3001/api/thoughts
-    GET to get a single thought by its `_id` (:thoughtId being the \_id of the thought): http://localhost:3001/api/thoughts/:thoughtId
-    POST to create a new thought: http://localhost:3001/api/thoughts/:userId
-    PUT to update a thought by its `_id`: http://localhost:3001/api/thoughts/:id
-    DELETE to remove a thought by its `_id`: http://localhost:3001/api/thoughts/:id
-    POST to create a reaction stored in a single thought's `reactions` array field: http://localhost:3001/api/thoughts/:thoughtId/reactions
-    DELETE to pull and remove a reaction by the reaction's `reactionId` value (:reactionId being the \_id of the reaction): http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId

The following link is to a video demonstrating the functionality of the application.

[Google Drive: Mind-Share](https://drive.google.com/file/d/1azk0-0NQw-fCIOj8ulguu_D-DXbatAtj/view?usp=sharing)

## License

This application is licensed under the MIT license. See the following link for more information: https://opensource.org/licenses/MIT

## Contributing

Feel free to contribute to this project! Please fork the repository and create a pull request with your changes.

## Tests

No tests are included in this application.

## Questions

If you have any questions, please contact me at drgstriker@aol.com. You can also visit my GitHub profile at https://github.com/RobSprouse.
