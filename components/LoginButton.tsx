import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

export default function LoginButton(props: any) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={props.onPress}>
        <Text style={styles.text}>로그인 / 회원가입</Text>
       </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
  },
  button: {
    width: 300,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#77ADF5",
  },
  text: {
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});
