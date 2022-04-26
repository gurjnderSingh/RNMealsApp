import React, {createContext, useState} from 'react';

export const FavoritesContext = createContext({
  id: [],
  addFavorites: () => {},
  removeFavorites: () => {},
});

function FavoritesContextProvider({children}) {
  const [favoriteMealId, setAddFavoriteMeal] = useState([]);
  function addFavorite(id) {
    setAddFavoriteMeal(cuurentFavIds => [...cuurentFavIds, id]);
  }

  function removeFavorite(id) {
    setAddFavoriteMeal(currentFavId =>
      currentFavId.filter(mealId => mealId != id),
    );
  }
  const value = {
    ids: [],
    addFavorites: addFavorite,
    removeFavorites: removeFavorite,
  };
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
}
export default FavoritesContextProvider;
