import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/BottomNavigation';
import { AuthContext } from '../contexts/AuthContext';
import GridButton from '../components/ui/buttons/GridButton';


type InicioScreenNavigationProp = StackNavigationProp<RootStackParamList, 'InicioScreen'>;

interface ButtonItem {
  id: string;
  title: string;
  icon: string;
  screen: keyof RootStackParamList;
  requiresAuth: Boolean,
}

const buttonsData: ButtonItem[] = [
  { id: '1', title: 'Screen One', icon: 'fast-food', screen: 'ScreenOne', requiresAuth: false },
  { id: '2', title: 'Screen Two', icon: 'pizza', screen: 'ScreenTwo', requiresAuth: false },
  { id: '3', title: 'Screen Three', icon: 'cafe', screen: 'ScreenThree', requiresAuth: false },
  { id: '4', title: 'Screen Four', icon: 'beer', screen: 'ScreenFour', requiresAuth: false },
  { id: '5', title: 'Screen Five', icon: 'ice-cream', screen: 'ScreenFive', requiresAuth: false },
  { id: '6', title: 'Screen Six', icon: 'restaurant', screen: 'ScreenSix', requiresAuth: false },
  { id: '7', title: 'Screen Seven', icon: 'wine', screen: 'ScreenSeven', requiresAuth: false },
  { id: '8', title: 'Secret Screen', icon: 'lock-closed', screen: 'SecretScreen', requiresAuth: true },
];

const InicioScreen: React.FC = () => {
  const navigation = useNavigation<InicioScreenNavigationProp>();
  
  const { isAuthenticated } = useContext(AuthContext);

  const handlePress = (item: ButtonItem) => {
    if (item.requiresAuth && !isAuthenticated) {
      navigation.navigate('LoginScreen'); // Redirect to LoginScreen
    } else {
      navigation.navigate(item.screen);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.grid}>
        {buttonsData.map((item) => (
          <GridButton
            key={item.id}
            title={item.title}
            icon={item.icon}
            onPress={() => handlePress(item)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default InicioScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: Colors.primary,
    paddingVertical: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.secondary,
    margin: 10,
    width: '40%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    marginTop: 5,
    color: '#000',
    textAlign: 'center',
  },
});