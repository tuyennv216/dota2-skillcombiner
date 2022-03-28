const express = require("express");

const app = express();
const port = 8080;

// static files
app.use(express.static("styles"));
app.use(express.static("logics"));
app.use(express.static("public"));
// end static files

// routes
var router = express.Router();
var path = __dirname + "/views/";
router.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

app.use("/", router);
// end routes

// startup
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
// end startup
