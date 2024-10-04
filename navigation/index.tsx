import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioStackNavigator from './InicioStack';
import TabTwoScreen from '../screens/TabTwoScreen';
import LoginScreen from '../screens/LoginScreen';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.primary,
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          if (route.name === 'Início') {
            iconName = 'home';
          } else if (route.name === 'Tab Two') {
            iconName = 'ellipse-outline';
          } else if (route.name === 'Login') {
            iconName = 'log-in';
          } else {
            iconName = 'ellipse-outline';
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Início" component={InicioStackNavigator} />
      <Tab.Screen name="Tab Two" component={TabTwoScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;