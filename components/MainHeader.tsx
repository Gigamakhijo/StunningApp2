import { StyleSheet, Text,View ,Image, Pressable} from "react-native";
import { Link } from "expo-router";
// import { router} from "expo-router";
import SmallButton from "@/components/SmallButton";

export default function HeaderComponent(props: any)  {
    const listicon=require('@/assets/images/listicon.png')
  return (
    <>
      <View style={styles.container}>
        <SmallButton href="./chat" text="Trainer" />
            <Pressable style={styles.buttonstyle} onPress={props.onPress}>
            <Image style={styles.button}  source={listicon}/>
            </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
},
buttonstyle:{
    marginRight: "5%",
    marginTop: "10%",
},
    button:{
        width: 35,
        height: 35,
    },
});