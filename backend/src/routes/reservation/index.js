const express = require("express");
const router = express.Router();
router.get("/room", require("./ReservationRoomGet"));
module.exports = router;
