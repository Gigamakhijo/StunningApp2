import {
  View,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";
import { useAuth0 } from "react-native-auth0";

import SmallButton from "@/components/SmallButton";
import ScrollButton from "@/components/ScrollButton";
import { Calendar, LocaleConfig } from "react-native-calendars";
import SectionButton from "@/components/SectionButton";
import colors from "@/constants/Colors";
import spacing from "@/constants/spacing";

LocaleConfig.locales.en = {
  formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"],
  // numbers: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'] // number localization example
};
LocaleConfig.defaultLocale = "en";

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
      <SmallButton href="./chat" text="Trainer" />
      <Calendar
        style={styles.calendar}
        theme={{
          textDayFontWeight: "bold", // 일 글자굵기
          textMonthFontWeight: "bold", // 월 글자굵기
          textDayHeaderFontWeight: "bold", // 요일 글자굵기
          calendarBackground: "#F7F9FC", // 캘린더 배경색상
          textSectionTitleColor: "black", // 요일 글자색상
          textDayFontSize: 19, // day 글자크기 19
          textMonthFontSize: 23, // month 글자크기 23
          textDayHeaderFontSize: 19, // 요일 글자크기 19
          selectedDayBackgroundColor: colors.main.background, // 일 선택시 나오는 동그라미 색상
          selectedDayTextColor: colors.white.background, // 일 선택시 나오는 동그라미안 글자 색상
          todayTextColor: colors.main.background, // 오늘 날짜 색상
          dayTextColor: "#2d4150", // 일 날짜 색상
          textDisabledColor: colors.gray.background, // 다른달 일 나오는 부분 색깔
          dotColor: "#deabb2",
        }}
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true },
        }}
        monthFormat="MMMM"
        hideArrows={true}
        enableSwipeMonths={true}
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
        </View>

        <View style={styles.section}>
          <SectionButton href="./comment" text="Comment +" />
          <TextInput
            style={styles.commenttext}
            placeholder="회고를 남겨 보세요."
            placeholderTextColor={colors.gray.background}
          ></TextInput>
        </View>

        <View style={styles.section}>
          <SectionButton href="./schedule" text="Challenge +" />
        </View>
      </View>
      <Button title="logout" onPress={onLogout} />
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
  calendar: {
    flex: 1,
    marginHorizontal: "5%",
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
  commenttext: {
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
