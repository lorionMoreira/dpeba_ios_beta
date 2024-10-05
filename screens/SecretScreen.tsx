import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecretScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Secret Screen! You are authenticated.</Text>
    </View>
  );
};

export default SecretScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
  },
});