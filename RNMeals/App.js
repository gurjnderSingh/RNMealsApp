/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet,Button} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverScreen from './screens/MealsOverViewScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealDetail from './screens/MealDetail';

let Stack = createNativeStackNavigator();

function App() {
  function LogoTitle() {
    return (
      <Image
        style={{ width: 150, height: 50 }}
        source={require('./Assests/nature.png')}
      />
    );
  }
  return (
    // <View></View>
  
    <NavigationContainer>
      {/* can also set root screen from Navigator  */}
      {/* <Stack.Navigator initialRouteName='MealsOverView'>  */}
      <Stack.Navigator screenOptions={{
          headerTintColor: 'yellow',
          headerStyle:{backgroundColor:'black'},
          headerTitleStyle:{fontSize: 22, fontWeight:'400'}
        }}>
        {/* Otherwise first element will become root components */}
        <Stack.Screen 
        name="MealsCategories" 
        component={CategoriesScreen}
        options={{ title: "Meal Categories"}}
        //options={{ title: "Meal Categories", headerTitle: (props) => <LogoTitle {...props} />}}
        />
        <Stack.Screen 
        name="MealsOverView"
         component={MealsOverScreen} 
         options={{
         headerRight: () => <Button title='Press' onPress={()=> alert('This is a button')}/>
            // ({route, navigation})=>  {
            //   const catId = route.params.categoryId
            //   return (catId)
            // }
          }}/>
          <Stack.Screen
            name='MealDeail'
            component={MealDetail}
            options={{title:'Meal Detail'}}
          />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
const style = StyleSheet.create({});
