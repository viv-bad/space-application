# Paisa - Space Application

## Objectives

The objective of the Paisa Space Application is to develop a FullStack application for internal use by a space agency. The application aims to manage missions and optimize the performance of astronauts.

### Frontend

The frontend of the application will allow astronauts to:

- Login
- View their assigned missions
- Update their progress

### Backend

The backend of the application will:

- Handle user authentication
- Manage data storage
- Create RESTful APIs for seamless communication between the backend and the frontend

### Other

Additional requirements for the application include:

- Having a visually appealing and modern user interface (UI)
- Assigning specific missions to astronauts
- Performing unit testing
- Thoroughly documenting the application
- Implementing a CI/CD workflow with continuous integration, automated testing, and cloud deployment

## Tasks

### 1. Frontend

The frontend tasks include:

- Creating a login page with the following fields:

  - Email
  - Password
  - Sign-in button
  - Display an error if any field is empty

- Creating a registration page for the 'admin' user with the following fields:

  - Name
  - Email
  - Password
  - Confirm password
  - Register button
  - Display an error if any field is empty or if the passwords don't match

- Creating a home page where users can manage astronauts:
  - Display a HTML table with the columns Name, Email, and Actions
  - The table should show the registered "astronaut" users
  - Provide buttons for editing and deleting each user in the Actions column

### 2. Backend

The backend tasks include:

Implementing registration and login for the 'admin' using JWT for authentication:

- Creating routes in the backend for registration and login
- Storing the name, email, and password of the 'admin' user in the database during registration
- Verifying the entered email and password during login and returning a valid JWT token

Implementing CRUD (Create, Read, Update, Delete) for "astronauts" users:

- Creating routes in the backend for each CRUD operation
- Using PostgreSQL as the database to store "astronauts" user data
- Implementing the necessary queries using Sequelize (Node.js) or SQLAlchemy (Python) to interact with the database

Creating a RESTful API using Express (Node.js) or FastAPI (Python) with the following operations:

- GET all registered "astronauts" users
- GET an astronaut by ID
- POST - Create a new astronaut
- Update the data of an existing astronaut
- Delete an existing astronaut

### 3. Extra points

The following additional tasks will earn extra points:

Designing a modern UI using React/Next.js, TailwindCSS, and MUI or Bootstrap:

- Using TailWind to build the interface
- Utilizing MUI or Bootstrap for additional UI components

Adding functionality to assign missions to astronauts:

- Creating a page where missions can be assigned to users (form: mission: string, mission ID: number, assign to: astronaut)
- Displaying user missions

Writing unit tests for at least one critical function or component in the project:

- Using Jest or Pytest for unit testing

Documentation:

- Thoroughly documenting the application to ensure clarity and ease of understanding

CI/CD using GitHub Actions or Jenkins:

- Implementing a CI/CD workflow for continuous integration, automated testing, and deployment

Deploying to a cloud service like Heroku, AWS, GCP, or Azure:

- Deploying the application to a cloud service for accessibility and scalability
