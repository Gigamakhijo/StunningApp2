import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import SmallButton from "@/components/SmallButton";
import { Ionicons } from "@expo/vector-icons";
export default function MainHeader(props: {onPress:any }) {
  const listicon = require("@/assets/images/listicon.png");


  const trainerButtonPress = () =>{
    router.replace('/(screens)/chat')
  }
  return (
    <>
      <View style={styles.container}>
        <SmallButton onPress={trainerButtonPress} text="Trainer" />
        <Ionicons name="ellipsis-vertical" size={25} color="#000000" style={{marginRight: "5%"}} onPress={props.onPress}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonstyle: {
    marginRight: "5%",
    marginTop: "10%",
  },
  button: {
    width: 35,
    height: 35,
  },
});
