import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

export default function ConfirmButton(props: { onPress: any }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={props.onPress} style={styles.button}>
        <Text style={styles.text}>확인</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 35,
    borderRadius: 15,
    backgroundColor: "#98CEFF",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "6%",
  },
  text: {
    fontSize: 15,
    fontWeight: "normal",
    color: "white",
  },
  button: {},
});