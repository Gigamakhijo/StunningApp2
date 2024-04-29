import { StyleSheet, Text,View } from "react-native";
import CloseButton from "@/components/CloseButton";
import CheckButtion from "@/components/CheckButton";
import { Link } from "expo-router";
import colors from "@/constants/Colors";
// import { router} from "expo-router";

export default function HeaderComponent(props: any)  {
  return (
    <>
      <View style={styles.container}>
        {/* <View style={styles.linestyle}>
          <View style={styles.line}/>
        </View> */}
          <CloseButton/>
          <CheckButtion onPress={{}} />
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
  linestyle:{
    alignItems:"center",
    justifyContent:"center",
  },
  line:{
    width:130,
    height:11,
    // backgroundColor:colors.lightgray.background,
    backgroundColor:"Red",
    borderRadius:15,
    marginTop:5,
  },
});