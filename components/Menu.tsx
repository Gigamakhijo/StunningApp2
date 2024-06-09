import { Children } from "react";
import { View, Text, Pressable, Button, StyleSheet } from "react-native";
import SwitchView from "./SwitchView";
import { useAuth0 } from "react-native-auth0";
import { router } from "expo-router";
import authStore from "@/app/store/authStore";
import { useSession } from "@/app/service/ctx";

export default function Menu(props: any) {
  const { clearSession, clearCredentials } = useAuth0();
  const { LogOut } = useSession();
  const onLogout = async () => {
    try {
      await clearSession();
      await clearCredentials();
      authStore.setAccessToken(null);
      authStore.setIdToken(null);
      router.replace('/login')
    } catch (e) {
      console.log("Log out cancelled");
    }
  };

  const changeTrainerName = () => {
    router.replace("/(screens)/trainer");
  };

  return (
    <View style={styles.container}>
      <View style={styles.notificationview}>
        <Text style={styles.notification}>알림</Text>
        <SwitchView />
      </View>
      <Button title="Trainer 설정" onPress={changeTrainerName} />
      <Button title="문의하기" />
      <Button title="로그아웃 하기" onPress={()=>LogOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notificationview: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: "10%",
  },
  notification: {
    fontSize: 20,
    color: "#408DFE",
  },
});
