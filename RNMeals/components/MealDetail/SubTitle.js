import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SubTitle({children}) {
  return (
    <View style={style.subtitleContainer}>
      <Text style={style.subtitle}>{children}</Text>
    </View>
  );
}

export default SubTitle;
const style = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 0,
  },
  subtitleContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginHorizontal: 15,
    margin: 2,
  },
});
