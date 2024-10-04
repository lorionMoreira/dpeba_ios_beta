// screens/ScreenTwo.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScreenTwo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World! This is Screen Two.</Text>
    </View>
  );
};

export default ScreenTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
