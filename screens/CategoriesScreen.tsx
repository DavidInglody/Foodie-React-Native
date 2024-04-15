import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { singleCategoryTypes } from "../lib/types";

type CategoriesScreenProps = {
  navigation: any;
};

type renderCategoryItemProps = {
  item: singleCategoryTypes;
};

export default function CategoriesScreen({
  navigation,
}: CategoriesScreenProps) {
  const renderCategoryItem = ({ item }: renderCategoryItemProps) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    };

    return (
      <CategoryGridTitle
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  singleItem: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
});
