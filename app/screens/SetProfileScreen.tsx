import React, { ComponentType, FC, useState, useRef, useEffect, useMemo } from "react"
import { TextStyle, View, ViewStyle, TextInput, Text, StyleSheet, Image, ImageBackground, KeyboardAvoidingView, Platform, Button, Pressable } from "react-native"
import { AppStackScreenProps } from "../../App"
import { StatusBar, StatusBarProps } from "expo-status-bar"
import { BasicScreen } from "../component/BasicScreen"
import * as ImagePicker from "expo-image-picker"
import { FullHorizonLine } from "../component/FullHorizonLine"
import { AutoImage } from "../component/AutoImage"
import { SemiHorizonLine } from "../component/SemiHorizonLine"

interface SetProfileScreenProps extends AppStackScreenProps<"SetProfile">{}

export const SetProfileScreen: FC<SetProfileScreenProps> = function SetProfileScreen(_props){
    const { navigation } = _props

    const exampleImage = require("../../assets/images/app-basic-profile.png")

    const exampleImageUri = Image.resolveAssetSource(exampleImage).uri

    const [image, setImage] = useState("")
    const [id, getId] = useState("osj1405")
    const [gender, setGender] = useState("")
    const [phonenum, setPhonenum] = useState("")
    const [email, setEmail] = useState("")

  const selectPhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      const uri = result.assets[0].uri
      setImage(uri)
    }
  }

    return (
        <KeyboardAvoidingView style={{flex:1}}>
            <BasicScreen>
                <View style={style.setview}>
                    <View style={style.imagepicker}>
                        <AutoImage source={{ uri: image }} style={style.profile} />                        
                        {/* {image && <Image source={{ uri: image }} style={{ width: 90, height: 90, borderRadius: 50 }} />} */}
                        <Pressable>
                            <Text style={{fontSize: 15, marginTop: 8,}}>사진 변경하기</Text>
                        </Pressable>
                    </View>
                    <FullHorizonLine style={style.HorizonLine} />
                    <View style={style.setfield}>
                        <Text style={{fontSize: 15, fontWeight: "bold",}}>아이디</Text>
                        <View style={style.id}>
                            <TextInput
                            style={{fontSize: 15,}}
                            defaultValue={id}
                            editable={false}
                            readOnly={true}
                            textAlign="left"
                            >
                            </TextInput>
                        </View>
                    </View>
                    <Text style={{fontSize: 12, color: "#8C8C8C", alignSelf:"center", marginBottom: 5,}}>아이디는 변경 불가능합니다.</Text>
                    <SemiHorizonLine />
                    <View style={style.setfield}>
                        <Text style={{fontSize: 15, fontWeight: "bold"}}>성별</Text>
                        <View style={{
                            backgroundColor: "#FFFFFF",
                            borderColor: "#8C8C8C",
                            borderWidth: 1,
                            borderRadius: 5,
                            width: 80,
                            height: 28,
                            justifyContent: "center",
                            alignItems: "center",
                            }}>
                            <Pressable onPress={() => {setGender("female")}}>
                                <Text style={{fontSize: 15, color: "#8C8C8C"}}>여성</Text>
                            </Pressable> 
                        </View>
                        <View style={{
                            backgroundColor: "#FFFFFF",
                            borderColor: "#8C8C8C",
                            borderWidth: 1,
                            borderRadius: 5,
                            width: 80,
                            height: 28,
                            justifyContent: "center",
                            alignItems: "center",
                            }}>
                            <Pressable onPress={() => {setGender("male")}}>
                                <Text style={{fontSize: 15, color: "#8C8C8C"}}>남성</Text>
                            </Pressable> 
                        </View>
                    </View>
                    <SemiHorizonLine />
                    <View style={style.setfield}>
                        <Text style={{fontSize: 15, fontWeight: "bold",}}>전화번호</Text>
                        <View style={style.id}>
                            <TextInput
                            style={{fontSize: 15,}}
                            value={phonenum}
                            textAlign="left"
                            onChangeText={setPhonenum}
                            >
                            </TextInput>
                        </View>
                    </View>
                    <SemiHorizonLine />
                    <View style={style.setfield}>
                        <Text style={{fontSize: 15, fontWeight: "bold",}}>이메일</Text>
                        <View style={style.id}>
                            <TextInput
                            style={{fontSize: 15,}}
                            value={email}
                            onChangeText={setEmail}
                            textAlign="left"
                            >
                            </TextInput>
                        </View>
                    </View>
                    <FullHorizonLine style={style.HorizonLine} />
                    <View style={style.buttonfield}>
                        <View style={{
                            backgroundColor: "#F3DDDD80",
                            borderColor: "#00000010",
                            borderBottomWidth: 3,
                            borderRadius: 10,
                            width: 160,
                            height: 50,
                            }}>
                            <Pressable style={style.exit}
                                onPress={()=>navigation.navigate("Login")}>
                                <Text style={{fontSize: 20, fontWeight: "bold"}}>취소</Text>
                             </Pressable> 
                        </View>
                        <View style={{
                            backgroundColor: "#E7E6E680",         
                            borderColor: "#00000010",
                            borderBottomWidth: 3,
                            borderRadius: 10,
                            width: 160,
                            height: 50,
                            }}>
                            <Pressable style={style.complete}
                            onPress={()=>navigation.navigate("Tab")}>
                                <Text style={{fontSize: 20, fontWeight: "bold"}}>완료</Text>
                            </Pressable> 
                        </View>
                    </View>
                </View>
            </BasicScreen>
        </KeyboardAvoidingView>
    )
}

const style=StyleSheet.create({
    setview:{
        justifyContent: "space-evenly",
        flex: 1,
    },
    imagepicker: {
        flexDirection: "column",
        alignItems: "center",
    },
    profile:{
        width: 90,
        height: 90,
        borderRadius: 50,
    },
    HorizonLine: {
        backgroundColor: "#ECECEC",
        height: 3,
        alignItems: "stretch",
        marginTop: 9,
        marginBottom: 25,
    },
    setfield: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems:"center",
        marginBottom: 21,
    },
    id:{
        flexBasis: 230,
        alignSelf: "stretch",
        justifyContent: "center",
    },
    exit:{
        width: 160,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#00000010",
        borderBottomWidth: 3,
        borderRadius: 10,
    },
    complete:{
        width: 160,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#00000010",
        borderBottomWidth: 3,
        borderRadius: 10,
    },
    buttonfield:{
        flex: 3.5,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems:"center",
    }
})