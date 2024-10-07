import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import RegisterForm from '../components/logic/RegisterForm';



const RegisterScreen: React.FC = () => {


  return (
    <View style={styles.container}>
        <RegisterForm />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
});