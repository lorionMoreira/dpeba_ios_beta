import axios from 'axios';
import config from '../config/config';

const { API_URL, REGISTER_URL, FORGOT_PASSWORD_URL } = config;

const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(API_URL, {
        email,
        senha: password,
      });
      const userData = response.data;
      return userData;
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData: { name: string; cpf: string; email: string; senha: string }) => {
    try {
      const response = await axios.post(REGISTER_URL, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export default {
    login,
    register
  };