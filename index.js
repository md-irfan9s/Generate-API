const express = require('express');   // import the express in server
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import routes from todo 
const todoRoutes = require("./routes/Todos");

app.use("/api/v1", todoRoutes);


//start server 

app.listen(PORT, () => {
    console.log(`server started succuesfully at ${PORT}`);
})

// connect to the database 

const dbConnect = require("./config/database");

dbConnect();

// default

app.get("/", (req, res) => {
    res.send(`<h1>This is homepage </h1>`)
})