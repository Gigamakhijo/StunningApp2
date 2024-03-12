import React, { FC, useRef } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { BasicScreen } from "../components/BasicScreen";

export function SignUpScreen(_props) {
  const { navigation } = _props;
  const Profile = require("../assets/images/app-basic-profile.png");
  const ProfilePerson = require("../assets/images/app-person-icon.png");
  const ProfileLock = require("../assets/images/app-lock-Icon.png");

  const [id, onChangeId] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const ref_input: Array<React.RefObject<TextInput>> = [];
  ref_input[0] = useRef(null);
  ref_input[1] = useRef(null);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <BasicScreen>
        <Text style={style.logo}>STUNNING</Text>
        <View style={style.profilefield}>
          <Image source={Profile} style={style.profileimage} />
          <View style={style.signupfield}>
            <View style={style.imagefield}>
              <Image
                source={ProfilePerson}
                style={{ width: 16, height: 18, marginBottom: 25 }}
              />
              <Image source={ProfileLock} style={{ width: 16, height: 18 }} />
            </View>
            <View style={style.textfield}>
              <Text style={style.text}>아이디</Text>
              <Text style={style.text}>비밀번호</Text>
            </View>
            <View style={style.inputfield}>
              <TextInput
                onChangeText={onChangeId}
                value={id}
                placeholder="아이디를 입력하세요."
                placeholderTextColor={"#8C8C8C"}
                style={style.textinput1}
                ref={ref_input[0]}
                onSubmitEditing={() => {
                  ref_input[1].current.focus();
                }}
              />
              <TextInput
                onChangeText={onChangeId}
                value={id}
                placeholder="비밀번호를 입력하세요."
                placeholderTextColor={"#8C8C8C"}
                style={style.textinput2}
                ref={ref_input[1]}
                onSubmitEditing={() => null}
              />
            </View>
          </View>
        </View>
        <View style={style.buttonfield}>
          <View
            style={{
              backgroundColor: "#F3DDDD80",
              borderColor: "#00000010",
              borderBottomWidth: 3,
              borderRadius: 10,
              width: 160,
              height: 50,
            }}
          >
            <Pressable
              style={style.exit}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>취소</Text>
            </Pressable>
          </View>
          <View
            style={{
              backgroundColor: "#E7E6E680",
              borderColor: "#00000010",
              borderBottomWidth: 3,
              borderRadius: 10,
              width: 160,
              height: 50,
            }}
          >
            <Pressable
              style={style.complete}
              onPress={() => navigation.navigate("SetProfile")}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>완료</Text>
            </Pressable>
          </View>
        </View>
      </BasicScreen>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  logo: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 32,
    marginTop: 50,
  },
  profilefield: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  profileimage: {
    width: 90,
    height: 90,
  },
  signupfield: {
    flex: 20,
    flexDirection: "row",
  },
  imagefield: {
    marginLeft: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textfield: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#8C8C8C",
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 15,
    marginBottom: 12,
    marginTop: 15,
  },
  inputfield: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 24,
  },
  textinput1: {
    borderColor: "#8C8C8C",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    width: 250,
    height: 45,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  textinput2: {
    borderColor: "#8C8C8C",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    width: 250,
    height: 45,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
  },
  buttonfield: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  exit: {
    width: 160,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#00000010",
    borderBottomWidth: 3,
    borderRadius: 10,
  },
  complete: {
    width: 160,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#00000010",
    borderBottomWidth: 3,
    borderRadius: 10,
  },
});
