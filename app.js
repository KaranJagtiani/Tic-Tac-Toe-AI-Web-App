const express = require("express");
const path = require("path");
const cors = require("cors");
const compression = require("compression");

// Configuring Express Application.
const app = express();

app.use(cors());
app.use(compression());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Pointing to production index.html file as landing page.
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

var port = process.env.PORT || 3000;

// Starting the Server.
app.listen(port, () => {
  console.log("\nServer Started on port: " + port);
});
