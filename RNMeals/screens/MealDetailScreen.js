import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Button} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import SubTitle from '../components/MealDetail/SubTitle';
import List from '../components/MealDetail/List';
function MealDetailScreen({route, navigation}) {
  const id = route.params.mealId;
  const selectedMeals = MEALS.find(meals => meals.id == id);

  function handlePress() {
    alert('Pressed');
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="click" onPress={handlePress} />
      },
    });
  }, [navigation, handlePress]);
  return (
    <ScrollView style={style.rootContainer}>
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
      <View style={style.listOuterContainer}>
        <View style={style.listContainer}>
          <SubTitle>Ingrediants</SubTitle>
          <List data={selectedMeals.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeals.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;
const style = StyleSheet.create({
  rootContainer: {
    marginBottom: 20,
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
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
