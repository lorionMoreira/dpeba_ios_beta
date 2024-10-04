// navigation/TabOneStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabOneScreen from '../screens/TabOneScreen';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';


export type TabOneStackParamList = {
  TabOneScreen: undefined;
  ScreenOne: undefined;
  ScreenTwo: undefined;
};

const Stack = createStackNavigator<TabOneStackParamList>();

const TabOneStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="TabOneScreen">
      <Stack.Screen name="TabOneScreen" component={TabOneScreen} options={{ title: 'Tab One' }} />
      <Stack.Screen name="ScreenOne" component={ScreenOne} options={{ title: 'Screen One' }} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{ title: 'Screen Two' }} />
    </Stack.Navigator>
  );
};

export default TabOneStackNavigator;
