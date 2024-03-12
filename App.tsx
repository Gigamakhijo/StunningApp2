import Ract from "react"
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { 
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams,
  CompositeScreenProps
 } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { createBottomTabNavigator, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "react-native";
import { Icon } from "./app/component/Icon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LoginScreen, SignUpScreen, SetProfileScreen, MainScreen, CameraScreen, MyFeedScreen, StudyWithMeListScreen } from './app/screens';
import { BlurView } from "expo-blur";

export type AppStackParamList = {
  Login: undefined
  SignUp: undefined
  SetProfile: undefined
  Tab: undefined
}

export type TabStackParamList ={
  Main: undefined
  StudyWithMeList: undefined
  Camera: undefined
  MyFeed: undefined
}

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, T>

export type TabStackScreenProps<T extends keyof TabStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabStackParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Stack = createNativeStackNavigator<AppStackParamList>()
const Tab = createBottomTabNavigator<TabStackParamList>()
function AppStack() {
  // const {
  //   authenticationStore: { isAuthenticated },
  // }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
      initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SetProfile" component={SetProfileScreen} />
        <Stack.Screen name="Tab" component={TabNavigator} />
      </Stack.Navigator>
  )
}

function TabNavigator(){
  const insets = useSafeAreaInsets()

  return (
    <Tab.Navigator
    screenOptions={{
     headerShown: false,
     tabBarStyle: {justifyContent: "space-evenly", alignItems: "center", backgroundColor: "#FFFFFF", alignSelf: "center", position: "absolute"},
     tabBarBackground: () => (
      <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
     )
    }}
    
      backBehavior="order"
    >
      <Tab.Screen name="Main" component={MainScreen} options={{tabBarIcon: ({focused}) => <Icon icon="calendar" color={focused ? "#8C8C8C" : "#000000"} size={20} />, tabBarShowLabel: false}
    } />
        <Tab.Screen name="Camera" component={CameraScreen} options={{tabBarIcon: ({focused}) => <Icon icon="camera" color={ focused ? "#8C8C8C" : "#000000"} size={20} />, tabBarShowLabel: false}
    }/>
        <Tab.Screen name="StudyWithMeList" component={StudyWithMeListScreen} options={{tabBarIcon: ({focused}) => <Icon icon="stdwmList" color={focused ? "#8C8C8C" : "#000000"} size={20} />, tabBarShowLabel: false}
    }/>

      <Tab.Screen name="MyFeed" component={MyFeedScreen}  options={{tabBarIcon: ({focused}) => <Icon icon="myprofile" color={focused ? "#8C8C8C" : "#000000"} size={20} />, tabBarShowLabel: false}
    }/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer    >
      <AppStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: "row-reverse",
    // paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "",
    flex: 1,
  },
  icongroup: {
    flexDirection: "row",
  }
});
