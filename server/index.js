const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const path = require("path");
const numCPUs = require("os").cpus().length;
const cors = require("cors");
const bodyParser = require("body-parser");
const wordList = require("./words");
const ticker = require("./ticker");
const PORT = process.env.PORT || 5000;

app.use(cors());
//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

const wordTicker = new ticker(io);

io.on("connection", function(socket) {
  console.log("connected client");
  socket.on("pause", function(socket) {
    wordTicker.pause();
  });
  socket.on("resume", function(socket) {
    wordTicker.resume();
  });
});

//app gets the url "wordList" (to match in fetch) and then sends the response
app.get("/wordList", function(req, res) {
  res.send(wordList);
});

// All remaining requests return the React app, so it can handle routing.

server.listen(PORT, function() {
  console.error(
    `Node cluster worker ${process.pid}: listening on port ${PORT}`
  );
});
