import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function MealDetail({
  duration,
  complexity,
  affordability,
  viewStyle,
  titleStyle,
}) {
  return (
    <View style={[style.detail, viewStyle]}>
      <Text style={[style.detailItem, titleStyle]}>{duration}m</Text>
      <Text style={[style.detailItem, titleStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[style.detailItem, titleStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetail;
const style = StyleSheet.create({
  detail: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailItem: {
    fontSize: 20,
    marginHorizontal: 10, // left right space
  },
});
