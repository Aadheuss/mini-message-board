const asyncHandler = require("express-async-handler");
const messages = require("../messages");

exports.messages_get = (req, res) => {
  res.render("messages", { messages });
};
