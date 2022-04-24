import React from 'react';
import {View, Text, Image, StyleSheet, Pressable, Platform} from 'react-native';
import MealDetail from './MealDetail';
// import {useNavigation} from '@react-navigation/native'

function MealItem({
  title,
  imageUrl,
  complexity,
  affordability,
  duration,
  onPressMealDetail,
}) {
  // let navigation = useNavigation()
  return (
    <View style={style.mealItem}>
      <Pressable
        style={({pressed}) => (pressed ? style.opacity : null)}
        //onPress={()=>{ navigation.navigate('MealDeail') }}>
        onPress={onPressMealDetail}>
        <View style={style.innerContainer}>
          <View>
            <Image source={{uri: imageUrl}} style={style.image} />
            <Text style={style.title}>{title}</Text>
          </View>
          <MealDetail
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const style = StyleSheet.create({
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  opacity: {
    opacity: 0.5,
  },
  mealItem: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
    shadowRadius: 5,
    shadowOpacity: 0.3,
    overflow: Platform.OS == 'android' ? 'hidden' : 'visible',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  container: {},
});
