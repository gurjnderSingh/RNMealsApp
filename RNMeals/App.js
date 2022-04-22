/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverScreen from './screens/MealsOverViewScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

let Stack = createNativeStackNavigator();

function App() {
  return (
    // <View></View>
    <NavigationContainer>
      {/* can also set root screen from Navigator  */}
      {/* <Stack.Navigator initialRouteName='MealsOverView'>  */}
      <Stack.Navigator>
        {/* Otherwise first element will become root components */}
        <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
        <Stack.Screen name="MealsOverView" component={MealsOverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
const style = StyleSheet.create({});
