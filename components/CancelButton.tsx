import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

import { router } from "expo-router";

export default function CancelButton(props: any) {
  const goback = () => {
    router.back;
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={goback} style={styles.button}>
        <Text style={styles.text}>취소</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 35,
    borderRadius: 15,
    backgroundColor: "#D8D8D8",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "normal",
    color: "white",
  },
  button: {},
});
