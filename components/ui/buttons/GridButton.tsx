// components/ui/buttons/GridButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

interface GridButtonProps {
  title: string;
  icon: string;
  onPress: () => void;
}

const GridButton: React.FC<GridButtonProps> = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons name={icon as any} size={50} color={Colors.iconColor} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GridButton;

const styles = StyleSheet.create({
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
