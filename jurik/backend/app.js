// backend/app.js
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');


const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
  user: 'root',
  host: 'postgres',
  database: 'woxDb',
  password: '1234',
  port: 5432,
});


app.get('/', async (req, res) => {
  res.send('Hello to main route.');
});



app.get('/user/:columnName/:value', async (req, res) => {

  const { columnName, value } = req.params;

  // Start a transaction
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Use a parameterized query to prevent SQL injection
    const result = await client.query(
      `SELECT id, name, email, password, created_at, modified_at FROM public.users WHERE ${columnName}='${value}'`,
    );

    // Commit the transaction
    await client.query('COMMIT');

    //const newUser = result;
    res.json(result.rows[0]);
  } catch (error) {
    // Rollback the transaction in case of an error
    await client.query('ROLLBACK');

    console.error('Error getting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Release the client back to the pool
    client.release();
  }

})



app.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;

  // Start a transaction
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Use a parameterized query to prevent SQL injection
    const result = await client.query(
      `SELECT id, name, email, password FROM public.users WHERE email=$1`, [email]
    );

    const user = result.rows[0];

    if (!user) {
      res.json({autheticated:false});
      return;
    }

    const passwordMatch =  bcrypt.compareSync(password, user.password);
    if(!passwordMatch){
      res.json({autheticated:false});
      return;
    }
    await client.query('COMMIT');

    res.json({autheticated:true});
  } catch (error) {
    await client.query('ROLLBACK');

    console.error('Error getting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.release();
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/user/create', async (req, res) => {
  const { name, email, password } = req.body;


  const salt = bcrypt.genSaltSync(10)
  const encryptedPassword = bcrypt.hashSync(password, salt);

  // Start a transaction
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Use a parameterized query to prevent SQL injection
    const result = await client.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id,name,email',
      [name, email, encryptedPassword]
    );

    // Commit the transaction
    await client.query('COMMIT');

    const newUser = result.rows[0];
    res.json(newUser);
  } catch (error) {
    // Rollback the transaction in case of an error
    await client.query('ROLLBACK');

    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Release the client back to the pool
    client.release();
  }
});

app.post('/user/update', async (req, res) => {
  const { id, name } = req.body;

  // Start a transaction
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Use a parameterized query to prevent SQL injection
    const result = await client.query(
      `UPDATE public.users
     SET  name='${name}'
     WHERE id=${id} RETURNING name, id;`

    );

    // Commit the transaction
    await client.query('COMMIT');

    const newUser = result.rows[0];
    res.json(newUser);
  } catch (error) {
    // Rollback the transaction in case of an error
    await client.query('ROLLBACK');

    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Release the client back to the pool
    client.release();
  }
});

app.delete('/user/delete', async (req, res) => {
  const { id } = req.body;

  // Start a transaction
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Use a parameterized query to prevent SQL injection
    const result = await client.query(
      `DELETE from public.users
     WHERE id=${id} RETURNING name, id;`

    );

    // Commit the transaction
    await client.query('COMMIT');

    const newUser = result.rows[0];
    res.json(newUser);
  } catch (error) {
    // Rollback the transaction in case of an error
    await client.query('ROLLBACK');

    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Release the client back to the pool
    client.release();
  }
});


//REVIEWS
app.get('/reviews', async (req, res) => {


  // Start a transaction
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Use a parameterized query to prevent SQL injection
    const result = await client.query(
      `SELECT * FROM public.reviews `

    );

    // Commit the transaction
    await client.query('COMMIT');

    //const newUser = result;
    res.json(result.rows);
  } catch (error) {
    // Rollback the transaction in case of an error
    await client.query('ROLLBACK');

    console.error('Error getting review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Release the client back to the pool
    client.release();
  }

})

app.post('/review/create', async (req, res) => {
  const { value } = req.body;

  // Start a transaction
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Use a parameterized query to prevent SQL injection
    const result = await client.query(
      'INSERT INTO reviews (value) VALUES ($1) RETURNING id,value',
      [value]
    );

    // Commit the transaction
    await client.query('COMMIT');

    const newRiview = result.rows[0];
    res.json(newRiview);
  } catch (error) {
    // Rollback the transaction in case of an error
    await client.query('ROLLBACK');

    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Release the client back to the pool
    client.release();
  }
});

app.put('/review/update', async (req, res) => {
  const { id, value } = req.body;

  // Start a transaction
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Use a parameterized query to prevent SQL injection
    const result = await client.query(
      `UPDATE public.reviews
     SET  value='${value}'
     WHERE id=${id} RETURNING value, id;`

    );

    // Commit the transaction
    await client.query('COMMIT');

    const newRiview = result.rows[0];
    res.json(newRiview);
  } catch (error) {
    // Rollback the transaction in case of an error
    await client.query('ROLLBACK');

    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Release the client back to the pool
    client.release();
  }
});

app.delete('/review/delete', async (req, res) => {
  const { id } = req.body;

  // Start a transaction
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Use a parameterized query to prevent SQL injection
    const result = await client.query(
      `DELETE from public.reviews
     WHERE id=${id} RETURNING value, id;`

    );

    // Commit the transaction
    await client.query('COMMIT');

    const newRiview = result.rows[0];
    res.json(newRiview);
  } catch (error) {
    // Rollback the transaction in case of an error
    await client.query('ROLLBACK');

    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
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
    res.json(result.rows[0]);
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