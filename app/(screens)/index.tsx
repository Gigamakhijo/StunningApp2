import {
  View,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { useAuth0 } from "react-native-auth0";

import SmallButton from "@/components/SmallButton";
import ScrollButton from "@/components/ScrollButton";
import SectionButton from "@/components/SectionButton";
import SwitchView from "@/components/SwitchView";
import colors from "@/constants/Colors";
import spacing from "@/constants/spacing";
import CalendarView from "@/components/CalendarView";

export default function MainScreen() {
  /* hacky way to convert to string */
  const [selected, setSelected] = useState(new Date(Date.now()) + "");

  const { clearSession } = useAuth0();

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log("Log out cancelled");
    }
  };

  return (
    <ScrollView style={styles.entry}>
      <SafeAreaView>
        <SmallButton href="./chat" text="Trainer" />
        <CalendarView
          selectday={selected}
          onDayPress={(day: { dateString: string }) =>
            setSelected(day.dateString)
          }
        />
        <View style={styles.content}>
          <Text style={styles.selectday}>{formatDate(new Date(selected))}</Text>
          <View style={styles.section}>
            <SectionButton href="./todo" text="Todolist +" />

            <SwitchView />
          </View>

          <View style={styles.section}>
            <SectionButton href="./comment" text="Comment +" />
            <TextInput
              style={styles.commentbox}
              placeholder="회고를 남겨 보세요."
              placeholderTextColor={colors.gray.background}
            />
          </View>

          <View style={styles.section}>
            <SectionButton href="./schedule" text="Challenge +" />
          </View>
        </View>
        <Button title="logout" onPress={onLogout} />
      </SafeAreaView>
    </ScrollView>
  );
}

function formatDate(d: Date) {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  return dayNames[d.getDay()] + " " + d.getDate();
}

const styles = StyleSheet.create({
  entry: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
  content: {
    flex: 2,
    marginTop: "5%",
  },
  selectday: {
    marginLeft: "5%",
    fontSize: 25,
    fontWeight: "bold",
    color: colors.main.background,
  },
  section: {
    flex: 1,
  },
  commentbox: {
    height: 135,
    width: 320,
    backgroundColor: colors.white.background,
    borderRadius: 15,
    borderColor: colors.main.background,
    borderWidth: 1.5,
    justifyContent: "center",
    textAlign: "center",
    marginTop: spacing.s,
    marginLeft: "7%",
    fontSize: 15,
    fontWeight: "normal",
    color: "black",
  },
});
