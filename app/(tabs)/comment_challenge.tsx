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
import { Drawer } from "react-native-drawer-layout";
import Menu from "@/components/Menu";
import MainHeader from "@/components/MainHeader";
import { AnimatedCircularProgress } from "react-native-circular-progress";
export default function CommentScreen() {
  const diary = require("@/assets/images/diary.png");
  const exercise = require("@/assets/images/exercise.png");
  const meditation = require("@/assets/images/meditation.png");
  const water = require("@/assets/images/water.png");
  const news = require("@/assets/images/news.png");
  const [date, setDate] = useState(new Date(Date.now()));
  const [open, setOpen] = useState(false);
  const [p1, setp1] = useState(70);
  const [p2, setp2] = useState(30);
  const [p3, setp3] = useState(50);
  const [p4, setp4] = useState(90);
  const [p5, setp5] = useState(100);
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
        <Drawer
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          renderDrawerContent={() => {
            return <Menu />;
          }}
          drawerPosition="right"
          drawerType="front"
          drawerStyle={{ width: 300 }}
        >
          <MainHeader onPress={() => setOpen(true)} />
          <KeyboardAvoidingView
            style={styles.keyboardAvoid}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <ScrollView>
              <CalenderView
                onDayPress={(dateData) => {
                  const selectedDate = new Date(
                    Date.parse(dateData.dateString),
                  );
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
              <SectionButton onPress={null} text="Challenge" />
              <View style={styles.challenge}>
                {/* 1 */}
                <View style={styles.row}>
                  <AnimatedCircularProgress
                    size={47}
                    width={9}
                    fill={p1} //진행률
                    tintColor="#78AFFF99"
                    backgroundColor="white"
                  >
                    {() => (
                      <Text style={styles.circleText}>{p1.toFixed(0)}%</Text>
                    )}
                  </AnimatedCircularProgress>
                  <Text style={styles.textstyle}> 물 1리터 마시기</Text>
                  <Image source={water} style={styles.icon} />
                  <SwitchView />
                </View>
                <View style={styles.row}>
                  <AnimatedCircularProgress
                    size={47}
                    width={9}
                    fill={p2} //진행률
                    tintColor="#78AFFF99"
                    backgroundColor="white"
                  >
                    {() => (
                      <Text style={styles.circleText}>{p2.toFixed(0)}%</Text>
                    )}
                  </AnimatedCircularProgress>
                  <Text style={styles.textstyle}> 아침 명상 5분</Text>
                  <Image source={meditation} style={styles.icon} />
                  <SwitchView />
                </View>
                <View style={styles.row}>
                  <AnimatedCircularProgress
                    size={47}
                    width={9}
                    fill={p3} //진행률
                    tintColor="#78AFFF99"
                    backgroundColor="white"
                  >
                    {() => (
                      <Text style={styles.circleText}>{p3.toFixed(0)}%</Text>
                    )}
                  </AnimatedCircularProgress>
                  <Text style={styles.textstyle}> 뉴스레터 보기 </Text>
                  <Image source={news} style={styles.icon} />
                  <SwitchView />
                </View>
                <View style={styles.row2}>
                  <AnimatedCircularProgress
                    size={47}
                    width={9}
                    fill={p4} //진행률
                    tintColor="#78AFFF99"
                    backgroundColor="white"
                  >
                    {() => (
                      <Text style={styles.circleText}>{p4.toFixed(0)}%</Text>
                    )}
                  </AnimatedCircularProgress>
                  <Text style={styles.textstyle}>일기쓰기</Text>
                  <Image source={diary} style={styles.icon} />
                  <SwitchView />
                </View>
                <View style={styles.row2}>
                  <AnimatedCircularProgress
                    size={47}
                    width={9}
                    fill={p5} //진행률
                    tintColor="#78AFFF99"
                    backgroundColor="white"
                  >
                    {() => (
                      <Text style={styles.circleText}>{p5.toFixed(0)}%</Text>
                    )}
                  </AnimatedCircularProgress>
                  <Text style={styles.textstyle}>운동하기</Text>
                  <Image source={exercise} style={styles.icon} />
                  <SwitchView />
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </Drawer>
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
    fontSize: 8,
    fontWeight: "800",
    color: "white",
    marginLeft: "8%",
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
  circleText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
  },
});
