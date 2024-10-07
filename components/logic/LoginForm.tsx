// components/Auth/LoginForm.tsx
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../ui/buttons/CustomButton';
import LinkText from '../ui/text/LinkText';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/BottomNavigation';

type NavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

const LoginForm: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isAuthenticated } = useContext(AuthContext);

  const navigation = useNavigation<NavigationProp>();

  const handleLogin = async () => {
    try {
      await login(email, password);
      Alert.alert('Success', 'You have logged in successfully.');
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid email or password.');
    }
  };

  const handleRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Password reset functionality will be implemented soon.');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <CustomButton title="Login" onPress={handleLogin} />
      <CustomButton
        title="Register"
        onPress={handleRegister}
        style={styles.registerButton}
        textStyle={styles.registerButtonText}
      />
      <LinkText text="Forgot Password" onPress={handleForgotPassword} />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignItems: 'center',
    marginTop: 50,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  registerButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#008000',
  },
  registerButtonText: {
    color: '#008000',
  },
});
