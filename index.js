const express = require("express");
const mongoose = require("mongoose");
const app = express();

// the connection with the database;
mongoose.connect("mongodb://localhost/ourdata");
mongoose.promise = global.promise;

app.use(express.json());

//app.get("/api", (req, res) => res.send('API WORKING'));
app.use("/api", require("./routes/api"));

app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});

app.listen(process.nextTick.PORT || 4000, function () {
  console.log("listens working");
});
