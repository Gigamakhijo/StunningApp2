import { View, Text, Pressable ,Image} from "react-native";
import { StyleSheet } from "react-native";

import { Link } from "expo-router";

export default function LoginButton(props: any) {
    const closeicon=require('@/assets/images/x.png')
  return (
    <View style={styles.container}>
        <Pressable onPress={props.onPress}>
          <Image style={styles.button}  source={closeicon}/>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:"5%",
    marginLeft:"5%",
    marginBottom:"5%",
  },
  button: {
    width: 30,
    height: 30,
  },
});
