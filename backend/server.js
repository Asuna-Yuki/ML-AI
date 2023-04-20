const express = require("express");
const app = express();
const spawner = require("child_process").spawn;
var bodyParser = require("body-parser");

app.use(bodyParser.json());

// for testing
app.get("/api/data", (req, res) => {
  const test = [20, 59, 60, 28, 70.3, 7.0, 150.9];

  console.log("data send to python: ", JSON.stringify(test));

  const python_process = spawner("python", [
    "sendData.py",
    JSON.stringify(test),
  ]);

  python_process.stdout.on("data", (data) => {
    console.log("Data recived from python: ", JSON.parse(data.toString()));
    res.json(data.toString());
  });
  // res.json(recivedData);
});

app.post("/api/data", (req, res) => {
  const { data } = req.body;

  console.log("data send to python: ", JSON.stringify(data));

  const python_process = spawner("python", [
    "sendData.py",
    JSON.stringify(data),
  ]);

  python_process.stdout.on("data", (data) => {
    console.log("Data recived from python: ", JSON.parse(data.toString()));
    res.json(data.toString());
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
