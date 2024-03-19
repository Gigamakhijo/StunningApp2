import { View, FlatList, ScrollView, StyleSheet, Text } from "react-native";
import { useState } from "react";

import SmallButton from "@/components/SmallButton";
import ScrollButton from "@/components/ScrollButton";
import { Calendar } from "react-native-calendars";
import SectionButton from "@/components/SectionButton";

export default function MainScreen() {
  /* hacky way to convert to string */
  const [selected, setSelected] = useState(new Date(Date.now()) + "");

  return (
    <ScrollView>
      <SmallButton href="./chat" text="trainer" />

      <Calendar
        style={styles.calendar}
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true },
        }}
        enableSwipeMonths={true}
      />

      <Text>{formatDate(new Date(selected))}</Text>

      <View style={styles.buttonRow}>
        <ScrollButton text="todo" />
        <ScrollButton text="comment" />
        <ScrollButton text="challenge" />
      </View>

      <SectionButton href="./schedule" text="Schedule +" />

      <SectionButton href="./todo" text="Todolist +" />

      <SectionButton href="./comment" text="Comment +" />

      <SectionButton href="./schedule" text="Challenge +" />
    </ScrollView>
  );
}

function formatDate(d: Date) {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  return dayNames[d.getDay()] + " " + d.getDate();
}

const styles = StyleSheet.create({
  calendar: {},
  buttonRow: { flexDirection: "row" },
});
