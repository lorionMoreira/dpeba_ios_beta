import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

export type LoginStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

const Stack = createStackNavigator<LoginStackParamList>();

const LoginStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: 'Register' }} />
    </Stack.Navigator>
  );
};

export default LoginStackNavigator;