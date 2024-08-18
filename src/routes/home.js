const express = require("express");

const router = express.Router();

const homeController = require("../controllers/home");

router.get("/messages", homeController.messages_get);

router.get("/message/new", homeController.message_new_get);

router.post("/message/new", homeController.message_new_post);

router.get("/message/:id", homeController.message_get);

module.exports = router;
