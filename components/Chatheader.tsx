import { StyleSheet, Text, View,Pressable, } from "react-native";
import { useRouter } from "expo-router";
import colors from "@/constants/Colors";

export default function Chatheader(props: any) {
  const router = useRouter();
  return (
    <>
      <View style={styles.header}>
          <View style={styles.container}>
            <View style={styles.button} >
                <Pressable onPress={() => router.back()}>
                <Text style={styles.buttontext}>{'< Back'}</Text>
                </Pressable>
            </View>
            <View style={styles.trainer}>
                <Text style={styles.trainertext}>Friday</Text>
            </View>
          </View>
            <View style={styles.whitebar}/>
          </View>
    </>
  );
}

const styles = StyleSheet.create({
    header: {
        height:120,
        backgroundColor:"#98CEFF",
        position:"absolute",
        top:0,
        left:0,
        right:0,
        flexDirection:"column"
      },
      container:{
        flexDirection:"row",
        marginTop:"15%",
        marginLeft:"5%",
        marginBottom:5,
        // marginRight:"5%",
      },
      button:{
        flex:1,
        // height:30,
        // justifyContent:"center",
        //marginTop:"10%",
      },
      buttontext: {
        color: colors.white.background,
        fontSize: 18,
        fontWeight: "normal",
      },
      trainer:{
        flex:2,
        // height:30,
        // alignItems:"center",
        justifyContent:"center",
        marginLeft:"10%"
      },
      trainertext:{
        color:colors.white.background,
        fontSize:20,
        fontWeight:"bold",
      },
      whitebar:{
        height:50,
        borderTopLeftRadius:100,
        borderTopRightRadius:100,
        backgroundColor:colors.white.background,
      },
});
