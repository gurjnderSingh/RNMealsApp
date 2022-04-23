import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import {useRoute} from '@react-navigation/native';
import MealItem from '../components/MealItem';

function MealsOverScreen({route, navigation}) {
  // route will receive data passed while pushing this UI
  // const route = useRoute()
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

  function goToMealDetailScreen() {
    navigation.navigate('MealDeail');
    console.log('show detail');
  }
  function renderMealItem(itemData) {
    const item = itemData.item;
    const allData = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
      onPressMealDetail: goToMealDetailScreen,
    };
    return <MealItem {...allData} />;
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
    padding: 5,
  },
});
