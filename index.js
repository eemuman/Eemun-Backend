const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());
const mysql = require("mysql");

let config = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  connectionLimit: 10,
};
const port = process.env.PORT || 8080;

var pool = mysql.createPool(config);
app.get("/", (req, res) => {
  pool.query("SELECT * from locations", (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});
const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
