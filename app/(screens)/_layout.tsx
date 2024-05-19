import { Redirect, Stack } from "expo-router";
import { Alert, Button, StyleSheet, Text, View, Image,} from "react-native";
import {Drawer } from 'expo-router/drawer';
import {Tabs} from 'expo-router/tabs';
import { useAuth0 } from "react-native-auth0";
import HeaderComponent from "@/components/HeaderComponent";
import MainHeader from "@/components/MainHeader";
import tabs from "./(tabs)/todo";
import colors from "@/constants/Colors";
import icon from "@/constants/Icon";
import { Header } from "react-native/Libraries/NewAppScreen";
import Icon from "@/constants/Icon";


export default function Layout() {
  const { clearSession, clearCredentials, user, isLoading } = useAuth0();

  const loggedIn = user !== undefined && user !== null;

  const onLogout = async () => {
    try {
      await clearSession();
      await clearCredentials();
    } catch (e) {
      console.log("Log out cancelled");
    }
  };

  if (isLoading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  if (!loggedIn) {
    return <Redirect href="/login" />;
  } else {
  }

  return(
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="(tabs)"/>
      <Stack.Screen name="chat"/>
    </Stack>
    // <Stack screenOptions={{headerShown: false}}>
    //   <Stack.Screen name="(tabs)"/>
      //{/* <Stack.Screen name="scheduleadd" options={{header:HeaderComponent}}/>
      // <Stack.Screen name="todoadd" options={{header:HeaderComponent}}/> */}
    // {/* <Stack   
    //   initialRouteName="index"
    //   screenOptions={{
    //     header: MainHeader,
    //     headerStyle:{backgroundColor: colors.lightgray.background}
    //   }}
    // >
    // <Drawer>
    //   <Drawer.Screen
    //     name="index"
    //     options={{
    //       drawerLabel:'Setting',
    //       title:'overview',
    //     }}
    //   />
    // <Drawer.Screen
    //  name="index2"
    //  options={{
    //   drawerLabel:"Contact Us",
    //   title: "overview",
    //  }}
    // />
    // </Drawer>
    // <Stack.Screen name="schedule" options={{header: HeaderComponent}}/>
    // <Stack.Screen name="todo" options={{header: HeaderComponent}}/>
    // {/* <Stack.Screen name="Comment" options={{header:HeaderComponent}}/> */}
    // {/* <Stack.Screen name="challenge" options={{header: HeaderComponent}}/> */}
    // </Stack>


  );
  
}
