const Express = require("express");

require("dotenv").config();
const uri = process.env.ATLAS_URI;

const app = Express();
const PORT = 8000;

const connectDB = require('./connection/connection');
const md2json = require("./controllers/md2json.controller");

app.get("/", (req, res) => {
  res.send("welcome to the server.");
});

app.get("/import", (req, res) => {
  res.send("import data.");
});

const start = async () => {
  try {
    await connectDB(uri);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  } catch (error) {
      console.log(error);
      console.log("Failed to connect to the database, server is not running.");
  }
};

start();

// curl http://localhost:8000