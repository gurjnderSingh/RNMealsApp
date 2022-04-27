import React from 'react';
import {configureStore} from '@reduxjs/toolkit';;
// import favorite from "./favorite";
import favoriteReducer from './favorite';

export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteReducer,
  },
});
