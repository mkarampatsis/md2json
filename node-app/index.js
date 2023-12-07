const Express = require("express");

require("dotenv").config();
const uri = process.env.ATLAS_URI;

const app = Express();
const PORT = 8000;

const connectDB = require('./connection/connection');
const md2json = require("./routes/md2json.routes");

app.use('/api', md2json);
app.use("/", (req, res) => {
  res.send("welcome to the server.");
});

const start = () => {
  try {
    connectDB(uri);
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