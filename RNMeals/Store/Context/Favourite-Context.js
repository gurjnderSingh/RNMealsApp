import React, {createContext} from 'react';

export const FavoritesContext = createContext({
    id: [],
    addFavorites: ()=>{},
    removeFavorites: ()=>{},
})

function FavoritesContextProvider({children}) {
    return <FavoritesContext.Provider>
        {children}
    </FavoritesContext.Provider>
}
export default FavoritesContextProvider;