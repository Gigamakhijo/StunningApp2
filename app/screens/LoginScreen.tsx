import React, { ComponentType, FC, useState, useRef, useEffect, useMemo } from "react"
import { TextStyle, View, ViewStyle, TextInput, Text, } from "react-native"
import { AppStackScreenProps } from "../../App"
// import { AppStackScreenProps } from "app/navigators"

interface LoginScreenProps extends AppStackScreenProps<"Login">{}

export const LoginScreen: FC<LoginScreenProps> = function LoginScreen(_props){
    const { navigation } = _props

    return (
        <View />
    )
}