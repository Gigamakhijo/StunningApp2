import React, { ComponentType, FC, useState, useRef, useEffect, useMemo } from "react"
import { TextStyle, View, ViewStyle, TextInput, Text, StyleSheet, Image, ImageBackground, KeyboardAvoidingView, Platform, Button, Pressable } from "react-native"
import { AppStackScreenProps } from "../../App"
import { StatusBar, StatusBarProps } from "expo-status-bar"
// import { AppStackScreenProps } from "app/navigators"

interface LoginScreenProps extends AppStackScreenProps<"Login">{}

export const LoginScreen: FC<LoginScreenProps> = function LoginScreen(_props){
    const { navigation } = _props

    const backgroundimage = require("../../assets/images/background-image.png")

    const [id, onChangeId] = React.useState('')
    const [passward, onChangePassward] = React.useState('')

    const ref_input: Array<React.RefObject<TextInput>> = []
    ref_input[0] = useRef(null)
    ref_input[1] = useRef(null)
  
    const onFocusNext = (index: number) => {
      if (ref_input[index + 1] && index < ref_input.length - 1) {
        ref_input[index + 1].current?.focus()
      }
      if (ref_input[index + 1] && index == ref_input.length - 1) {
        ref_input[index].current?.blur()
      }
    }

    return (
        <View style={style.container}>
            <StatusBar style={"dark"} />
            <ImageBackground 
            source={backgroundimage} 
            style={{flex:1, paddingTop: 60,}}
            resizeMode="cover">
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
                        placeholder="아이디를 입력하세요."
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
                    <Pressable style={style.button1} onPress={()=>navigation.navigate("SignIn")}>
                        <Text style={{fontSize: 16, color: "#DD8181"}}>회원가입 하기</Text>
                    </Pressable>
                </View>
                <View style={style.buttonfield2}>
                    <Pressable style={style.button2}>
                        <Text style={{fontSize: 15, fontWeight: "bold"}}>로그인</Text>
                    </Pressable>
                </View>
            </ImageBackground>

        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F6E4E4",
        // justifyContent: "center",
        // paddingVertical: 50,
    },
    logoContainer:{     
        justifyContent: "center",
        alignSelf:"center",
    },
    logo:{
        fontSize: 48,
        fontWeight: "500",
    },
    keyboardAvoidingViewStyle:{
        flex: 25,
        backgroundColor: "#FEFEFE",
        borderTopLeftRadius: 53,
        borderTopRightRadius: 53,
        justifyContent: "space-evenly",
        // height: "90%",
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
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    button1:{
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
        backgroundColor: "#E1E1E180",
        borderBottomWidth: 2,
        borderRadius: 10,
        width: 300,
        height: 40,
        borderBottomColor: "#00000020",
        justifyContent: "center",
        alignItems: "center",
    }
});