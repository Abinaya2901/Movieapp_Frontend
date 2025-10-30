import axios from 'axios';

const api = axios.create({
  // Remove baseURL to use relative paths and leverage the proxy in package.json
});

export const register = async (email, password) => {
  try {
    const response = await api.post('/api/auth/register', { email, password });
    return { success: true, message: response.data.msg };
  } catch (error) {
    return { success: false, message: error.response?.data?.msg || 'Registration failed' };
  }
};

export const login = async (email, password) => {
  try {
    const response = await api.post('/api/auth/login', { email, password });
    return { success: true, token: response.data.token, message: response.data.msg };
  } catch (error) {
    return { success: false, message: error.response?.data?.msg || 'Login failed' };
  }
};

export default api;
