import React from 'react';
import {FlatList, Text} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

// function renderCategoryItem({item}) {
//     return <CategoryGridTile title={item.title}/>
// }
// function pressHandler(navigation) {
//   navigation.navigate('MealsOverView');
// }

function CategoriesScreen({navigation}) {
  
//   function renderCategoryItem(itemData) {
//     return < CategoryGridTile 
//     title = { itemData.item.title } 
//     color = {itemData.item.color} 
//     onPressCell={pressHandler.bind(this,navigation)}
//     />
// }
function renderCategoryItem(item) {
  function pressHandler() {
    navigation.navigate('MealsOverView',{categoryId: item.id}); // passing data
  }
      return < CategoryGridTile 
      title = { item.title } 
      color = {item.color} 
     // onPressCell={pressHandler.bind(this,navigation)}
     onPressCell={pressHandler}
      />
  }
return <FlatList
     data={CATEGORIES}
    keyExtractor={(item)=> item.id}
   renderItem={({item})=>renderCategoryItem(item)}
    // renderItem={renderCategoryItem}
    numColumns={2}
     />
}

export default CategoriesScreen