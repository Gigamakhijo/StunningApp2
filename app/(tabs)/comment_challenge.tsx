import { StyleSheet, Text, View, TextInput, ScrollView, } from "react-native";
import { useState } from "react";
import CalenderView from "@/components/CalendarView";
import SmallButton from "@/components/SmallButton";
import SectionButton from "@/components/SectionButton";
import colors from "@/constants/Colors";
import spacing from "@/constants/spacing";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "react-native-drawer-layout";
import Menu from "@/components/Menu";
import { useAuth0 } from "react-native-auth0";

export default function CommentScreen() {
  const [selected, setSelected] = useState(new Date(Date.now()) + "");
  const [open, setOpen] = useState(false);

  function formatDate(d: Date) {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return dayNames[d.getDay()] + " " + d.getDate();
  }

  return (
    <>
        <SafeAreaView style={styles.container} edges={{bottom: "off", top:"additive"}}>
        <Drawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        renderDrawerContent={() => {
          return (
            <Menu />
        );
        }}
        drawerPosition="right"
        drawerType="front"
        drawerStyle={{width: 300}}
        >
        <View style={styles.header}>
          <SmallButton href="./chat" text="Trainer" />
          <Ionicons name="ellipsis-vertical" size={25} color="#000000" style={{marginRight: "5%"}} onPress={()=>setOpen(true)}/>
        </View>
        <ScrollView>
          <CalenderView
            selectday={selected}
            onDayPress={(day: { dateString: string }) =>
              setSelected(day.dateString)
            }
          />
          <View style={styles.content}>
            <Text style={styles.selectday}>{formatDate(new Date(selected))}</Text>
          </View>
          <View style={styles.section}>
            <SectionButton href="./comment" text="Comment +" />
            <TextInput
              style={styles.commentbox}
              placeholder="회고를 남겨 보세요."
              placeholderTextColor={colors.gray.background}
            ></TextInput>
          </View>

          <View style={styles.section}>
            <SectionButton href="./schedule" text="Challenge +" />
          </View>
        </ScrollView>
        </Drawer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
  },  
  header:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  content: {
    marginTop: "5%",
  },
  selectday: {
    marginLeft: "5%",
    fontSize: 25,
    fontWeight: "bold",
    color: colors.main.background,
  },
  section: {},
  commentbox: {
    height: 135,
    width: 320,
    backgroundColor: colors.white.background,
    borderRadius: 15,
    borderColor: colors.main.background,
    borderWidth: 1.5,
    justifyContent: "center",
    textAlign: "center",
    marginTop: spacing.s,
    marginLeft: "7%",
    fontSize: 15,
    fontWeight: "normal",
    color: "black",
  },
});
