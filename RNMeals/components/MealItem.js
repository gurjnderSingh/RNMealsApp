import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

function MealItem({title, imageurl, complexity, affordability, duration}) {
  return (
    <View style={style.mealItem}>
      <Pressable>
        <View>
          <Image source={{uri: imageurl}} style={style.image} />
          <Text style={style.title}>{title}</Text>
        </View>
        <View>
          <Text>{duration}m</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const style = StyleSheet.create({
  mealItem: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  container: {},
});
