import { Redirect, Stack } from "expo-router";
import { Alert, Button, StyleSheet, Text, View, Image,} from "react-native";
import {Drawer } from 'expo-router/drawer';
import {Tabs} from 'expo-router/tabs';
import { useAuth0 } from "react-native-auth0";
import HeaderComponent from "@/components/HeaderComponent";
import MainHeader from "@/components/MainHeader";
import colors from "@/constants/Colors";
import icon from "@/constants/Icon";
import { Header } from "react-native/Libraries/NewAppScreen";
import Icon from "@/constants/Icon";


export default function Layout() {
return (
    <Tabs screenOptions={{tabBarActiveTintColor: colors.white.background}}>
          <Tabs.Screen
            name="todo" // 경로
            options={{
              title: '', // 탭 글씨
              headerShown:false,
              // header: MainHeader,
              tabBarIcon:({color}) => (
                <Image 
                  style={{width: 25, height:25, tintColor: "black", marginTop:"5%"}}
                  source={icon.todoicon}/>
              )
            }}
          />
          <Tabs.Screen
            name="schedule" // 경로
            options={{
              title: '', // 탭 글씨
              // header: MainHeader,
              headerShown:false,
              tabBarIcon:({color}) => (
                <Image 
                  style={{width: 25, height:25, tintColor: "black",marginTop:"5%"}}
                  source={icon.scheduleicon}/>
              )
            }}
          />
          <Tabs.Screen
            name="challenge" // 경로
            options={{
              title: '', // 탭 글씨
              // header: MainHeader,
              headerShown:false,
              tabBarIcon:({color}) => (
                <Image 
                  style={{width: 25, height:25, tintColor: "black",marginTop:"5%"}}
                  source={icon.challenge}/>
              )
            }}
          />
        </Tabs>
)
}