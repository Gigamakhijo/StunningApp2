import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

export default function ScrollButton(props: { text: string }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {},
  button: {},
});
