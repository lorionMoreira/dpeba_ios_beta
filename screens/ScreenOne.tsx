// screens/ScreenOne.tsx

import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { Meal } from '../types/Meal';
import CustomButton from '../components/ui/buttons/CustomButton';
import CustomInput from '../components/ui/inputs/CustomInput';
import Colors from '../constants/Colors';
import { useMealContext } from '../contexts/MealContext';

const ScreenOne: React.FC = () => {
  const { meals, toggleFavorite, removeMeal, addMeal } = useMealContext();
  const [mealName, setMealName] = useState('');

  const handleAddMeal = () => {
    if (!mealName.trim()) {
      Alert.alert('Error', 'Please enter a meal name.');
      return;
    }
    addMeal(mealName);
    setMealName('');
  };

  const renderItem = ({ item }: { item: Meal }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.mealName}>{item.name}</Text>
      <Text>Favorite: {item.isFavorite ? 'Yes' : 'No'}</Text>
      <View style={styles.buttonsContainer}>
        <CustomButton
          title={item.isFavorite ? 'Unfavorite' : 'Favorite'}
          onPress={() => toggleFavorite(item.id)}
        />
        {!item.isFavorite && (
          <CustomButton
            title="Remove"
            onPress={() => removeMeal(item.id)}
            style={styles.removeButton}
            textStyle={styles.removeButtonText}
          />
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Form to add new meals */}
      <View style={styles.formContainer}>
        <CustomInput
          placeholder="Enter meal name"
          value={mealName}
          onChangeText={setMealName}
        />
        <CustomButton title="Add Meal" onPress={handleAddMeal} />
      </View>

      {/* List of meals */}
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default ScreenOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  formContainer: {
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    borderRadius: 8,
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  removeButton: {
    backgroundColor: Colors.secondary,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  removeButtonText: {
    color: Colors.primary,
  },
});
