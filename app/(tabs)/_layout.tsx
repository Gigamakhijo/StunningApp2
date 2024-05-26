import { useRouter, Stack } from "expo-router";
import {View, StyleSheet} from "react-native";
import colors from "@/constants/Colors";
import Chatheader from "@/components/Chatheader";
export default function Layout() {
    return(
        <Stack>
          <Stack.Screen name="chat" options={{ headerShown:true, headerTitle:"",header:Chatheader, headerBackground:() => <View style={styles.chatheader}/>}}/>
        </Stack>
    )
    
    
}
const styles = StyleSheet.create({
    chatheader: {
        flex: 1,
        backgroundColor: "#98CEFF",
      },
})