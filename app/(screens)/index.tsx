import {
  View,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import { useState } from "react";

import SmallButton from "@/components/SmallButton";
import ScrollButton from "@/components/ScrollButton";
import SectionButton from "@/components/SectionButton";
import SwitchView from "@/components/SwitchView";
import colors from "@/constants/Colors";
import spacing from "@/constants/spacing";
import CalendarView from "@/components/CalendarView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

export default function MainScreen() {
  /* hacky way to convert to string */
  const [selected, setSelected] = useState(new Date(Date.now()) + "");

  return (
    <ScrollView style={styles.entry}>
      <SmallButton href="./chat" text="Trainer" />
      <CalendarView
        selectday={selected}
        onDayPress={(day: {dateString: string})=> setSelected(day.dateString)}
      />
      <View style={styles.content}>
        <Text style={styles.selectday}>{formatDate(new Date(selected))}</Text>

        <View style={styles.buttonRow}>
          <ScrollButton text="todo" />
          <ScrollButton text="comment" />
          <ScrollButton text="challenge" />
        </View>

        <View style={styles.section}>
          <SectionButton href="./schedule" text="Schedule +" />
        </View>

        <View style={styles.section}>
          <SectionButton href="./todo" text="Todolist +" />

          <SwitchView/>

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
    </ScrollView>
  );
}

function formatDate(d: Date) {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  return dayNames[d.getDay()] + " " + d.getDate();
}

const styles = StyleSheet.create({
  entry: {
    height: "100%",
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
  buttonRow: {
    flexDirection: "row",
    marginBottom: spacing.s,
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
