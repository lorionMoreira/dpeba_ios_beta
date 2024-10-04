// screens/TabTwoScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TabTwoScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>This is Tab Two. Content coming soon!</Text>
    </View>
  );
};

export default TabTwoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
  },
});
