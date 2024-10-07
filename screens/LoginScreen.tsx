// screens/LoginScreen.tsx
import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import LoginForm from '../components/logic/LoginForm';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/BottomNavigation';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<RootStackParamList, 'SecretScreen'>;

const LoginScreen: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigation = useNavigation<NavigationProp>();

  const handleGoToSecretScreen = () => {
    navigation.navigate('SecretScreen');
  };

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <Button title="Go to Secret Screen" onPress={handleGoToSecretScreen} />
      ) : (
        <LoginForm />
      )}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
  },
});
