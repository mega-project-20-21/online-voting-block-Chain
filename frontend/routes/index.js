var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});
router.get("/candidateview", function (req, res, next) {
  res.render("pages/candidateview");
});
router.get("/howtocote", function (req, res, next) {
  res.render("pages/howtovote");
});
router.get("/successfullyvoted", function (req, res, next) {
  res.render("successfullyvoted.html");
});

module.exports = router;
