import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {MEALS} from '../data/dummy-data';
import {useRoute} from '@react-navigation/native';
import MealItem from '../components/MealItem';

function MealsOverScreen({route}) {
  // route will receive data passed while pushing this UI
  // const route = useRoute()
  const catId = route.params.categoryId; // route.params is predefind + category is passed receiving data
  //    const name = route.params.name
  const displayMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    const item = itemData.item
    const allData = {
        title: item.title,
        imageurl: item.imageUrl,
        duration: item.duration,
        affordability:item.affordability,
        complexity: item.complexity

    }
    return <MealItem {...allData}/>;
  }
  return (
    <View style={style.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverScreen;
const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
