// backend/app.js
const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

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

app.get('/clirim', async (req,res) => {
  
      // Start a transaction
      const client = await pool.connect();
      try {
        await client.query('BEGIN');
    
        // Use a parameterized query to prevent SQL injection
        const result = await client.query(
          "SELECT id, name, email, password, created_at, modified_at  FROM public.users WHERE name='clirim'",
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/user/create', async (req, res) => {
    const { name, email, password } = req.body;

    // Start a transaction
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
  
      // Use a parameterized query to prevent SQL injection
      const result = await client.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id,name,email',
        [name, email, password]
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