import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import colors from "@/constants/Colors";
import spacing from "@/constants/spacing";

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
  container: {
    width: 75,
    height: 20,
    backgroundColor: colors.main.background,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "7%",
    marginTop: spacing.s,
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
    color: colors.white.background,
  },
  button: {
    backgroundColor: colors.main.background
  },
});
