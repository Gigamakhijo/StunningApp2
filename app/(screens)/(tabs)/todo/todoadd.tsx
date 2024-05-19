import React, { FC, useState, useEffect } from "react"
// import TextField from "@/components/TextField";
import { TextInput, StyleSheet, Text,View ,Pressable, ScrollView} from "react-native";
import colors from "@/constants/Colors";
import Fullline from "@/components/Fullline";
import Datetimepickermodal from "react-native-modal-datetime-picker";
export default function TodoScreen() {
  const [title, setTitle] = useState("")
  const [firstdate,Setfirstdate] = useState(new Date(Date.now()))
  const [date, setDate] = useState(new Date(Date.now()))
  const [content, setContent]=useState("")

  const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  const formattedDate = `${date.getFullYear()}년 ${months[date.getMonth()]} ${date.getDate()}일 (${days[date.getDay()]})`;
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
    Setfirstdate(date)
    setTitle(title)
    setContent(content)
    return () => {
      Setfirstdate(date)
      setTitle(title)
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
        <View style={styles.datetext}>
        <Text style={styles.datestyle}>
          {` ${firstdate.getMonth() + 1}월 ${firstdate.getDate()}일 ${days[firstdate.getDay()]}요일`}</Text>
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
  datetext:{
    flexDirection:"row",
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
