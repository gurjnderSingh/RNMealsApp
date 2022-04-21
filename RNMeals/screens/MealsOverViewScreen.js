import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealsOverScreen() {
    return(
        <View style={style.container}>
            <Text>Meals Detail Screen Overview</Text>
        </View>
    )

}

export default MealsOverScreen;
const style = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
});