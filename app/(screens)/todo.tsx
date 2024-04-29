import React, { FC, useState, useEffect } from "react"
import TextField from "@/components/TextField";
import { StyleSheet, Text,View ,Pressable} from "react-native";
import colors from "@/constants/Colors";

export default function TodoScreen() {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState(new Date(Date.now()))
  const [color, setColor]=useState("FFFFFF99")
  const [content, setContent]=useState("")

  useEffect(() => {
    setDate(date)
    setTitle(title)
    setColor(color)
    setContent(content)
    return () => {
      setDate(date)
      setTitle(title)
      setColor(color)
      setContent(content)
    }
  })
  return (
    <>
      <View style={styles.container}>
        <TextField
          value={title}
          onChangeText={(value: {value2:string})=> setTitle(value.value2)}
          placeholder="할 일 제목"
          style={styles.title}
          containerStyle={styles.titletextstyle}
          inputWrapperStyle={styles.titletext}
          textAlignVertical="center"
        />
        <View style={styles.button}>
          <Pressable>
            <Text style={styles.buttontext}>컬러</Text>
          </Pressable>
        </View>
        <Text style={styles.datestyle}>{date.toDateString()}</Text>
        <View style={styles.fullline}/>
        <TextField
          value={content}
          onChangeText={(value: {value2:string})=> setContent(value.value2)}
          placeholder="내용을 입력하세요."
          style={styles.content}
          containerStyle={styles.contentInner}
          inputWrapperStyle={styles.contentInput}
          multiline={true}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{ 
    marginLeft:"5%",
    marginTop:"5%",

    },
  title:{
    fontSize:25,
    fontWeight:"bold",
  },
  titletextstyle:{
    width:200,
    height:45,
    marginLeft:42,
  },
  titletext:{
    width:200,
    height:45,
    backgroundColor:"#FFFEFE",
    borderColor:"#FFFEFE",
  },
  button:{
    width: 65,
    height: 20,
    backgroundColor: colors.main.background,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5%",
    marginTop: "10%",
  },
  buttontext:{
    color: colors.white.background,
    fontWeight: "bold",
    fontSize: 10,
  },
  datestyle:{
    fontSize:15,
    fontWeight: "bold",
  },
  fullline:{

  },
  content:{
    fontSize:15,
  },
  contentInput:{
    width:320,
    height:400,
    backgroundColor:"#FFFEFE",
    borderColor: "#FFFEFE"
  },
  contentInner:{
    width:320,
    height:400,
    marginLeft:"5%",
  },
});
