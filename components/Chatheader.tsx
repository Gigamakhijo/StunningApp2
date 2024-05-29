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
              <Pressable onPress={props.onPress} style={styles.button}>
                <Text style={styles.buttontext}>{'< Back'}</Text>
              </Pressable>
            <View style={styles.trainer}>
                <Text style={styles.trainertext}>Friday</Text>
            </View>
          </View>
         {/* // <View style={styles.whitebar}/> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    header: {
        flex: 2,
    },
      container:{
        flexDirection:"row",
        marginLeft:"5%",
        marginBottom:5,
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
        justifyContent:"center",
        marginLeft:"10%"
      },
      trainertext:{
        color:colors.white.background,
        fontSize:20,
        fontWeight:"bold",
      }
});
