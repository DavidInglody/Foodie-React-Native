export type singleMealTypes = {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
};

export type singleCategoryTypes = {
  id: string;
  title: string;
  color: string;
};

export type RootStackParamList = {
  Drawer: undefined;
  MealsOverview: undefined;
  SingleMeal: { mealId: string };
};
