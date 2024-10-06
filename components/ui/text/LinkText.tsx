// components/ui/text/LinkText.tsx

import React from 'react';
import { Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';

interface LinkTextProps {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object;
}

const LinkText: React.FC<LinkTextProps> = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.linkText, style]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LinkText;

const styles = StyleSheet.create({
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});