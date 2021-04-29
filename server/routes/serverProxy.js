const axios = require('axios');
const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

module.exports = axios.create({
  baseURL: API_URL,
  params: { key: API_KEY },
});
