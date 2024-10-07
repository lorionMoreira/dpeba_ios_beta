import React, { createContext, useState, useEffect } from 'react';
import { User } from '../types/User';
import { login as authLogin, register as authRegister } from '../services/authService'; // Import named exports
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Load token and user data from AsyncStorage
    const loadUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const userData = token ? JSON.parse(await AsyncStorage.getItem('userData') || '{}') : null;
        if (token && userData) {
          setUser(userData);
        }
      } catch (error) {
        console.error('Failed to load user data', error);
      }
    };

    loadUserData();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await authLogin(email, password); // Use authLogin from authService
      const { token, userData } = response;

      // Save token and user data to AsyncStorage
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('userData', JSON.stringify(userData));

      setUser(userData);
    } catch (error) {
      console.error(error);
      throw error; // Re-throw to handle in the component
    }
  };

  const logout = async () => {
    // Clear token and user data from AsyncStorage
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('userData');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
