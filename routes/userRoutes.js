const express = require("express");
const {home,createUser} = require("../controlers/userControler");
const router  = express.Router();

router.get("/",home)
router.post("/createUser",createUser)

module.exports = router;

