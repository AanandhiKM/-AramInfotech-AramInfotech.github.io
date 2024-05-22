import axios from 'axios';

// Create an instance of axios with default configuration
const instance = axios.create({
  baseURL: 'http://localhost:8081/', // Your base URL here
  // You can also add other default configuration options here
});

export default instance;
cd 