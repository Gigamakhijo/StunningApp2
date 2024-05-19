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
  } from "react-native";
  import { useState } from "react";
  import { router } from "expo-router";
  import SmallButton from "@/components/SmallButton";
  import ScrollButton from "@/components/ScrollButton";
  import SectionButton from "@/components/SectionButton";
  import SwitchView from "@/components/SwitchView";
  import colors from "@/constants/Colors";
  import spacing from "@/constants/spacing";
  import CalendarView from "@/components/CalendarView";

export default function scheduleScreen() {
    const [selected, setSelected] = useState(new Date(Date.now()) + "");

    return (
        <ScrollView style={styles.entry}>
            <CalendarView
                selectday={selected}
                onDayPress={(day: {dateString: string})=> setSelected(day.dateString)}
            />
            <View style={styles.content}>
                <Text style={styles.selectday}>{formatDate(new Date(selected))}</Text>
                <View style={styles.section}>
                {/* <SectionButton href="" text="Schedule +" /> */}
                <View style={styles.scheduleaddbutton}>
                  <Pressable onPress={()=>router.push("/(screens)/(tabs)/schedule/scheduleadd")}style={styles.buttonstyle}>
                  <Text style={styles.buttontext}>Schedule +</Text>
                </Pressable>
                </View>
                </View>
                
            </View>
        </ScrollView>
    );
}
function formatDate(d: Date) {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return dayNames[d.getDay()] + " " + d.getDate();
  }
const styles=StyleSheet.create({
    entry:{
        height: "100%",
    },
    section: {
        flex: 1,
      },
      content: {
        flex: 2,
        marginTop: "5%",
      },
      selectday: {
        marginLeft: "5%",
        fontSize: 25,
        fontWeight: "bold",
        color: colors.main.background,
      },
      
    scheduleaddbutton: {
      marginTop: spacing.s,
    },
    buttontext: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.main.background,
    },
    buttonstyle: {
      marginLeft: "5%",
    },
})