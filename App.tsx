import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AppStack } from "./navigators";

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row-reverse",
    // paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "",
    flex: 1,
  },
  icongroup: {
    flexDirection: "row",
  },
});
