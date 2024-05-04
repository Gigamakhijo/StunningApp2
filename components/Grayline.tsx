import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import colors from "@/constants/Colors";
import spacing from "@/constants/spacing";

export default function Grayline(props: any) {
    return (
    <View style={styles.content}>
        <View style={styles.container}/>
    </View>
);
  }
const styles = StyleSheet.create({
    content:{
        justifyContent:"center",
        alignItems:"center",
    },
    container: {
        backgroundColor:colors.lightgray.background,
        borderRadius:15,
        width:120,
        height:8,
        marginTop:"5%",
    },
  });