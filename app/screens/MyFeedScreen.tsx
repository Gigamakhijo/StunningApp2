import React, { ComponentType, FC, useState, useRef, useEffect, useMemo } from "react"
import { AppStackScreenProps, TabStackScreenProps } from "../../App"
import { KeyboardAvoidingView, View } from "react-native"
import { StatusBar, StatusBarProps } from "expo-status-bar"
import { BasicScreen } from "../component/BasicScreen"

interface MyFeedScreenProps extends TabStackScreenProps<"MyFeed">{}

export const MyFeedScreen: FC<MyFeedScreenProps> = function MyFeedScreen(_props){
    const { navigation } = _props

    return(
        <BasicScreen>

        </BasicScreen>
    )
}