import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FavoritesContext} from '../Store/Context/Favourite-Context';
import {MEALS} from '../data/dummy-data';
import MealList from '../components/MealList/MealList';
import {color} from 'react-native-reanimated';

function FavouriteScreen() {
  const favoriteContext = useContext(FavoritesContext);
  const favMeals = MEALS.filter(meal => favoriteContext.ids.includes(meal.id));
  if (favMeals.length == 0) {
    return (
      <View style={style.rootContiner}>
        <Text style={style.text}>You have not any favorite yet.</Text>
      </View>
    )
  }
  return <MealList items={favMeals} />;
}

export default FavouriteScreen;
const style = StyleSheet.create({
  rootContiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    color: 'blue',
  },
});
