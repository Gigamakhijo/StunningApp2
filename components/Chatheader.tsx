import { StyleSheet, Text, View,Pressable, } from "react-native";
import colors from "@/constants/Colors";
import { router } from "expo-router";

export default function Chatheader(props: {onPress: any}) {

  const goback = () => {
    router.back;
  }
  return (
    <>
      <View style={styles.header}>
          <View style={styles.container}>
              <Pressable onPress={goback} style={styles.button}>
                <Text style={styles.buttontext}>{'< Back'}</Text>
              </Pressable>
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
        // flex: 1,
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
