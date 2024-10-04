// components/Auth/LoginForm.tsx
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isAuthenticated } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      await login(email, password);
      Alert.alert('Success', 'You have logged in successfully.');
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid email or password.');
    }
  };

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <Text>You are already logged in.</Text>
      ) : (
        <>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
            style={styles.input}
          />
          <TextInput
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <Button title="Login" onPress={handleLogin} />
        </>
      )}
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
     marginVertical: 5,
     borderWidth: 1,
     borderColor: '#ccc',
     borderRadius: 5,
  },
});
