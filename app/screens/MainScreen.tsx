import React, { ComponentType, FC, useState, useRef, useEffect, useMemo } from "react"
import { KeyboardAvoidingView, View } from "react-native"
import { AppStackScreenProps, TabStackScreenProps } from "../../App"
import { StatusBar, StatusBarProps } from "expo-status-bar"
import { BasicScreen } from "../component/BasicScreen"

interface MainScreenProps extends TabStackScreenProps<"Main">{}

export const MainScreen: FC<MainScreenProps> = function MainScreen(_props){
    const { navigation } = _props

    return(
        <KeyboardAvoidingView style={{flex:1}}>
            <BasicScreen>
                
            </BasicScreen>
        </KeyboardAvoidingView>
    )
}