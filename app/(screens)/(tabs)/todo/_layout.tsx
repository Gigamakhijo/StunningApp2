import {View, Text} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import HeaderComponent from "@/components/HeaderComponent";
import MainHeader from "@/components/MainHeader";
import { Header } from 'react-native/Libraries/NewAppScreen';
import colors from "@/constants/Colors";
import { Drawer } from 'expo-router/drawer';
export default function _layout(){
    return(
        <Stack >
            <Stack.Screen name="index" options={{header:MainHeader}}/>
            <Stack.Screen name="todoadd" options={{header:HeaderComponent}}/>
        </Stack>
    )
}