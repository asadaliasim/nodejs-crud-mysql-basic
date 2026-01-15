# Simple Node.js + Express + MySQL CRUD (Posts)

A very simple CRUD demo using **Node.js**, **Express**, and **MySQL**.  
It creates a database/table and provides routes to **create, read, update, and delete** posts.

## Tech Stack
- Node.js
- Express
- MySQL (`mysql` package)

## Features
- Create database: `nodemysql`
- Create table: `posts`
- Insert sample posts
- Fetch all posts / single post
- Update a post title
- Delete a post

---

## Requirements
- Node.js installed
- MySQL installed + running (XAMPP/WAMP or native MySQL)

---

## Setup & Run

### 1) Clone the repo
```bash
git clone <your-repo-url>
cd <your-project-folder>
```
## 2) Install dependencies
npm install

## 3) Configure MySQL connection

In your code, the MySQL connection is:

host: "localhost",
user: "root",
password: "",
database: "nodemysql",


Make sure your MySQL credentials match your environment.

Note: Your app tries to connect using database: "nodemysql" immediately.
So either create the DB first manually OR temporarily remove the database field, create DB, then add it back.


Start the Server
node index.js

## Notes / Limitations

This project uses GET requests for all operations (including insert/update/delete) for simplicity.

getpost/:id, updatepost/:id, and deletepost/:id are vulnerable to SQL injection because they use string interpolation.

For production, use parameterized queries (?) and use proper HTTP methods: POST/PUT/DELETE.

## This is just a demo code for beginner
