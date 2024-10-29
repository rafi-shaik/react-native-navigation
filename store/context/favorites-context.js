import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealIds((prev) => [...prev, id]);
  };

  const removeFavorite = (id) => {
    const filteredMealIds = favoriteMealIds.filter((each) => each !== id);
    setFavoriteMealIds(filteredMealIds);
  };

  const value = {
    id: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider values={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
