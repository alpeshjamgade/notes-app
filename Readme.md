# Notes App

The Notes App is a simple backend application that allows users to create, view, update and delete notes.


## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Running the App](#running-the-app)
    - [Running Tests](#running-tests)
- [Rate Limiting](#rate-limiting)

## Features

- Sign up as new user with name, email, password and login with your email and password.
- Create a new note with a title and body.
- View a list of all notes.
- View the details of a specific note.
- Update the content of a note.
- Delete a note.
- Notes sharing. Users can share notes with other registered users.

## Technologies Used

The Notes App is built using the following technologies:

- **Node.js**: A JavaScript runtime for server-side development.
- **Express.js**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database for storing notes.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Jest**: Javascript framework used for unit testing. 
### Prerequisites

Before running the Notes App, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)


### Running the App
1. Clone the repository:

   ```bash
   git clone https://github.com/alpeshjamgade/notes-app.git

2. Change directory to notes-app
   ```bash
   cd notes-app

3. Install dependencies
   ```bash
   npm install

4. Start Server
   ```bash
   npm run start

### Running tests
   Run all the tests
  ```bash
  npm test
  ```
      
  

## Rate Limiting

The application has rate limiting to prevent abuse and ensure the stability of the server. Used the `express-rate-limit` middleware to achieve this.

### Rate Limit Configuration

The rate limit is configured with the following parameters:

- **Window Time**: 15 minutes
- **Maximum Requests per IP**: 100

This means that each IP address is allowed to make up to 100 requests within a 15-minute window. If this limit is exceeded, the server will respond with an HTTP 429 Too Many Requests status.

The rate limit is configured in the `config` directory. To adjust the rate-limiting settings, modify the `config/default.json` file. The current configuration is as follows:

- **Window Time**: 15 minutes
- **Maximum Requests per IP**: 100