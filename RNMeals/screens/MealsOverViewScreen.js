import React, {useEffect} from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';
// import {useRoute} from '@react-navigation/native';
import MealList from '../components/MealList/MealList';

function MealsOverScreen({route, navigation}) {
  // route will receive data passed while pushing this UI
  // const route = useRoute() - second way to get route
  const catId = route.params.categoryId; // route.params is predefind + category is passed receiving data
  //    const name = route.params.name
  const displayMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId,
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealList items={displayMeals} />;
}

export default MealsOverScreen;
