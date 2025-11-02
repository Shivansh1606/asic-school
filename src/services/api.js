import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Gallery API
export const galleryAPI = {
  getAll: (params) => api.get('/gallery/', { params }),
  getByCategory: (category) => api.get(`/gallery/?category=${category}`),
};

// Staff API
export const staffAPI = {
  getAll: (params) => api.get('/staff/', { params }),
  getTeaching: () => api.get('/staff/teaching/'),
  getNonTeaching: () => api.get('/staff/non_teaching/'),
};

// Management API
export const managementAPI = {
  getAll: () => api.get('/management/'),
  getByPosition: (position) => api.get(`/management/by_position/?position=${position}`),
};

// Contact API
export const contactAPI = {
  submit: (data) => api.post('/contact/', data),
};

// Activities API (ADD THIS)
export const activitiesAPI = {
  getAll: (params) => api.get('/activities/', { params }),
  getFeatured: () => api.get('/activities/featured/'),
  getByCategory: (category) => api.get(`/activities/by_category/?category=${category}`),
  getById: (id) => api.get(`/activities/${id}/`),
};

// Registration API
export const registrationAPI = {
  submit: (data) => api.post('/registrations/', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
};

// Auth API
export const authAPI = {
  login: (username, password) => api.post('/auth/login/', { username, password }),
  register: (data) => api.post('/auth/register/', data),
  logout: (refreshToken) => api.post('/auth/logout/', { refresh_token: refreshToken }),
};

export default api;
