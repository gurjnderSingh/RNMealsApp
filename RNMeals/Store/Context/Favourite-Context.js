import React, {createContext, useState} from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

function FavoritesContextProvider({children}) {
  const [favoriteMealId, setAddFavoriteMeal] = useState([]);
  function addFavoriteMethod(id) {
    setAddFavoriteMeal(cuurentFavIds => [...cuurentFavIds, id]);
  }

  function removeFavoriteMethod(id) {
    setAddFavoriteMeal(currentFavId =>
      currentFavId.filter(mealId => mealId != id),
    );
  }
  const value = {
    ids: favoriteMealId,
    addFavorite: addFavoriteMethod,
    removeFavorite: removeFavoriteMethod,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContextProvider;
