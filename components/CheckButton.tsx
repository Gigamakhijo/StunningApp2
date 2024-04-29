import { View, Text, Pressable ,Image} from "react-native";
import { StyleSheet } from "react-native";

import { Link } from "expo-router";

export default function LoginButton(props: any) {
    const checkicon=require('@/assets/images/checkicon.png')
  return (
    <View style={styles.container}>
      <Link href="/" asChild>
        <Pressable onPress={props.onPress}>
          <Image style={styles.button}  source={checkicon}/>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:"5%",
    marginRight:"5%",
  },
  button: {
    width: 35,
    height: 35,
  },
});
