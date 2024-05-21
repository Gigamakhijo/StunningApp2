import { StyleSheet, Text, View } from "react-native";
import CloseButton from "@/components/CloseButton";
import CheckButtion from "@/components/CheckButton";
import { Link, useRouter } from "expo-router";
import colors from "@/constants/Colors";
import Grayline from "@/components/Grayline";
// import { router} from "expo-router";
export default function HeaderComponent(props: any) {
  const router = useRouter();
  return (
    <>
      <View style={styles.content}>
        <Grayline />
        <View style={styles.container}>
          <CloseButton onPress={() => router.back()} />
          <CheckButtion onPress={() => router.push("/(screens)/")} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
