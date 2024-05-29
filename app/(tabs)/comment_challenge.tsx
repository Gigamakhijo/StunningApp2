import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { useState } from "react";
import CalenderView from "@/components/CalendarView";
import SmallButton from "@/components/SmallButton";
import SectionButton from "@/components/SectionButton";
import colors from "@/constants/Colors";
import spacing from "@/constants/spacing";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function CommentScreen() {
  const [date,setDate] = useState(new Date(Date.now()));

  function formatDate(d: Date) {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return dayNames[d.getDay()] + " " + d.getDate();
  }

    const trainereButtonPress = () => {
    router.replace('/(screens)/chat')
  }

  return (
    <>
      <SafeAreaView
        style={styles.container}
        edges={{ bottom: "off", top: "additive" }}
      >
        <SmallButton onPress={trainereButtonPress} text="Trainer" />
        <ScrollView>
          <CalenderView
            onDayPress={(dateData) => {
              const selectedDate = new Date(Date.parse(dateData.dateString))
              setDate(selectedDate)
            }}
          />
          <View style={styles.content}>
            <Text style={styles.selectday}>{formatDate(date)}</Text>
          </View>
          <View style={styles.section}>
            <SectionButton onPress={()=>{}} text="Comment +" />
            <TextInput
              style={styles.commentbox}
              placeholder="회고를 남겨 보세요."
              placeholderTextColor={colors.gray.background}
            ></TextInput>
          </View>

          <View style={styles.section}>
            <SectionButton onPress={()=>{}} text="Challenge +" />
          </View>
        </ScrollView>
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
