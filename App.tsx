// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/AuthContext';
import { MealProvider } from './contexts/MealContext';
import BottomTabNavigator from './navigation/BottomNavigation';


export default function App() {
  return (
    <AuthProvider>
      <MealProvider>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </MealProvider>
    </AuthProvider>
  );
}
