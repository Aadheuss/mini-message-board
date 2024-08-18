const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home");

router.get("/messages", homeController.messages_get);

module.exports = router;
