import React from "react";
import {configureStore} from '@reduxjs/toolkit';
import favoriteReucer from "./favorite";

export const store = configureStore({
    reducer{
        favoriteMeals: favoriteReucer;
    }
});
