// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/AuthContext';
import BottomTabNavigator from './navigation';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
