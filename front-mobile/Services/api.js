import axios from 'axios';

const api = axios.create({
  baseURL: 'https://condelivery-production.up.railway.app/'
});

export default api;
