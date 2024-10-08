import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen from '../screens/InicioScreen';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';
import ScreenFour from '../screens/ScreenFour';
import ScreenFive from '../screens/ScreenFive';
import ScreenSix from '../screens/ScreenSix';
import ScreenSeven from '../screens/ScreenSeven';
import ScreenEight from '../screens/ScreenEight';
import SecretScreen from '../screens/SecretScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import { RootStackParamList } from '../navigation/BottomNavigation';


const Stack = createStackNavigator<RootStackParamList>();

const InicioStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="InicioScreen">
      <Stack.Screen
        name="InicioScreen"
        component={InicioScreen}
        options={{ title: 'Início' }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ title: 'Register' }}
      />
      <Stack.Screen name="ScreenOne" component={ScreenOne} options={{ title: 'Screen One' }} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{ title: 'Screen Two' }} />
      <Stack.Screen name="ScreenThree" component={ScreenThree} options={{ title: 'Screen Three' }} />
      <Stack.Screen name="ScreenFour" component={ScreenFour} options={{ title: 'Screen Four' }} />
      <Stack.Screen name="ScreenFive" component={ScreenFive} options={{ title: 'Screen Five' }} />
      <Stack.Screen name="ScreenSix" component={ScreenSix} options={{ title: 'Screen Six' }} />
      <Stack.Screen name="ScreenSeven" component={ScreenSeven} options={{ title: 'Screen Seven' }} />
      <Stack.Screen name="SecretScreen" component={SecretScreen} options={{ title: 'Secret screen' }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Secret screen' }} />
    </Stack.Navigator>
  );
};

export default InicioStackNavigator;