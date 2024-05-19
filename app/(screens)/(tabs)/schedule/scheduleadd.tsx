import React, { FC, useState, useEffect } from "react"
// import TextField from "@/components/TextField";
import { TextInput, StyleSheet, Text,View ,Pressable, ScrollView} from "react-native";
import colors from "@/constants/Colors";
import Fullline from "@/components/Fullline";
import Datetimepickermodal from "react-native-modal-datetime-picker";

export default function ScheduleScreen() {
  const [title, setTitle] = useState("")
  const [firstdate, setfirstDate] = useState(new Date(Date.now()))
  const [color, setColor]=useState("FFFFFF99")
  const [content, setContent]=useState("")
  const [date, setDate] = useState(new Date(Date.now()))
  const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const formattedDate = `${firstdate.getFullYear()}년 ${months[firstdate.getMonth()]} ${firstdate.getDate()}일 (${days[firstdate.getDay()]})`;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
};

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
};

  const handleConfirm = (selectedDate) => {
    setDate(selectedDate);
    hideDatePicker();
};
  const [open,setOpen]=useState(false);

  useEffect(() => {
    setDate(date)
    setfirstDate(firstdate)
    setTitle(title)
    setColor(color)
    setContent(content)
    return () => {
      setDate(date)
      setfirstDate(firstdate)
      setTitle(title)
      setColor(color)
      setContent(content)
    }
  })
  return (
    <>
      <ScrollView style={styles.container}>
        <TextInput
          value={title}
          onChangeText={(value:string)=> setTitle(value)}
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
        <Text style={styles.datestyle}>
          {` ${date.getMonth() + 1}월 ${date.getDate()}일 ${days[date.getDay()]}요일`}</Text>
          {/* ${date.getFullYear()}년 */}
        <Text style={styles.datestyle}>~</Text>
        <Pressable style={styles.titlestyle}onPress={showDatePicker}>
          <Text style={styles.titletext} >{` ${date.getMonth() + 1}월 ${date.getDate()}일 ${days[date.getDay()]}요일`}</Text>
        </Pressable>
        <Datetimepickermodal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
        />
        </View>
        <Fullline/>
        <TextInput
          value={content}
          onChangeText={(value:string)=> setContent(value)}
          placeholder="내용을 입력하세요."
          style={styles.content}
          multiline={true}
          placeholderTextColor={"black"}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container:{ 
    flex:1,
    backgroundColor:colors.white.background,
    },
  title:{
    fontSize:33,
    fontWeight:"bold",
    color:colors.main.background,
    marginLeft:"10%",
    marginRight:"10%",
  },
  button:{
    width: 65,
    height: 20,
    backgroundColor: colors.main.background,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft:"10%",
    marginTop:"5%",
  },
  buttontext:{
    color: colors.white.background,
    fontWeight: "bold",
    fontSize: 10,
  },
  datestyle:{
    fontSize:15,
    fontWeight: "bold",
    color: colors.main.background,
    marginTop:"5%",
    marginLeft:"10%",
  },
  content:{
    fontSize:15,
    marginLeft:"10%",
    marginRight:"10%",
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
