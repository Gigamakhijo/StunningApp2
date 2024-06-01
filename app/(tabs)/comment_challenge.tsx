import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import CalenderView from "@/components/CalendarView";
import SmallButton from "@/components/SmallButton";
import SectionButton from "@/components/SectionButton";
import colors from "@/constants/Colors";
import spacing from "@/constants/spacing";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import SwitchView from "@/components/SwitchView";
// import ProgressCircle from "react-native-progress-circle";
export default function CommentScreen() {
  const diary = require("@/assets/images/diary.png");
  const exercise = require("@/assets/images/exercise.png");
  const meditation = require("@/assets/images/meditation.png");
  const water = require("@/assets/images/water.png");
  const news = require("@/assets/images/news.png");
  const [date, setDate] = useState(new Date(Date.now()));

  function formatDate(d: Date) {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return dayNames[d.getDay()] + " " + d.getDate();
  }

  const trainereButtonPress = () => {
    router.replace("/(screens)/chat");
  };

  return (
    <>
      <SafeAreaView
        style={styles.container}
        edges={{ bottom: "off", top: "additive" }}
      >
        <KeyboardAvoidingView
          style={styles.keyboardAvoid}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <SmallButton onPress={trainereButtonPress} text="Trainer" />
          <ScrollView>
            <CalenderView
              onDayPress={(dateData) => {
                const selectedDate = new Date(Date.parse(dateData.dateString));
                setDate(selectedDate);
              }}
            />
            <View style={styles.content}>
              <Text style={styles.selectday}>{formatDate(date)}</Text>
            </View>
            <View style={styles.section}>
              <SectionButton onPress={() => {}} text="Comment +" />
              <TextInput
                style={styles.commentbox}
                placeholder="회고를 남겨 보세요."
                placeholderTextColor={colors.gray.background}
              />
            </View>
            <SectionButton onPress={() => {}} text="Challenge" />
            <View style={styles.challenge}>
              {/* 1 */}
              <View style={styles.row}>
                {/* <ProgressCircle
                  percent={70}
                  radius={25}
                  borderWidth={10}
                  color="#78AFFF99"
                  shadowColor="white"
                  bgColor="#408DFE" // 원안쪽컬러
                >
                  <Text style={styles.circletext}>70%</Text>
                </ProgressCircle> */}
                <Text style={styles.textstyle}> 물 1리터 마시기</Text>
                <Image source={water} style={styles.icon} />
                <SwitchView />
              </View>
              {/* 2 */}
              <View style={styles.row}>
                {/* <ProgressCircle
                  percent={50}
                  radius={25}
                  borderWidth={10}
                  color="#78AFFF99"
                  shadowColor="white"
                  bgColor="#408DFE" // 원안쪽컬러
                >
                  <Text style={styles.circletext}>50%</Text>
                </ProgressCircle> */}
                <Text style={styles.textstyle}> 아침 명상 5분</Text>
                <Image source={meditation} style={styles.icon} />
                <SwitchView />
              </View>
              {/* 3 */}
              <View style={styles.row}>
                {/* <ProgressCircle
                  percent={100}
                  radius={25}
                  borderWidth={10}
                  color="#78AFFF99"
                  shadowColor="white"
                  bgColor="#408DFE" // 원안쪽컬러
                >
                  <Text style={styles.circletext}>100%</Text>
                </ProgressCircle> */}
                <Text style={styles.textstyle}> 뉴스레터 보기 </Text>
                <Image source={news} style={styles.icon} />
                <SwitchView />
              </View>
              {/* 4 */}
              <View style={styles.row2}>
                {/* <ProgressCircle
                  percent={30}
                  radius={25}
                  borderWidth={10}
                  color="#78AFFF99"
                  shadowColor="white"
                  bgColor="#408DFE" // 원안쪽컬러
                >
                  <Text style={styles.circletext}>30%</Text>
                </ProgressCircle> */}
                <Text style={styles.textstyle}>일기쓰기</Text>
                <Image source={diary} style={styles.icon} />
                <SwitchView />
              </View>
              {/* 5 */}
              <View style={styles.row2}>
                {/* <ProgressCircle
                  percent={50}
                  radius={25}
                  borderWidth={10}
                  color="#78AFFF99"
                  shadowColor="white"
                  bgColor="#408DFE" // 원안쪽컬러
                >
                  <Text style={styles.circletext}>50%</Text>
                </ProgressCircle> */}
                <Text style={styles.textstyle}>운동하기</Text>
                <Image source={exercise} style={styles.icon} />
                <SwitchView />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
  },
  keyboardAvoid: {
    flex: 1,
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
  challenge: {
    justifyContent: "center",
    alignItems: "center",
  },
  circletext: {
    fontSize: 11,
    fontWeight: "bold",
    color: "white",
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
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    height: 80,
    width: 320,
    marginTop: "5%",
    borderRadius: spacing.m,
    backgroundColor: colors.sub1.background,
    paddingHorizontal: "10%",
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    height: 80,
    width: 320,
    marginTop: "5%",
    borderRadius: spacing.m,
    backgroundColor: colors.sub1.background,
    paddingHorizontal: "7%",
  },
  textstyle: {
    color: colors.white.background,
    fontSize: 18,
    fontWeight: "normal",
    marginLeft: "10%",
    marginRight: 15,
  },
  icon: {
    height: 35,
    width: 35,
    marginLeft: 15,
  },
});
