import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

type renderMealItemProps = {
  item: {
    title: string;
    id: string;
    imageUrl: string;
    affordability: string;
    complexity: string;
    duration: number;
  };
};

type MealListProps = {
  items: {
    title: string;
    id: string;
    imageUrl: string;
    affordability: string;
    complexity: string;
    duration: number;
  }[];
};

export default function MealsList({ items }: MealListProps) {
  const renderMealItem = ({ item }: renderMealItemProps) => {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
