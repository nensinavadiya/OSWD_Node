const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 2020;

const API_KEY = 'ac252f61-1b28-4e48-a197-b5dd1a79dcd4'; // Get your API key by signing up at https://www.cricapi.com/

app.get('/scores', async (req, res) => {
  try {
    const response = await axios.get(`https://cricapi.com/api/cricketScore?apikey=${API_KEY}`);
    const score = response.data;
    res.send(`Live Cricket Score: ${score}`);
  } catch (error) {
    console.error(error);s
    res.status(500).send('Error fetching live cricket score.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
