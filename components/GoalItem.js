import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ text, id, onDeleteItem }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#480e95" }}
        onPress={() => onDeleteItem(id)}
        style={({ pressed }) => pressed && styles.presssedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
    padding: 8,
  },
  presssedItem: {
    opacity: 0.8,
  },
});
