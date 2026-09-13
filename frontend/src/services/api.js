import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://student-form-3-jf0u.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitContactForm = async (formData) => {
  try {
    const response = await api.post('/contact', formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: 'Network error occurred' };
  }
};

export const submitAdmissionForm = async (formData) => {
  try {
    const response = await api.post('/admission', formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: 'Network error occurred' };
  }
};
