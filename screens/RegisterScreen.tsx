import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import CustomInput from '../components/ui/inputs/CustomInput';
import CustomButton from '../components/ui/buttons/CustomButton';
import { register } from '../services/authService';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      await register({ name, cpf, email, senha });
      Alert.alert('Success', 'Registration successful!');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Registration Failed', 'Please check your information and try again.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <CustomInput placeholder="Name" value={name} onChangeText={setName} />
      <CustomInput placeholder="CPF" value={cpf} onChangeText={setCpf} />
      <CustomInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <CustomInput placeholder="Password" value={senha} onChangeText={setSenha} secureTextEntry />
      <CustomButton title="Register" onPress={handleRegister} />
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