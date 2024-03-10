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
import { LoginScreen } from "./app/screens/LoginScreen";
import { SignUpScreen } from "./app/screens/SignUpScreen";
import { MainScreen } from "./app/screens/MainScreen";
import { SetProfileScreen } from "./app/screens/SetProfileScreen";
import { Icon } from "./app/component/Icon";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type AppStackParamList = {
  Login: undefined
  SignUp: undefined
  SetProfile: undefined
  Tab: undefined
}

export type TabStackParamList ={
  Main: undefined
  StudyWithMeListScreen: undefined
  CameraScreen: undefined
  MyFeedScreen: undefined
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

function TabBar({state, descriptors, navigation,}){
  return(
    <View style={{flexDirection: "row", flexBasis: 60, justifyContent: "space-evenly", backgroundColor: "#FFFFFF", alignItems: "center", paddingLeft: 40, paddingRight: 40,}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, }}
          >
            <Text style={{ color: isFocused ? '#000000' : '#8C8C8C' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

function TabNavigator(){
  const insets = useSafeAreaInsets()

  return (
    <Tab.Navigator
    screenOptions={{
     headerShown: false,
    }}
      tabBar={props => <TabBar {...props} />}
      backBehavior="order"
    >
      <Tab.Screen name="Main" component={MainScreen} options={{tabBarIcon: () => <Icon icon="calendar" color={"#000000"} size={30} />, tabBarShowLabel: false}
    } />
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
