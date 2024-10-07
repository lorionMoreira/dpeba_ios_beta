import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import CustomInput from '../ui/inputs/CustomInput';
import CustomButton from '../ui/buttons/CustomButton';
import  {register}  from '../../services/authService';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/BottomNavigation';
import { useNavigation } from '@react-navigation/native';


type InicioScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RegisterScreen'>;

const RegisterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation<InicioScreenNavigationProp>();

  const handleRegister = async () => {
    try {
      await register({ name, cpf, email, senha });
      Alert.alert('Success', 'Registration successful!');
      navigation.navigate('LoginScreen');
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

export default RegisterForm;

const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignItems: 'center',
        marginTop: 50,
      },
});