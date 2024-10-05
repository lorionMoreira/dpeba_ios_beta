import axios from 'axios';
import config from '../config/config';

const { API_URL } = config;

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
  
  export default {
    login,
  };