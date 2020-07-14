import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@TicketScraper:token');

  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const token = localStorage.getItem('@TicketScraper:token');

    if (error.response?.status === 401 && token) {
      localStorage.removeItem('@TicketScraper:token');
    }
    return Promise.reject(error);
  },
);

export default api;
