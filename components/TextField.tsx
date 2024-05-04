import { View, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import spacing from "@/constants/spacing";
import { Children } from "react";

export default function TextField({children, ...rest}: any) {
  return (
    <>
      {children}
      <TextInput style={styles.input} />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    minWidth: 300,
    minHeight: 45,
    padding: spacing.s,
    marginBottom: spacing.s,
  },
});
