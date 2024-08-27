const asyncHandler = require("express-async-handler");
const messages = require("../messages");
const db = require("../db/queries");

exports.messages_get = async (req, res) => {
  const messages = await db.getAllMessages();

  res.render("messages", { messages, title: "Mini Message Board" });
};

exports.message_new_get = (req, res) => {
  res.render("message-form", { title: "Mini Message Board" });
};

exports.message_new_post = async (req, res) => {
  const { username, message } = req.body;

  await db.insertMessage({ username, message });
  res.redirect("/messages");
};

exports.message_get = async (req, res) => {
  const message = await db.searchMessageById(req.params.id);

  console.log(message);
  res.render("message", { title: "Mini Message Board", message });
};
