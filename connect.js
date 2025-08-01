const express = require("express"); // import express module(function) into a const
const { Pool } = require("pg");

const app = express(); // fucn called and stored in app const
// this line creates an express object that is used to define routes/middleware

app.use(express.json());

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

const emitter = require("./eventEmitters");

app.post("/", async (req, res) => {
  const { fname, email } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO employee (fname, email) VALUES ($1, $2) RETURNING *",
      [fname, email]
    );
    emitter.emit("userAdded", result.rows[0]);
    res.status(201).json({ emp: result.rows[0] });
  } catch (err) {
    console.error("Error inserting employee:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/users/:id", (req, res, next) => {
  const userId = req.params.id;
  console.log("userId", userId);

  if (userId === "admin") {
    const error = new Error("Access denied");
    error.status = 403;
    next(error);
  } else {
    // Handle the regular flow
  }
});
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
