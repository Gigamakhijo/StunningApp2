import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import colors from "@/constants/Colors";
import spacing from "@/constants/spacing";

export default function Fullline(props: any) {
    return (
    <View style={styles.container}/>
);
  }
const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.lightgray.background,
        width:391,
        height:3,
        marginTop:"5%",
        marginBottom:"10%",
    },
  });