# REST API using Node.js and Express with Mongoose Database

This project demonstrates how to create a RESTful API using Node.js, Express, and MongoDB with Mongoose. 

## Prerequisites
- [MongoDB](https://www.mongodb.com/try/download/community) installed on your system.
- [Node.js](https://nodejs.org/) installed on your system.

## Installation
1. Install MongoDB on your system if you haven't already.
2. Clone this repository.
3. Install dependencies:
   ```bash
   npm install
## Usage
1. Make sure MongoDB is running on your system.
2. Start the server: npm start
3. You can now access the API endpoints.

## API Endpoints
GET /api/resource: Retrieve all resources.
GET /api/resource/:id: Retrieve a specific resource by ID.
POST /api/resource: Create a new resource.
PUT /api/resource/:id: Update a specific resource by ID.
DELETE /api/resource/:id: Delete a specific resource by ID.

## Configuration
You can configure the MongoDB connection in config/db.config.js.
You can adjust other server configurations in config/server.config.js.
