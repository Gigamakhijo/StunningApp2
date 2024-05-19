import {
    View,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    Pressable,
    TextInput,
    TouchableOpacity, 
    Image,
    Button,
  } from "react-native";
  import { useState } from "react";
  import SmallButton from "@/components/SmallButton";
  import ScrollButton from "@/components/ScrollButton";
  import SectionButton from "@/components/SectionButton";
  import SwitchView from "@/components/SwitchView";
  import colors from "@/constants/Colors";
  import icon from "@/constants/Icon";
  import spacing from "@/constants/spacing";
  import CalendarView from "@/components/CalendarView";
  import Datetimepickermodal from "react-native-modal-datetime-picker";

export default function challengeScreen() {
    const [date, setDate] = useState(new Date(Date.now()))
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
    return (
        <ScrollView style={styles.entry}>
        <View style={styles.section}>
            <Pressable style={styles.titlestyle}onPress={showDatePicker}>
                <Text style={styles.titletext} >{`${date.getFullYear()}년 ${date.getMonth() + 1}월 Challenge`}</Text>
            </Pressable>
            <Datetimepickermodal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            {/* 1 */}
            <View style={styles.row}>
                    <Image source={icon.water} style={styles.icon}/>
                    <Text style={styles.textstyle} >물 1리터 마시기</Text>
                <SwitchView/>
            </View>
            {/* 2 */}
            <View style={styles.row}>
                    <Image source={icon.meditation} style={styles.icon}/>
                    <Text style={styles.textstyle} >아침 명상 5분</Text>
                <SwitchView/>
            </View>
            {/* 3 */}
            <View style={styles.row}>
                    <Image source={icon.news} style={styles.icon}/>
                    <Text style={styles.textstyle} > 뉴스레터 보기</Text>
                <SwitchView/>
            </View>
            {/* 4 */}
            <View style={styles.row}>
                    <Image source={icon.diary} style={styles.icon}/>
                    <Text style={styles.textstyle} >일기쓰기</Text>
                <SwitchView/>
            </View>
            {/* 5 */}
            <View style={styles.row}>
                    <Image source={icon.exercise} style={styles.icon}/>
                    <Text style={styles.textstyle} >운동하기</Text>
                <SwitchView/>
            </View>
        </View>
        <View style={styles.section}>
            <View style={styles.titlestyle}>
             <Text style={styles.commenttext}>comment</Text>
            </View>
            <TextInput
                style={styles.commentbox}
                placeholder="회고를 남겨 보세요."
                placeholderTextColor={colors.gray.background}
            />
            </View>
        </ScrollView>
    )
    
}
const styles=StyleSheet.create({
    entry:{
        height: "100%",
    },
    icon:{
        height:35, width:35,
    },
    section: {
        flex: 1,
        alignItems:"center"
      },
    titlestyle:{
       alignSelf:"flex-start",
    },
    titletext:{
        fontSize: 20,
        fontWeight: "bold",
        color: colors.main.background,
        marginLeft:"5%",
        
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign:"center",
        height: 80,
        width: 320,
        marginTop:"5%",
        borderRadius:spacing.m,
        backgroundColor: colors.sub1.background,
        padding:spacing.m,
      },
      textstyle:{
        color:colors.white.background,
        fontSize:18, 
        fontWeight:'normal'
      },
      commenttext:{
        fontSize: 20,
        fontWeight: "bold",
        color: colors.main.background,
        marginLeft:"5%",
        marginTop:"5%"
      },
    commentbox: {
        height: 135,
        width: 320,
        backgroundColor: colors.white.background,
        borderRadius: spacing.m,
        borderColor: colors.main.background,
        borderWidth: 1.5,
        justifyContent: "center",
        textAlign: "center",
        marginTop: spacing.s,
        fontSize: 15,
        fontWeight: "normal",
        color: "black",
    },
})