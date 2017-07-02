import { create } from 'apisauce';

const api = create({
  baseURL: 'http://localhost:8000',
  headers: { 'Content-Type': 'application/json' }
});

export default api;
