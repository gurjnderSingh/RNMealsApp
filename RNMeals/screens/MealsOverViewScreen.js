import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {MEALS} from '../data/dummy-data';
    import {useRoute} from '@react-navigation/native';

function MealsOverScreen({route}) {// route will receive data passed while pushing this UI
    // const route = useRoute()
    const cat = route.params.categoryId // route.params is predefind + category is passed receiving data
//    const name = route.params.name
    return(
        <View style={style.container}>
            <Text>Meals Detail Screen Overview - {cat}</Text>
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