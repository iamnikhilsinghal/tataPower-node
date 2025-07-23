const express = require("express"); // import express module(function) into a const
const { Pool } = require("pg");

const app = express(); // fucn called and stored in app const
// this line creates an express object that is used to define routes/middleware

const PORT = 8080;

// PostgreSQL connection configuration
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "root",
  port: 5432,
});

// Test the DB connection
pool
  .connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch((err) => console.error("❌ Connection error", err.stack));

app.get("/", async (req, res) => {
  try {
    const query = "SELECT id, fname, email FROM employee";
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
