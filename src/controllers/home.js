const asyncHandler = require("express-async-handler");
const messages = require("../messages");

exports.messages_get = (req, res) => {
  res.render("messages", { messages, title: "Mini Message Board" });
};

exports.message_new_get = (req, res) => {
  res.render("message-form", { title: "Mini Message Board" });
};

exports.message_new_post = (req, res) => {
  const { text, user } = req.body;
  messages.push({ text: text, user: user, added: new Date() });
  res.redirect("/messages");
};

exports.message_get = (req, res) => {
  const message = messages.find((msg, index) => {
    return index === Number(req.params.id);
  });

  res.render("message", { title: "Mini Message Board", message });
};
