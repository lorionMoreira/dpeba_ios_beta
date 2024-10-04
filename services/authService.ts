import axios from 'axios';

const url = 'https://myec2lorion.zapto.org/login';

const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(url, {
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