import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import MealItem from './MealItem';
import {useNavigation} from '@react-navigation/native';

function MealList({items}) {
  let navigation = useNavigation();
  function renderMealItem(itemData) {
    const item = itemData.item;

    function goToMealDetailScreen() {
      navigation.navigate('MealDeail', {
        mealId: item.id,
      })
    }
    const allData = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
      onPressMealDetail: goToMealDetailScreen,
    };
    return <MealItem {...allData} />
  }
  return (
    <View style={style.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}
export default MealList;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  }
})

