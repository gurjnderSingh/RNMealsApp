import React, {useLayoutEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import SubTitle from '../components/MealDetail/SubTitle';
import List from '../components/MealDetail/List';
// import {FavoritesContext} from '../Store/Context/Favourite-Context';
import {useDispatch, useSelector} from 'react-redux';
import {removeFavorite, addFavorite} from '../Redux/favorite';

function MealDetailScreen({route, navigation}) {
  // const favMealContext = useContext(FavoritesContext);
  const favMealsIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeals = MEALS.find(meals => meals.id === mealId);

  //  const isFav = favMealContext.ids.includes(mealId);
  const isFav = favMealsIds.includes(mealId);
  //  const isFav = true

  function makFavUnFavMeal() {
    if (isFav) {
      // favMealContext.removeFavorite(mealId);
      console.log('remove ',mealId)
      dispatch(removeFavorite({ id: mealId}));
      
    } else {
      console.log('add ',mealId)
      //  favMealContext.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId}));
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable onPress={makFavUnFavMeal}>
            <Image
              source={
                isFav
                  ? require('../Assests/Fav.png')
                  : require('../Assests/unFav.png')
              }
              style={{height: 20, width: 20, backgroundColor: 'white'}}
            />
          </Pressable>
        );
      },
    });
  }, [navigation, makFavUnFavMeal]);
  return (
    <ScrollView style={style.rootContainer}>
      {console.log('Meal id is ', mealId)}
      {/* {console.log('favMealContext.ids id is ', favMealContext.ids)} */}

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
