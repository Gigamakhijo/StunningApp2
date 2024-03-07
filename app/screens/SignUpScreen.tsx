import React, { ComponentType, FC, useState, useRef, useEffect, useMemo } from "react"
import { TextStyle, View, ViewStyle, TextInput, Text, StyleSheet, Image, ImageBackground, KeyboardAvoidingView, Platform, Button, Pressable } from "react-native"
import { AppStackScreenProps } from "../../App"
import { StatusBar, StatusBarProps } from "expo-status-bar"
import { BasicScreen } from "../component/BasicScreen"

interface SignUpnScreenProps extends AppStackScreenProps<"SignUp">{}

export const SignUpScreen: FC<SignUpnScreenProps> = function SignUpScreen(_props){
    const { navigation } = _props

    return(
        <BasicScreen>
            
        </BasicScreen>
    )
}