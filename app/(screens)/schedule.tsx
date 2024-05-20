import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { useState } from "react";
import CalenderView from "@/components/CalendarView";
import colors from "@/constants/Colors";
import SmallButton from "@/components/SmallButton";
import SectionButton from "@/components/SectionButton";

export default function ScheduleScreen() {
  const [selected, setSelected] = useState(new Date(Date.now()) + "");

  function formatDate(d: Date) {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return dayNames[d.getDay()] + " " + d.getDate();
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <SmallButton href="./chat" text="Trainer" />
        <CalenderView
          selectday={selected}
          onDayPress={(day: { dateString: string }) =>
            setSelected(day.dateString)
          }
        />
        <View style={styles.content}>
          <Text style={styles.selectday}>{formatDate(new Date(selected))}</Text>
        </View>
        <View style={styles.section}>
          <SectionButton href="./schedule" text="Schedule +" />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
  },
  content: {
    marginTop: "5%",
  },
  selectday: {
    marginLeft: "5%",
    fontSize: 25,
    fontWeight: "bold",
    color: colors.main.background,
  },
  section: {},
});
