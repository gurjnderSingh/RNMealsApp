/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Button, Image} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverScreen from './screens/MealsOverViewScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealDetailScreen from './screens/MealDetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavouriteScreen from './screens/FavouriteScreen';
// import FavoritesContextProvider from './Store/Context/Favourite-Context';
import Provider from 'react-redux';
import {store} from './Redux/store';

let Stack = createNativeStackNavigator();
let Drawer = createDrawerNavigator();
function App() {
  function LogoTitle() {
    return (
      <Image
        style={{width: 150, height: 50}}
        source={require('./Assests/nature.png')}
      />
    );
  }
  function DrawerScreen() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerTintColor: 'brown',
          // headerStyle: {backgroundColor: 'black'},
          headerTitleStyle: {fontSize: 22, fontWeight: '400'},
          contentStyle: {backgroundColor: 'pink'},
          drawerStyle: {backgroundColor: 'yellow'},
          drawerActiveTintColor: 'white',
          drawerActiveBackgroundColor: 'black',
          drawerInactiveTintColor: 'black',
        }}>
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
            drawerIcon: ({tintColor}) => {
              <Image
                source={require('./Assests/nature.png')}
                style={{width: 24, height: 24}}
                tintColor={tintColor}
              />;
            },
          }}
        />
        <Drawer.Screen
          name="Favourite"
          component={FavouriteScreen}
          options={{}}
        />
      </Drawer.Navigator>
    );
  }
  return (
    // <View></View>
    <Provider store={store}>
{/* <FavoritesContextProvider> */}
    <NavigationContainer>
      {/* can also set root screen from Navigator  */}
      {/* <Stack.Navigator initialRouteName='MealsOverView'>  */}
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'brown',
          headerStyle: {backgroundColor: 'white'},
          headerTitleStyle: {fontSize: 22, fontWeight: '400'},
          contentStyle: {backgroundColor: 'pink'},
        }}>
        {/* Otherwise first element will become root components */}

        <Stack.Screen
          name="Meals"
          component={DrawerScreen}
          options={{headerShown: false}}
          //options={{ title: "Meal Categories", headerTitle: (props) => <LogoTitle {...props} />}}
        />
        <Stack.Screen
          name="MealsOverView"
          component={MealsOverScreen}
          options={{
            headerRight: () => (
              <Button title="Press" onPress={() => alert('This is a button')} />
            ),
            // ({route, navigation})=>  {
            //   const catId = route.params.categoryId
            //   return (catId)
            // }
          }}
        />
        <Stack.Screen
          name="MealDeail"
          component={MealDetailScreen}
          options={{title: 'About the Meal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    {/* </FavoritesContextProvider> */}
    </Provider>
  );
}
export default App;
const style = StyleSheet.create({});
