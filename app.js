const express = require("express");
const mysql = require("mysql");

// Crreating Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

// connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("My Sql Connected");
});

const app = express();
// create DB
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("database Created....");
  });
});

// create Table
app.get("/createpoststable", (req, res) => {
  let sql =
    "CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))";

  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Posts table created....");
  });
});
// inserting data 1
app.get("/addpost", (req, res) => {
  let post = { title: "post one", body: "This is post number 1" };
  let sql = "Insert into posts SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post 1 added....");
  });
});
// inserting data again
app.get("/addpost1", (req, res) => {
  let post = { title: "post two", body: "This is post number 2" };
  let sql = "Insert into posts SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post 2 added....");
  });
});
// selecting data
app.get("/getposts", (req, res) => {
  let sql = "SELECT * FROM posts";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(" Posts fetched....");
  });
});
// selecting single data
app.get("/getpost/:id", (req, res) => {
  let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(" Single Post fetched....");
  });
});
// update
app.get("/updatepost/:id", (req, res) => {
  let newTitle = "Updated Title";
  let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(" Post updated....");
  });
});
// Delete data
app.get("/deletepost/:id", (req, res) => {
  let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(" Post Deleted....");
  });
});

app.listen("4000", () => {
  console.log("Server Started at Port 4000");
});
