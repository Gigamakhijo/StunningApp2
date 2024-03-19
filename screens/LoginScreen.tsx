import React, { FC, useRef } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { AppStackScreenProps } from "../App";
import { StatusBar } from "expo-status-bar";

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = function LoginScreen(_props) {
  const { navigation } = _props;

  const backgroundimage = require("../assets/images/background-image.png");

  const [id, onChangeId] = React.useState("");
  const [passward, onChangePassward] = React.useState("");

  const ref_input: Array<React.RefObject<TextInput>> = [];

  ref_input[0] = useRef(null);
  ref_input[1] = useRef(null);

  return (
    <View style={style.container}>
      <StatusBar style={"dark"} />
      <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={0}
          style={style.keyboardAvoidingViewStyle}
        >
          <View style={style.logoContainer}>
            <Text style={style.logo}>STUNNING</Text>
          </View>
          <View style={style.input}>
            <TextInput
              onChangeText={onChangeId}
              value={id}
              placeholder="이메일을 입력하세요."
              placeholderTextColor={"#8C8C8C"}
              ref={ref_input[0]}
              onSubmitEditing={() => {
                ref_input[1].current.focus();
              }}
              style={{
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#C9C9C9",
                minWidth: 300,
                minHeight: 45,
                padding: 10,
                marginBottom: 10,
              }}
              textAlign="left"
            />
            <TextInput
              onChangeText={onChangePassward}
              value={passward}
              placeholder="비밀번호를 입력하세요."
              placeholderTextColor={"#8C8C8C"}
              secureTextEntry={true}
              ref={ref_input[1]}
              onSubmitEditing={() => null}
              textAlign="left"
              style={style.inputbox}
            />
          </View>
        </KeyboardAvoidingView>
        <View style={style.buttonfield}>
          <Pressable
            style={style.button1}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={{ fontSize: 16, color: "#408DFE" }}>
              회원가입 하기
            </Text>
          </Pressable>
        </View>
        <View style={style.buttonfield2}>
          <Pressable style={style.button2}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#F7F8FC", }}>로그인</Text>
          </Pressable>
        </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
  },
  logoContainer: {
    justifyContent: "center",
    alignSelf: "center",
    flex: 1,
  },
  logo: {
    fontSize: 48,
    fontWeight: "500",
    color: "#408DFE"
  },
  keyboardAvoidingViewStyle: {
    flex: 30,
    backgroundColor: "#FEFEFE",
    borderTopLeftRadius: 53,
    borderTopRightRadius: 53,
    justifyContent: "space-evenly",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#C9C9C9",
    padding: 10,
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  inputbox: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C9C9C9",
    minWidth: 300,
    minHeight: 45,
    padding: 10,
  },
  contentstyle: {
    padding: 10,
  },
  buttonfield: {
    flex: 2,
    backgroundColor: "#FFFFFF",
  },
  button1: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 45,
  },
  buttonfield2: {
    flex: 4,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    backgroundColor: "#77ADF5",
    borderBottomWidth: 2,
    borderRadius: 10,
    width: 300,
    height: 40,
    borderBottomColor: "#00000020",
    justifyContent: "center",
    alignItems: "center",
  },
});
