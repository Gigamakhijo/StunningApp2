import { StyleSheet, Text, Pressable,View,Image ,TextInput} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { useState, useCallback, useEffect } from "react";
import {Bubble, GiftedChat, IMessage, InputToolbar} from 'react-native-gifted-chat';
import colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ChatScreen() {
  const [messages, setMessages] =useState<IMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [showCancelButtons, setShowCancelButtons] = useState(false);
  const router=useRouter();
  const sendbutton = require("@/assets/images/sendbutton.png");
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text:"무엇을도와드릴까요?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ]);
  }, []);
  const onSend=useCallback((messages: IMessage[] = [])=>{
    setMessages(previousMessages=>
      GiftedChat.append(previousMessages,messages)
    );
    const lastMessage = messages[messages.length - 1];
    // Check if the last message sent was the trigger for showing cancel buttons
    if (lastMessage.text === "Trigger") {
      setShowCancelButtons(true);
    } else {
      setShowCancelButtons(false);
    }
  },[])
  const onCancelButtonPress = () => {
    // Handle cancel button press
    console.log("Cancel button pressed");
    // Hide cancel buttons after cancel button press
    setShowCancelButtons(false);
  };
  const renderInputToolbar = (props: any) => {
    return (
      <View style={styles.inputToolbar}>
        {showCancelButtons && (
          <View style={styles.ButtonsContainer}>
            <TouchableOpacity
              style={styles.cancelbutton}
              onPress={onCancelButtonPress}
            >
              <Text style={styles.buttonText}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.checkbutton}
              onPress={onCancelButtonPress}
            >
              <Text style={styles.buttonText}>확인</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.field}>
        <View style={styles.inputstyle}>
        <TextInput
          {...props}
          value={inputText}
          onChangeText={setInputText}
          multiline={false} // 한 줄만 입력할 수 있도록 설정
          placeholder="메시지를 입력하세요."
          placeholderTextColor="#A8A8A8"
        />
      </View>
        <TouchableOpacity 
        style={styles.sendbuttoncontainer}
        onPress={()=>{
        // props.onSend({text: props.text}, true);
        onSend([{
          _id: Math.random().toString(),
          text: inputText,
          createdAt: new Date(),
          user: {
            _id: 1,
          },
        }]);
        setInputText(""); // 메시지를 전송한 후에 입력된 텍스트를 초기화
      }}>
          <Image source={sendbutton} style={styles.sendbutton}/>
      </TouchableOpacity>
      </View>
      </View>
    );
  };

  const renderBubble = (props:any) => {
    return(
      <Bubble
        {...props}
        wrapperStyle={{
          left:{
            backgroundColor:"#F2F2F2",
            borderBottomLeftRadius:0,
            marginLeft:"5%"
          },
          right:{
            backgroundColor:"#98CEFF",
            borderColor:"#408DFE",
            borderWidth:1,
            borderBottomRightRadius:0,
            marginRight:"5%"
          }
        }}
        textStyle={{
          left:{
            fontSize:15,
          },
          right:{
            color:"white",
            fontSize:15,
          }
        }}
      />
    )
  };

  return (
    <>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container} >
        <GiftedChat
          alwaysShowSend={true} // 입력란 비어있는경우에도 전송버튼 항상 표시할건지
          showUserAvatar={false} // 각 메시지 옆에 아바타 표시할건지
          renderUsernameOnMessage={false} // 각메시지 위에 사용자 이름 표시여부
          renderAvatar={null} // 아바타 렌더링 함수 제공-> 아바타 모양, 동작 완전 제어가능
          messages={messages} // 현재 채팅 메시지 배열
          isTyping={true} // 현재 사용자가 타이핑 중인지 여부
          // 메시지 전송될때 호출되는 콜백 함수
          onSend={(messages: IMessage[]) => onSend(messages)}
          user={{ // 현재 사용자 정보
            _id:1,
          }}
          renderBubble={renderBubble} // 채팅 스타일
          // renderComposer={renderComposer} // textinput style
          // loadEarlier={true} // 이전 메시지 불러오는 옵션 표시여부
          // renderSend={renderSend} // 보내기 버튼 style
          renderInputToolbar={renderInputToolbar}
        />
      </SafeAreaView>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.white.background,
  },
  sendbuttoncontainer:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:10,
    marginRight:15,
  },
  sendbutton:{
    height:32,
    width:32,
    resizeMode:"contain",
  },
  inputstyle:{
    borderWidth:1,
    borderColor:"#408DFE",
    borderRadius:15,
    paddingHorizontal:10,
    marginHorizontal:10,
    height:30,
    width:320,
    marginTop:10,
    marginLeft:"5%",
    justifyContent:"center"
  },
  inputToolbar: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#FFFFFF",
    // position:"absolute",
    // bottom:0,
    // left:0,
    // right:0,
  },
  cancelbutton: {
    backgroundColor: "#D8D8D8",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    width: 145,
    height: 33,
    marginRight:"5%",
  },
  checkbutton:{
    backgroundColor: "#98CEFF",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    width: 145,
    height: 33,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf:"center",
  },
  ButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  field:{
    flexDirection:"row",
  },
});
