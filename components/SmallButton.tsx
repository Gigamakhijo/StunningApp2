import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

import colors from "@/constants/Colors";
export default function SmallButton(props: { onPress: any; text: string }) {
  return (
    <View style={styles.container}>
        <Pressable style={styles.button} onPress={props.onPress}>
          <Text style={styles.text}>{props.text}</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 20,
    backgroundColor: colors.main.background,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5%",
  },
  text: {
    color: colors.white.background,
    fontWeight: "bold",
    fontSize: 10,
  },
  button: {},
});
