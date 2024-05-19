import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

import { Link } from "expo-router";
import colors from "@/constants/Colors";
import spacing from "@/constants/spacing";

export default function SectionButton(props: { href: string; text: string }) {
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
    marginTop: spacing.s,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.main.background,
  },
  button: {
    marginLeft: "5%",
  },
});
