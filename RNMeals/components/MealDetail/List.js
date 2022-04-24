import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function List({data}) {
  return data.map(dataPoint => (
    <View key={dataPoint} style={style.listItem}>
      <Text style={style.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;
const style = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 5,
    marginHorizontal: 12,
    backgroundColor: 'yellow',
  },
  itemText: {
    textAlign: 'center',
    color: 'red',
  },
});
