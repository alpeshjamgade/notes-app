# Notes App

The Notes App is a simple backend application that allows users to create, view, update and delete notes.


## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the App](#running-the-app)
    - [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

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