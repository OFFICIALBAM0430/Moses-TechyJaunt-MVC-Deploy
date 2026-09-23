🏗️ MVC Backend API

A backend REST API built with Node.js, Express.js, MongoDB, and Mongoose, using the Model-View-Controller (MVC) architectural pattern.

This project was created as part of my backend development learning journey to understand how to organize a Node.js application into separate responsibilities.

🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- dotenv
- Morgan

🏛️ Architecture

This project follows an MVC-style structure:

config/
├── Database configuration

controllers/
├── Application logic

models/
├── Mongoose data models

routes/
├── API route definitions

app.js
├── Application entry point

Config

Contains configuration files, including the database connection.

Controllers

Contains the application logic for handling requests and responses.

Models

Contains the Mongoose models used to interact with MongoDB.

Routes

Contains the API routes and connects them to the appropriate controllers.

🎯 Project Goals

The main goals of this project were to practice:

- Building REST APIs with Express.js
- Connecting an Express application to MongoDB
- Using Mongoose
- Understanding MVC architecture
- Separating application responsibilities
- Creating reusable routes and controllers
- Organizing backend projects professionally

🚀 Getting Started

1. Clone the repository

git clone https://github.com/OFFICIALBAM0430/Moses-TechyJaunt-MVC-Deploy.git

2. Navigate into the project

cd Moses-TechyJaunt-MVC-Deploy

3. Install dependencies

npm install

4. Configure environment variables

Create a ".env" file and add the environment variables required by the application.

5. Start the development server

npm run dev

Or start normally

npm start

📚 What I Learned

This project helped me understand how to:

- Structure a backend application using MVC
- Separate routes from business logic
- Separate database models from controllers
- Connect Express applications to MongoDB
- Work with Mongoose
- Use middleware
- Use environment variables
- Build and organize REST API projects

📈 My Backend Journey

This project represents an earlier stage of my backend development journey.

Since then, I've continued building on these foundations and moved into more advanced areas including:

- REST APIs
- Authentication
- Authorization
- JWT
- KYC
- Wallet systems
- Transactions

🚧 Future Improvements

Possible improvements include:

- Adding authentication and authorization
- Improving validation
- Adding automated API tests
- Adding API documentation
- Improving error handling
- Adding pagination
- Improving project configuration

👨🏾‍💻 Author

Moses Balogun — OfficialBam

Backend Developer in Progress 🚀

Building. Learning. Documenting.
