const express = require("express");
const router = express.Router();
const Employee = require("../model/employee");

router.get("/employee", (req, res , next) => {
  Employee.find({})
    .then(function (employees) {
      res.send(employees);
    })
    .catch(next);
});

router.post("/employee", (req, res) => {
  Employee.create(req.body).then(function (employee) {
    res.send(employee);
  });
});


router.put("/employee/:id", (req, res) => {
  Employee.findOneAndUpdate({ _id: req.params.id }).then(function (employees) {
    Employee.findOne({ _id: employees.id }).then(function (employee) {
      res.send(employee);
    });
  });
});


router.delete("/employee/:id", (req, res) => {
  res.send({ type: "POST", name: req.body.name });
});
module.exports = router;
