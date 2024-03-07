import React, { ComponentType, FC, useState, useRef, useEffect, useMemo, Children } from "react"
import { TextStyle, View, ViewStyle, TextInput, Text, StyleSheet, Image, ImageBackground, KeyboardAvoidingView, StyleProp } from "react-native"
import { StatusBar, StatusBarProps } from "expo-status-bar"

interface BasicScreenProps {
    children?: React.ReactNode
}

export function BasicScreen(props: BasicScreenProps){
    const { children } = props
    const backgroundimage = require("../../assets/images/background-image.png")

    return(
        <KeyboardAvoidingView style={{flex:1}}>
        <View style={style.container}>
            <StatusBar style={"dark"} />
            <ImageBackground
            source={backgroundimage}
            style={{flex:1, paddingTop: 60}}
            resizeMode="cover"
            >
             <View style={style.tab}>
                {children}
             </View>

            </ImageBackground>
        </View>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F6E4E4"
    },
    tab:{
        flex: 25,
        backgroundColor: "#FEFEFE",
        borderTopLeftRadius: 53,
        borderTopRightRadius: 53,
        justifyContent: "space-evenly",
    },
})