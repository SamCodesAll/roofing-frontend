import axios from 'axios';

// Base Axios instance for future API integration.
// Swap VITE_API_BASE_URL (or the fallback below) once a real backend exists.
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});
