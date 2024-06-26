import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CancelButton from "@/components/CancelButton";
import ConfirmButton from "@/components/ConfirmButton";
import { router } from "expo-router";

export default function TrainerScreen() {
  const [inputText, setInputText] = useState("");
  const check = () => {
    router.replace("/(tabs)/");
  };
  const cancel = () => {
    router.replace("/(tabs)/");
  };
  return (
    <SafeAreaView
      style={styles.container}
      edges={{ bottom: "off", top: "additive" }}
    >
      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text style={styles.logotext}>Stunning</Text>
        <View style={styles.center}>
          <Text style={styles.explaintext}>당신을 도와줄</Text>
          <Text style={styles.explaintext}>Trainer의 이름을</Text>
          <Text style={styles.explaintext}>설정해주세요!</Text>
          <View style={styles.name}>
            <TextInput
              value={inputText}
              onChangeText={setInputText}
              placeholder="트레이너의 이름을 설정해주세요."
              placeholderTextColor="#8C8C8C"
              multiline={false}
              maxLength={30}
              editable={true}
            />
          </View>
        </View>
        <View style={styles.button}>
          <CancelButton onPress={cancel} />
          <ConfirmButton onPress={check} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
    // justifyContent: "center",
    alignItems: "center",
  },
  keyboardAvoid: {
    flex: 1,
  },
  logotext: {
    fontSize: 20,
    color: "#408DFE",
    fontWeight: "bold",
    // flex: 1,
    alignSelf: "center",
  },
  center: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  explaintext: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginBottom: 5,
  },
  name: {
    color: "black",
    fontSize: 15,
    fontWeight: "normal",
    height: 45,
    width: 300,
    marginTop: "25%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#C9C9C9",
    paddingHorizontal: "5%",
    alignSelf: "center",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    marginBottom: "5%",
    alignItems: "flex-end",
  },
});
