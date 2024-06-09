import React, { useState, useEffect } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import colors from "@/constants/Colors";
import Fullline from "@/components/Fullline";
import { SafeAreaView } from "react-native-safe-area-context";
import CheckButton from "@/components/CheckButton";
import CloseButton from "@/components/CloseButton";
import { router } from "expo-router";
import Datetimepickermodal from "react-native-modal-datetime-picker";

export default function ScheduleScreen() {
  const [title, setTitle] = useState("");
  const [firstdate, firstsetDate] = useState(new Date(Date.now()));
  const [seconddate, secondsetDate] = useState(new Date(Date.now()));
  const [color, setColor] = useState("FFFFFF99");
  const [content, setContent] = useState("");

  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [secondisDatePickerVisible, secondsetDatePickerVisibility] = useState(false);
  const backButton = () => {
    router.replace("/(tabs)/schedule");
  };
  const confirmButton = () => {
    router.replace("/(tabs)/schedule");
  };
  const firstshowDatePicker = () => {
    setDatePickerVisibility(true);
};

  const firsthideDatePicker = () => {
    setDatePickerVisibility(false);
};

  const firsthandleConfirm = (selectedDate:any) => {
    firstsetDate(selectedDate);
    firsthideDatePicker();
};
const secondshowDatePicker = () => {
  secondsetDatePickerVisibility(true);
};

const secondhideDatePicker = () => {
  secondsetDatePickerVisibility(false);
};

const secondhandleConfirm = (selectedDate:any) => {
  secondsetDate(selectedDate);
  secondhideDatePicker();
};
  
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.buttonstyle}>
            <CloseButton onPress={backButton}  />
            <CheckButton onPress={confirmButton} />
          </View>
          <TextInput
            value={title}
            onChangeText={(value: string) => setTitle(value)}
            placeholder="할 일 제목"
            style={styles.title}
            textAlignVertical="center"
            placeholderTextColor={colors.main.background}
            maxLength={30}
          />
          <View style={styles.button}>
            <Pressable>
              <Text style={styles.buttontext}>컬러</Text>
            </Pressable>
          </View>
          <View style={styles.datetext}>
          <Pressable style={styles.datestyle}onPress={firstshowDatePicker}>
            <Text style={styles.titletext} >{` ${firstdate.getMonth() + 1}월 ${firstdate.getDate()}일 ${days[firstdate.getDay()]}요일`}</Text>
          </Pressable>
          <Datetimepickermodal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={firsthandleConfirm}
                  onCancel={firsthideDatePicker}
          />
          <Text style={styles.datestyle}>~</Text>
          <Pressable style={styles.titlestyle}onPress={secondshowDatePicker}>
            <Text style={styles.titletext} >{` ${seconddate.getMonth() + 1}월 ${seconddate.getDate()}일 ${days[seconddate.getDay()]}요일`}</Text>
          </Pressable>
          <Datetimepickermodal
                  isVisible={secondisDatePickerVisible}
                  mode="date"
                  onConfirm={secondhandleConfirm}
                  onCancel={secondhideDatePicker}
          />
        </View>
          <Fullline />
          <TextInput
            value={content}
            onChangeText={(value: string) => setContent(value)}
            placeholder="내용을 입력하세요."
            style={styles.content}
            multiline={true}
            placeholderTextColor={"black"}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white.background,
  },
  title: {
    fontSize: 33,
    fontWeight: "bold",
    color: colors.main.background,
    marginLeft: "10%",
    marginRight: "10%",
},
buttonstyle:{
  flexDirection:"row",
  justifyContent:"space-between",
},
  button: {
    width: 65,
    height: 20,
    backgroundColor: colors.main.background,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10%",
    marginTop: "5%",
  },
  buttontext: {
    color: colors.white.background,
    fontWeight: "bold",
    fontSize: 10,
  },
  datestyle: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.main.background,
    marginTop: "5%",
    marginLeft: "10%",
  },
  content: {
    fontSize: 15,
    marginLeft: "10%",
    marginRight: "10%",
  },
  datetext:{
    flexDirection:"row",
  },
  titlestyle:{
    alignSelf:"flex-start",
    marginTop:"5%",
    marginLeft:"5%",
 },
 titletext:{
     fontSize: 15,
     fontWeight: "bold",
     color: colors.main.background,
     marginLeft:"5%",
     
 },
});
