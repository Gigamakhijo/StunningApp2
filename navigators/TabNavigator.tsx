import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

import { Icon } from "../components/Icon";

import {
  MainScreen,
  CameraScreen,
  MyFeedScreen,
  StudyWithMeListScreen,
} from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export function TabNavigator() {
  const insets = useSafeAreaInsets();

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          alignSelf: "center",
          position: "absolute",
        },
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
      backBehavior="order"
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              icon="calendar"
              color={focused ? "#8C8C8C" : "#000000"}
              size={20}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              icon="camera"
              color={focused ? "#8C8C8C" : "#000000"}
              size={20}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="StudyWithMeList"
        component={StudyWithMeListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              icon="stdwmList"
              color={focused ? "#8C8C8C" : "#000000"}
              size={20}
            />
          ),
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="MyFeed"
        component={MyFeedScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              icon="myprofile"
              color={focused ? "#8C8C8C" : "#000000"}
              size={20}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}
