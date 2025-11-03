import axios from 'axios';
import Cookies from 'js-cookie';

const ApiUrl = "http://localhost:5000/api/";

const api = axios.create({
  baseURL: ApiUrl,
  headers: {
    'Content-Type': 'application/json',
    'System-Key': 'jewellery@0210',
    'X-Requested-With' : 'XMLHttpRequest'
  },
});

export default api;