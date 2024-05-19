import { StyleSheet, Text,View ,Image, Pressable} from "react-native";
import { Link } from "expo-router";
// import { router} from "expo-router";
import SmallButton from "@/components/SmallButton";
import { useRouter } from "expo-router";
import icon from "@/constants/Icon";
import { Drawer } from "expo-router/drawer";

export default function MainHeader()  {
    const testpress=()=>{
      console.log("hi")
    };
    const router=useRouter();
    const openDrawer=()=>{

    };
  return (
    <>
      <View style={styles.container}>
        <SmallButton href="./chat" text="Trainer" />
            <Pressable style={styles.buttonstyle} onPress={testpress}>
              <Image style={styles.button}  source={icon.listicon}/>
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