import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";

import colors from "@/constants/Colors";

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
export interface CalendarViewProps {
  onDayPress: (date: DateData) => void;
}
export default function CalenderView(props: CalendarViewProps) {
  const [selected, setSelected] = useState("");

  return (
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
        props.onDayPress(day);
      }}
      markedDates={{
        [selected]: { selected: true, disableTouchEvent: true },
      }}
      monthFormat="MMMM"
      hideArrows={true}
      enableSwipeMonths={true}
    />
  );
}
const styles = StyleSheet.create({
  calendar: {
    marginHorizontal: "5%",
  },
});
