import { StyleSheet, Text, View,Image ,TextInput, Alert, Platform, KeyboardAvoidingView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useRouter } from "expo-router";
import { useState, useCallback, useEffect } from "react";
import {Bubble, GiftedChat, IMessage, InputToolbar} from 'react-native-gifted-chat';
import colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Chatheader from "@/components/Chatheader";
export default function ChatScreen() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [showCancelButtons, setShowCancelButtons] = useState(false);
  const sendbutton = require("@/assets/images/sendbutton.png");

  const goBack = () => {
    router.replace('/(tabs)/')
  }

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text:"무엇을 도와드릴까요?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
        },
      },
    ]);
  }, []);

  const onSend=useCallback((messages: IMessage[] = [])=>{
    try{
    setMessages(previousMessages=>
      GiftedChat.append(previousMessages,messages)
    );
    setInputText("")
    
    const lastMessage = messages[messages.length - 1];
    // Check if the last message sent was the trigger for showing cancel buttons
    if (lastMessage.text === "Trigger") {
      setShowCancelButtons(true); 
    } else {
      setShowCancelButtons(false);
    }
    // test

    setTimeout(() => {
      const responseMessage: IMessage = {
        _id: Math.random().toString(),
        text: `You said: ${lastMessage.text}`,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
        },
      };
      setMessages((previousMessages) => GiftedChat.append(previousMessages, [responseMessage]));
    }, 2000);
    }catch(e:any){
      Alert.alert('Message Error', e.message);
  }
  }, []);

  const onCancelButtonPress = () => {
    console.log("Cancel button pressed");
    setShowCancelButtons(false);
  };

  const cancelAndcheckButton = () => {
    return(
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
    )
  }
  const senderButton = (props: any) => {
    return(
       <TouchableOpacity 
       {...props}
      style={styles.sendbuttoncontainer}
        onPress={()=>{
          onSend([{
            _id: Math.random().toString(),
            text: props.text,
            createdAt: new Date(),
            user: {
              _id: 1,
            },
          }]),
          setInputText(""); // 메시지를 전송한 후에 입력된 텍스트를 초기화
          props.text = inputText
          }} >
      <Image source={sendbutton} style={styles.sendbutton}/>
    </TouchableOpacity>
    );
  }

  const renderInputToolbar = (props: any) => {
    return (
      <InputToolbar
      {...props}
      containerStyle={styles.inputToolBarContainer}
      >
       </InputToolbar>
    );
  };

  const renderBubble = (props: any) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left:styles.leftBubble,
          right:styles.rigthBubble
        }}
        textStyle={{
          left:styles.leftbubbleText,
          right:styles.rigthBubbleText
        }}
      />
    );
  };

  return (
    <>
      <SafeAreaView style={styles.container} 
      edges={{ bottom: "off", top: "additive" }}>
          <KeyboardAvoidingView
          style={styles.viewFlex} >
            <GestureHandlerRootView style={styles.viewFlex}>
              <Chatheader onPress={goBack}/>
              <View style={styles.chatView}>
                <GiftedChat
                  placeholder="메시지를 입력하세요"
                  alwaysShowSend={true} // 입력란 비어있는경우에도 전송버튼 항상 표시할건지
                  showUserAvatar={false} // 각 메시지 옆에 아바타 표시할건지
                  renderUsernameOnMessage={false} // 각메시지 위에 사용자 이름 표시여부
                  renderAvatar={null} // 아바타 렌더링 함수 제공-> 아바타 모양, 동작 완전 제어가능
                  messages={messages} // 현재 채팅 메시지 배열
                  isTyping={true} // 현재 사용자가 타이핑 중인지 여부
                  // 메시지 전송될때 호출되는 콜백 함수
                  onSend={(messages: IMessage[]) => {onSend(messages)}}
                  user={{ // 현재 사용자 정보
                    _id:1,
                  }}
                  renderBubble={renderBubble} // 채팅 스타일
                  isKeyboardInternallyHandled={true}
                  renderInputToolbar={renderInputToolbar}
                  renderSend={(props=>senderButton(props))}
                  infiniteScroll={true}
                  loadEarlier={true}
                  text={inputText}
                  onInputTextChanged={(value) => setInputText(value)}
                  renderFooter={()=>{
                    if(showCancelButtons){
                    return cancelAndcheckButton()
                  }}}
                />
              </View>
            </GestureHandlerRootView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#98CEFF",
    marginBottom: "10%",
  },
  viewFlex:{
    flex: 1,
  },
  sendbuttoncontainer:{
    width: 32,
    height: 32,
    justifyContent:"center",
    alignItems:"center",
  },
  sendbutton:{
    height:30,
    width:30,
    resizeMode:"contain",
  },
  inputstyle:{
    borderWidth:1,
    borderColor:"#408DFE",
    borderRadius:15,
    paddingHorizontal:10,
    marginHorizontal:10,
    height:40,
    width:320,
    marginTop:10,
    justifyContent:"center",
  },
  inputToolbar: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cancelbutton: {
    backgroundColor: "#D8D8D8",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    width: 145,
    height: 33,
  },
  checkbutton: {
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
    alignSelf: "center",
  },
  ButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
    alignItems: "center",
  },
  inputToolBarContainer:{
     borderTopWidth:1,
    borderTopColor:"#408DFE",
    borderRadius:15,
    paddingHorizontal:10,
     height:45,
    marginTop:10,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  chatView:{
    flex: 50, 
    borderTopLeftRadius: 50, 
    borderTopRightRadius:50, 
    backgroundColor:colors.white.background
  },
  leftBubble:{
    backgroundColor:"#F2F2F2",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderBottomRightRadius:15,
    borderBottomLeftRadius:0,
    marginLeft:"5%"
  },
  rigthBubble:{
    backgroundColor:"#98CEFF",
    borderColor:"#408DFE",
    borderWidth:1,
    borderRadius:15,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderBottomRightRadius:0,
    borderBottomLeftRadius:15,
    marginRight:"5%"
  },
  leftbubbleText:{
    fontSize:15,
  },
  rigthBubbleText:{
    color:"white",
    fontSize:15,
  }
});
