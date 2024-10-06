import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

const CustomInput: React.FC<TextInputProps> = (props) => {
  return <TextInput style={styles.input} {...props} />;
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});