import {View, Text} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import HeaderComponent from "@/components/HeaderComponent";
import MainHeader from "@/components/MainHeader";
export default function _layout(){
    return(
        <Stack >
            <Stack.Screen name="challengescreen" options={{header:MainHeader}}/>
        </Stack>
    )
}