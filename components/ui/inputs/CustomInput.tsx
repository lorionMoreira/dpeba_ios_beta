import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import Colors from '../../../constants/Colors';

const CustomInput: React.FC<TextInputProps> = (props) => {
  return <TextInput style={styles.input} placeholderTextColor={Colors.placeholderText} {...props} />;
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    color: Colors.inputText,
  },
});