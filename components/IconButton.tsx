import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  onPress: () => void;
};

export default function IconButton({ icon, color, onPress }: IconButtonProps) {
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} onPress={onPress} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
