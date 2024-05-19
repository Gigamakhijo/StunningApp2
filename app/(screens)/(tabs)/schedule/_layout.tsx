import {View, Text} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import HeaderComponent from "@/components/HeaderComponent";
import MainHeader from "@/components/MainHeader";
import { Drawer } from 'expo-router/drawer';
export default function _layout(){
    return(
        <Stack >
            <Stack.Screen name="schedulescreen" options={{header:MainHeader}}/>
            <Stack.Screen name="scheduleadd" options={{header:HeaderComponent}}/>
        </Stack>
    )
}