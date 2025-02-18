
# Full-Stack CRUD Todo Application

This is a full-stack Todo application that allows users to create, read, update, and delete tasks. The backend is built with Node.js and Express.js, using MongoDB for data storage, while the frontend is developed with Next.js and React. The application utilizes Axios for API requests and React Context API for state management.




## Tech Stack

**Client:** Next js, React Js, TailwindCSS,Axios, Context API

**Server:** Node, Express js, MongoDB (Mongoose),Cors & dotenv for environment management


## Setup Instructions

Clone the project

```bash
  git clone https://github.com/yeakiniqra/Todo-Node.js-Assesment.git
```

Go to the project directory

```bash
  cd backend
```
Environment Variables
```bash
  PORT=3000
  MONGO_URI=your_mongodb_connection_string
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
The backend will run at http://localhost:5000

# Frontend Setup

```bash
  cd ../frontend
  npm install
```

Start the Frontend Server
```bash
  npm run dev
```
The Frontend will run at http://localhost:3000

## API Endpoints

#### Get all Todos

```http
  GET /api/todos
```

| Method  | Description                |
| :-------- |  :------------------------- |
| `GET` |   Retrieve all todo items |

#### Retrieve a specific todo item

```http
  GET /api/todos/:id
```

| Method  | Description                |
| :-------- |  :------------------------- |
| `GET` |   Retrieve a specific todo item |

#### Create Todo item

```http
  POST /api/todos
```

| Parameter | Description                       |
| :-------- |  :-------------------------------- |
| `POST`      |  Create a new todo item |

#### Update Todo item

```http
  PUT /api/todos/:id
```

| Parameter | Description                       |
| :-------- |  :-------------------------------- |
| `PUT`      |  Update a todo item |

#### Delete Todo item

```http
  DELETE /api/todos/:id
```

| Parameter | Description                       |
| :-------- |  :-------------------------------- |
| `DELETE`      |  Delete a todo item |



## Features

## Backend
    1. RESTful API: Well-structured API following CRUD principles.

    2. MongoDB with Mongoose: Ensures data persistence and validation.

    3. Server-side validation: Prevents invalid data entries.

## Frontend
✅ Next.js with Context API: Centralized state management for Todos.

✅ Axios for API requests: Efficient communication with the backend.

✅ Component-based UI: Reusable components for better maintainability.

✅ Client-side validation: Ensures users input valid data.


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

