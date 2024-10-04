import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { InicioStackParamList } from '../navigation/InicioStack';

type InicioScreenNavigationProp = StackNavigationProp<InicioStackParamList, 'InicioScreen'>;

interface ButtonItem {
  id: string;
  title: string;
  icon: string;
  screen: keyof InicioStackParamList;
}

const buttonsData: ButtonItem[] = [
  { id: '1', title: 'Screen One', icon: 'fast-food', screen: 'ScreenOne' },
  { id: '2', title: 'Screen Two', icon: 'pizza', screen: 'ScreenTwo' },
  { id: '3', title: 'Screen Three', icon: 'cafe', screen: 'ScreenThree' },
  { id: '4', title: 'Screen Four', icon: 'beer', screen: 'ScreenFour' },
  { id: '5', title: 'Screen Five', icon: 'ice-cream', screen: 'ScreenFive' },
  { id: '6', title: 'Screen Six', icon: 'restaurant', screen: 'ScreenSix' },
  { id: '7', title: 'Screen Seven', icon: 'wine', screen: 'ScreenSeven' },
  { id: '8', title: 'Screen Eight', icon: 'nutrition', screen: 'ScreenEight' },
];

const InicioScreen: React.FC = () => {
  const navigation = useNavigation<InicioScreenNavigationProp>();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.grid}>
        {buttonsData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.button}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Ionicons name={item.icon as any} size={50} color={Colors.iconColor} />
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
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