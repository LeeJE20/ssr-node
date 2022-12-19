var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/movies", require("./movies"));
router.use("/reservation", require("./reservation"));
module.exports = router;
