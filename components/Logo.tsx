import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Logo(props: any) {
  return (
    <View style={styles.container}>
      <Text>STUNNING</Text>
    </View>
  
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignSelf: "center",
  },
});
