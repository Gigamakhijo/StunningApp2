import React, { ComponentType, FC, useState, useRef, useEffect, useMemo } from "react"
import { TextStyle, View, ViewStyle, TextInput, Text, StyleSheet, Image, ImageBackground, KeyboardAvoidingView, Platform, Button, Pressable } from "react-native"
import { AppStackScreenProps } from "../../App"
import { StatusBar, StatusBarProps } from "expo-status-bar"
import { BasicScreen } from "../component/BasicScreen"

interface SignInScreenProps extends AppStackScreenProps<"SignIn">{}

export const SignInScreen: FC<SignInScreenProps> = function SignInScreen(_props){
    const { navigation } = _props

    return(
        <BasicScreen>
            
        </BasicScreen>
    )
}