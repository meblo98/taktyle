import axios from 'axios';

// Récupérer le token depuis le localStorage
const token = localStorage.getItem('token');

// Créer une instance axios
const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}` // Ajouter le token JWT ici
  }
});

// Intercepteur pour définir dynamiquement le Content-Type
apiClient.interceptors.request.use(config => {
  // Vérifier si les données sont de type FormData
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else {
    config.headers['Content-Type'] = 'application/json';
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default apiClient;