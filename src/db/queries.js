const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");

  return rows;
}

async function insertMessage({ username, message }) {
  await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [
    username,
    message,
  ]);
}

async function searchMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);

  if (rows.length) {
    return rows[0];
  }

  return rows;
}

module.exports = {
  getAllMessages,
  insertMessage,
  searchMessageById,
};
