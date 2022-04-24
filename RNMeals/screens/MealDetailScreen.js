import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import SubTitle from '../components/MealDetail/SubTitle';
import List from '../components/MealDetail/List';
function MealDetailScreen({route}) {
  const id = route.params.mealId;
  const selectedMeals = MEALS.find(meals => meals.id == id);
  return (
    <View>
      <Image source={{uri: selectedMeals.imageUrl}} style={style.image} />
      <Text style={style.title}> {selectedMeals.title}</Text>
      <View>
        <MealDetail
          duration={selectedMeals.duration}
          complexity={selectedMeals.complexity}
          affordability={selectedMeals.affordability}
          titleStyle={style.detailColor}
        />
      </View>

      <SubTitle>Ingrediants</SubTitle>
      <List data={selectedMeals.ingredients}/>
      <SubTitle>Steps</SubTitle>
      <List data={selectedMeals.steps}/>

    </View>
  );
}

export default MealDetailScreen;
const style = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailColor: {
    color: 'red',
  },
});
