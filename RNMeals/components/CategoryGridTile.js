import React from 'react';
import {Text, View, Pressable, StyleSheet, Platform} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

function CategoryGridTile({title, color, onPressCell}) {
  // const navigation = useNavigation();
  // function gotoMealsOverView() {
  //     navigation.navigate('MealsOverView'); //// Alternative you can use useNavigation Hook to navigate
  // }
  return (
    <View style={[style.gridItem]}>
      <Pressable
        onPress={onPressCell}
        //   onPress={gotoMealsOverView}
        style={({pressed}) => [
          style.button,
          pressed ? style.buttonPressed : null,
        ]}>
        <View style={[style.innerContainer, {backgroundColor: color}]}>
          <Text style={style.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );;
}

export default CategoryGridTile;
const style = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.5,
    overflow: Platform.OS == 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
})
