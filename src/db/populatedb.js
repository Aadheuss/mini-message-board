#! /usr/bin/env node

require("dotenv").config();
const { argv } = require("node:process");
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message TEXT,
  added TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO messages (username, message)
VALUES
  ('lily', 'Hi'),
  ('Aadheuss', 'Hi, I am aadheuss');
`;

async function main() {
  console.log("seeding...");
  const argv_db_url = argv
    .find((arg) => {
      const regex = new RegExp("^db_url=");
      return regex.test(arg);
    })
    .replace("db_url=", "");

  const db_url = argv_db_url || process.env.DB_URL;
  // "postgresql://<role_name>:<role_password>@localhost:5432/top_users",
  const client = new Client({
    connectionString: db_url,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();

  console.log("done");
}

// populating local db
// node db/populatedb.js <local-db-url>

// # populating production db
// # run it from your machine once after deployment of your app & db
// node db/populatedb.js <production-db-url>

main();
