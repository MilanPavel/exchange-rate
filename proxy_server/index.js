const express = require('express');
const axios = require('axios');

const BASE_URL =
  'http://www.cnb.cz/en/financial_markets/foreign_exchange_market/exchange_rate_fixing/daily.txt';

const app = express();

async function getDailyRates(req) {
  let data = '';

  //extract query param
  let date = new Date(req.query.date);

  try {
    await axios
      .get(
        `${BASE_URL}?date=${date.getDate()}.${date.getMonth() +
          1}.${date.getFullYear()}`
      )
      .then(res => {
        data = res.data;
      });
  } catch (error) {
    console.error(error);
  }
  return data;
}

app.get('/api/daily_rates', (req, res) => {
  getDailyRates(req).then(data => res.send(data));
});

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
