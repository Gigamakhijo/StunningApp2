import { View, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import spacing from "@/constants/spacing";

export default function TextField(props: any) {
  return (
    <>
      <TextInput style={styles.input} />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C9C9C9",
    minWidth: 300,
    minHeight: 45,
    padding: spacing.s,
    marginBottom: spacing.s,
  },
});
