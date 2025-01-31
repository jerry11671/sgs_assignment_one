# sgs_assignment_one
A repository that contains the code for the first assignment of SGS internship

# Node.js Express CRUD API with Deployment on Render

## Overview
This project is a simple CRUD (Create, Read, Update, Delete) API built with Node.js and Express, where users can manage courses. The API allows the creation, retrieval, updating, and deletion of courses.

### Features:
- **GET**: Fetch a list of all courses or a single course by ID.
- **POST**: Create a new course.
- **PUT**: Update an existing course by ID.
- **DELETE**: Delete a course by ID.

The application is deployed on Render.com for live access.

## Technologies Used:
- **Node.js**: JavaScript runtime for building the API.
- **Express**: Web framework for handling HTTP requests.
- **Joi**: Input validation library.
- **Git**: Version control for managing the source code.
- **Render.com**: Cloud platform for deployment.

## Setup Instructions

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) installed.
- Install dependencies by running:
  ```bash
  npm install

You can test all the endpoints using Postman:

GET /api/courses: Fetch all courses.

GET /api/courses/1: Fetch a course by ID.

POST /api/courses: Create a new course with the body {"name": "course name"}.

PUT /api/courses/1: Update a course by ID with {"name": "new course name"}.

DELETE /api/courses/1: Delete a course by ID.
