import React, { FC, useState, useEffect } from "react";
// import TextField from "@/components/TextField";
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
export default function TodoScreen() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date(Date.now()));
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

  const formattedDate = `${date.getFullYear()}년 ${months[date.getMonth()]} ${date.getDate()}일 (${days[date.getDay()]})`;

  useEffect(() => {
    setDate(date);
    setTitle(title);
    setContent(content);
    return () => {
      setDate(date);
      setTitle(title);
      setContent(content);
    };
  });
  return (
    <>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <TextInput
          value={title}
          onChangeText={(value: string) => setTitle(value)}
          placeholder="할 일 제목"
          style={styles.title}
          textAlignVertical="center"
          placeholderTextColor={colors.main.background}
          maxLength={30}
        />
        <Text style={styles.datestyle}>
          {` ${date.getMonth() + 1}월 ${date.getDate()}일 ${days[date.getDay()]}요일`}
        </Text>
        {/* ${date.getFullYear()}년 */}
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
});
