import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetails from "../MealDetails";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../lib/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type MealItemProps = {
  id: string;
  title: string;
  imageUrl: string;
  affordability: string;
  complexity: string;
  duration: number;
};

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: MealItemProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    
  const pressHandler = (id: string) => {
    navigation.navigate("SingleMeal", {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={() => pressHandler(id)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
