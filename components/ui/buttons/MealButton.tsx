// components/ui/buttons/MealButton.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle, TextStyle } from 'react-native';
import Colors from '../../../constants/Colors';

interface MealButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const MealButton: React.FC<MealButtonProps> = ({ title, onPress, disabled, style, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MealButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary, // Use color from colors.ts
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: Colors.disabled, // Define disabled color in colors.ts
  },
  buttonText: {
    color: Colors.buttonText, // Use color from colors.ts
    fontSize: 16,
  },
});
