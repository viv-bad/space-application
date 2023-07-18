# Paisa - Space Application

## Objectives

The objective of the Paisa Space Application is to develop a FullStack application for internal use by a space agency. The application aims to manage missions and optimize the performance of astronauts.


# Project Setup Guide

This guide will walk you through the steps to set up the project.

`git clone https://github.com/viv-bad/space-application.git`

## Optional Docker (not consistently working)

1. First, run `cd space-application` then go into the `backend` project directory (`cd backend/`)
2. Initialize a new Python virtual environment: `python -m venv .venv`
3. Activate the virtual environment:
   - On Windows: `.\.venv\Scripts\activate`
   - On macOS/Linux: `source .venv/bin/activate`
   - Open your docker application and cd into backend via `cd space-project` then `cd backend`.

`docker build -t paisa-space-app .`
`docker run -p 8000:8000 -d paisa-space-app`

If above doesn't work, you may have to manually install some dependencies (see below).

## Step 1: Setting up the Backend (FastAPI)

1. First, run `cd space-application` then go into the `backend` project directory (`cd backend/`)
2. Initialize a new Python virtual environment: `python -m venv .venv`
3. Activate the virtual environment:

   - On Windows: `.\.venv\Scripts\activate`
   - On macOS/Linux: `source .venv/bin/activate`

4. first run `pip install --upgrade pip`, then Install FastAPI and other dependencies: `pip install -r requirements.txt`
5. You may have to also manually run `pip install fastapi uvicorn sqlalchemy psycopg2-binary` and any other dependencies that may be missing.
6. In the `config-sample.ini` file, ensure the DATABASE_URI is `postgresql://postgres:password@127.0.0.1:5432/paisa_space_app`
7. Test your FastAPI backend by running `uvicorn app.main:app --reload`.
8. Your backend should now be running.

## Step 2: Setting up the Frontend (React)

1. Open a new terminal or command prompt.
2. cd into `frontend/`
3. run `npm install` to install the dependencies
4. run `yarn start` or `npm start` to start the frontend
5. The application should now be running on `http://localhost:3000`

## Logging in to the app:

Email: admin@gmail.com
Password: admin

## Outline of project

### Frontend

The frontend of the application allows astronauts to:

- Login
- View their assigned missions
- Update their progress

### Backend

The backend of the application allows:

- User authentication
- Management of data storage
- RESTful APIs for seamless communication between the backend and the frontend

## Tasks

### 1. Frontend

The frontend has:

- Alogin page with the following fields:

  - Email
  - Password
  - Sign-in button
  - Displays an error if any field is empty

- A registration page for the 'admin' user with the following fields:

  - Name
  - Email
  - Password
  - Confirm password
  - Register button
  - Display an error if any field is empty or if the passwords don't match

- A home page where users can manage astronauts:
  - A table with the columns Name, Email, and Actions
  - Editing and deleting each astronaut in the Actions column

# Screenshots

!['main-table'](assets/main-table.png)
!['edit-page'](assets/edit-page.png)
!['create-page.png](assets/create-page.png)
