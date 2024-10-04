import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScreenFive: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World! This is Screen One.</Text>
    </View>
  );
};

export default ScreenFive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
  },
});