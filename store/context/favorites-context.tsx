import { createContext, useState } from "react";

type FavoritesContextProviderProps = {
  children: React.ReactNode;
};

type FavoriteMealIdsState = string[];

type ContextValues = {
  ids: FavoriteMealIdsState;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

export const FavoritesContext = createContext<ContextValues>({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

export default function FavoritesContextProvider({
  children,
}: FavoritesContextProviderProps) {
  const [favoriteMealIds, setFavoriteMealIds] = useState<FavoriteMealIdsState>(
    []
  );

  const addFavorite = (id: string) => {
    setFavoriteMealIds((prev) => [...prev, id]);
  };
  const removeFavorite = (id: string) => {
    setFavoriteMealIds((prev) => prev.filter((mealId) => mealId !== id));
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
