import axios from 'axios';

const http = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  },
});

export default http;
