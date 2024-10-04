// screens/TabOneScreen.tsx
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TabOneStackParamList } from '../navigation/TabOneStack';
import { RouteProp } from '@react-navigation/native';

type TabOneScreenNavigationProp = StackNavigationProp<TabOneStackParamList, 'TabOneScreen'>;

type Props = {
  navigation: TabOneScreenNavigationProp;
};

const TabOneScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Go to Screen One" onPress={() => navigation.navigate('ScreenOne')} />
      <Button title="Go to Screen Two" onPress={() => navigation.navigate('ScreenTwo')} />
    </View>
  );
};

export default TabOneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
