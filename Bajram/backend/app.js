// backend/app.js
const express = require("express");
const cors = require('cors')
const { Pool } = require("pg");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
  user: "root",
  host: "postgres",
  database: "woxDb",
  password: "1234",
  port: 5432,
});

app.get("/", async (req, res) => {
  res.send("Hello to main route.");
});

app.get("/user/:columnName/:name", async (req, res) => {
  const { columnName, name } = req.params;
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Use a parameterized query to prevent SQL injection
    const result = await client.query(
      `SELECT id, name, email, password, created_at, modified_at FROM public.users where ${columnName}='${name}'`
    );

    // Commit the transaction
    await client.query("COMMIT");

    //const newUser = result;
    res.json(result.rows);
  } catch (error) {
    // Rollback the transaction in case of an error
    await client.query("ROLLBACK");

    console.error("Error getting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Release the client back to the pool
    client.release();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post("/user/create", async (req, res) => {
  const { name, email, password } = req.body;

  // Start a transaction
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Use a parameterized query to prevent SQL injection
    const result = await client.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id,name,email",
      [name, email, password]
    );

    // Commit the transaction
    await client.query("COMMIT");

    const newUser = result.rows[0];
    res.json(newUser);
  } catch (error) {
    // Rollback the transaction in case of an error
    await client.query("ROLLBACK");

    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Release the client back to the pool
    client.release();
  }
});

app.post("/user/update", async (req, res) => {
  const { id, name } = req.body;

  // Start a transaction
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Use a parameterized query to prevent SQL injection
    const result = await client.query(
      "UPDATE public.users SET name = $1 WHERE id = $2",
      [name, id]
    );

    // Commit the transaction
    await client.query("COMMIT");

    res.json({ message: "User updated successfully" });
  } catch (error) {
    // Rollback the transaction in case of an error
    await client.query("ROLLBACK");

    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Release the client back to the pool
    client.release();
  }
});

app.delete("/user/delete", async (req, res) => {
  const { id } = req.body;

  // Start a transaction
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Use a parameterized query to prevent SQL injection
    const result = await client.query("DELETE FROM public.users WHERE id=$1", [
      id,
    ]);

    // Commit the transaction
    await client.query("COMMIT");

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    // Rollback the transaction in case of an error
    await client.query("ROLLBACK");

    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Release the client back to the pool
    client.release();
  }
});

// select reviews
// insert reviews
// update reviews
// delete reviews

app.post("/review/create", async (req, res) => {
  const { value } = req.body;

  // Start a transaction
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Use a parameterized query to prevent SQL injection
    const result = await client.query(
      "INSERT INTO reviews (value) VALUES ($1) RETURNING id,value",
      [value]
    );

    // Commit the transaction
    await client.query("COMMIT");

    const newUser = result.rows[0];
    res.json(newUser);
  } catch (error) {
    // Rollback the transaction in case of an error
    await client.query("ROLLBACK");

    console.error("Error creating review:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Release the client back to the pool
    client.release();
  }
});

app.post("/review/update", async (req, res) => {
  const { id, value } = req.body;

  // Start a transaction
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Use a parameterized query to prevent SQL injection
    const result = await client.query(
      "UPDATE public.reviews SET value = $1 WHERE id = $2",
      [value, id]
    );

    // Commit the transaction
    await client.query("COMMIT");

    res.json({ message: "Review updated successfully" });
  } catch (error) {
    // Rollback the transaction in case of an error
    await client.query("ROLLBACK");

    console.error("Error updating review:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Release the client back to the pool
    client.release();
  }
});

app.delete("/review/delete", async (req, res) => {
  const { id } = req.body;

  // Start a transaction
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Use a parameterized query to prevent SQL injection
    const result = await client.query(
      "DELETE FROM public.reviews WHERE id=$1",
      [id]
    );

    // Commit the transaction
    await client.query("COMMIT");

    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    // Rollback the transaction in case of an error
    await client.query("ROLLBACK");

    console.error("Error updating review:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Release the client back to the pool
    client.release();
  }
});

app.get("/review/:id", async (req, res) => {
  const { id } = req.params;
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Use a parameterized query to prevent SQL injection
    const result = await client.query(
      `SELECT * FROM public.reviews where id='${id}'`
    );

    // Commit the transaction
    await client.query("COMMIT");

    //const newUser = result;
    res.json(result.rows);
  } catch (error) {
    // Rollback the transaction in case of an error
    await client.query("ROLLBACK");

    console.error("Error getting review:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Release the client back to the pool
    client.release();
  }
});

app.get("/reviews", async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    // Use a parameterized query to prevent SQL injection
    const result = await client.query(`SELECT * FROM public.reviews`);

    // Commit the transaction
    await client.query("COMMIT");

    //const newUser = result;
    res.json(result.rows);
  } catch (error) {
    // Rollback the transaction in case of an error
    await client.query("ROLLBACK");

    console.error("Error getting review:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Release the client back to the pool
    client.release();
  }
});
