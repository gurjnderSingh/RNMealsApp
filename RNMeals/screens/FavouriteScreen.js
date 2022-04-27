import React, {useContext, useState} from 'react';
import {FavoritesContext} from '../Store/Context/Favourite-Context';
import {MEALS} from '../data/dummy-data';
import MealList from '../components/MealList/MealList';

function FavouriteScreen() {
  const favoriteContext = useContext(FavoritesContext);
  const favMeals = MEALS.filter(meal => favoriteContext.ids.includes(meal.id));
  return <MealList items={favMeals} />;
}

export default FavouriteScreen;
