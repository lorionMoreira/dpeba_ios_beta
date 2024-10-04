// navigation/InicioStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen from '../screens/InicioScreen';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';


export type InicioStackParamList = {
  InicioScreen: undefined;
  ScreenOne: undefined;
  ScreenTwo: undefined;
  ScreenThree: undefined;
  ScreenFour: undefined;
  ScreenFive: undefined;
  ScreenSix: undefined;
  ScreenSeven: undefined;
  ScreenEight: undefined;
};

const Stack = createStackNavigator<InicioStackParamList>();

const InicioStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="InicioScreen">
      <Stack.Screen
        name="InicioScreen"
        component={InicioScreen}
        options={{ title: 'Início' }}
      />
      <Stack.Screen name="ScreenOne" component={ScreenOne} options={{ title: 'Screen One' }} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{ title: 'Screen Two' }} />

    </Stack.Navigator>
  );
};

export default InicioStackNavigator;
