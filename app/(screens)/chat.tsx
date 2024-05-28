import { StyleSheet, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function ChatScreen() {
  return (
    <>
      <SafeAreaView>
        <Pressable>
          <Link href="/(screens)" />
          <Text>뒤로 가기</Text>
        </Pressable>
        <Text>Chat</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});