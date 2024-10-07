import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Meal } from '../types/Meal';
import { initialMeals } from '../data/mealsData';

  interface MealContextProps {
    meals: Meal[];
    toggleFavorite: (id: string) => void;
    removeMeal: (id: string) => void;
    addMeal: (name: string) => void;
  }

  const MealContext = createContext<MealContextProps>({
    meals: [],
    toggleFavorite: () => {},
    removeMeal: () => {},
    addMeal: () => {},
  });

export const MealProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [meals, setMeals] = useState<Meal[]>(initialMeals);

    const toggleFavorite = (id: string) => {
        setMeals((prevMeals) =>
          prevMeals.map((meal) =>
            meal.id === id ? { ...meal, isFavorite: !meal.isFavorite } : meal
          )
        );
      };

      const removeMeal = (id: string) => {
        setMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== id));
      };

      const addMeal = (name: string) => {
        const newMeal: Meal = {
          id: (meals.length + 1).toString(),
          name,
          isFavorite: false,
        };
        setMeals((prevMeals) => [...prevMeals, newMeal]);
      };


      return (
        <MealContext.Provider value={{ meals, toggleFavorite, removeMeal, addMeal }}>
          {children}
        </MealContext.Provider>
      );
};

export const useMealContext = () => useContext(MealContext);