import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
  } from "react-native";
  import { useState } from "react";
  import { useAuth0 } from "react-native-auth0";
  
  import ScrollButton from "@/components/ScrollButton";
  import SectionButton from "@/components/SectionButton";
  import SmallButton from "@/components/SmallButton";
  import SwitchView from "@/components/SwitchView";
  import colors from "@/constants/Colors";
  import spacing from "@/constants/spacing";
  import CalendarView from "@/components/CalendarView";
  import { SwipeListView } from "react-native-swipe-list-view";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { Drawer } from "react-native-drawer-layout";
  import Menu from "@/components/Menu";
  import { Ionicons } from "@expo/vector-icons";
  
  interface ScheduleItem {
    id: string;
    title: string;
    contents: string;
    completed: boolean;
  }
  
  export default function MainScreen() {
    /* hacky way to convert to string */
    const modifyicon = require("@/assets/images/editicon.png");
    const deleteicon = require("@/assets/images/trashicon.png");
    const circle = require("@/assets/images/whitecircle.png");
    const [selected, setSelected] = useState(new Date(Date.now()) + "");
    const [open, setOpen] = useState(false);

    const [data, setData] = useState<ScheduleItem[]>([
      { id: "1", title: "Item 1", contents: "content1", completed: false },
      { id: "2", title: "Item 2", contents: "content2", completed: false },
      { id: "3", title: "Item 3", contents: "content3", completed: false },
      // Add more items as needed
    ]);
  
  
    const renderItem = ({ item }: { item: ScheduleItem }) => (
      <View style={styles.row}>
        <View style={styles.rowcontent}>
          <Text
            style={{
              color: colors.white.background,
              fontSize: 18,
              fontWeight: "normal",
            }}
          >
            {item.title}
          </Text>
          <View style={styles.interval}>
            <Image source={circle} style={{ height: 8, width: 8 }} />
            <Text
              style={{
                color: colors.white.background,
                fontSize: 15,
                fontWeight: "normal",
              }}
            >
              {item.contents}
            </Text>
          </View>
        </View>
        <SwitchView />
        <SwipeListView />
      </View>
    );
  
    const renderHiddenItem = () => (
      <View style={styles.rowBack}>
        <TouchableOpacity onPress={() => console.log("left button click")}>
          <Image source={modifyicon} style={{ height: 20, width: 20 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("right button click")}>
          <Image source={deleteicon} style={{ height: 20, width: 20 }} />
        </TouchableOpacity>
      </View>
    );
  
    return (
      <SafeAreaView style={styles.container} edges={{bottom: "off", top: "additive"}}>
        <Drawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        renderDrawerContent={() => {
          return (
            <Menu/>
        );
        }}
        drawerPosition="right"
        drawerType="front"
        drawerStyle={{width: 300}}
        >
        <ScrollView>
        <View style={styles.header}>
          <SmallButton href="./chat" text="Trainer" />
          <Ionicons name="ellipsis-vertical" size={25} color="#000000" style={{marginRight: "5%"}} onPress={()=>setOpen(true)}/>
        </View>
          <CalendarView
            selectday={selected}
            onDayPress={(day: { dateString: string }) =>
              setSelected(day.dateString)
            }
          />
          <View style={styles.content}>
            <Text style={styles.selectday}>{formatDate(new Date(selected))}</Text>
            <View style={styles.section}>
              <SectionButton href="../addSchedule" text="Schedule +" />
            </View>
              <View style={styles.schedulelist}>
                <SwipeListView
                  data={data}
                  renderItem={renderItem}
                  renderHiddenItem={renderHiddenItem}
                  leftOpenValue={50}
                  rightOpenValue={-50}
                />
              </View>
          </View>
        </ScrollView>
        </Drawer>
      </SafeAreaView>
    );
  }
  
  function formatDate(d: Date) {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return dayNames[d.getDay()] + " " + d.getDate();
  }
  
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#F7F9FC",
    },
    header:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    content: {
      // flex: 2,
      marginTop: "5%",
    },
    interval: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: "7%",
      marginLeft: "5%",
      gap: spacing.s,
    },
    selectday: {
      marginLeft: "5%",
      fontSize: 25,
      fontWeight: "bold",
      color: colors.main.background,
    },
    section: {
      flex: 1,
    },
    schedulelist: {
      alignItems: "center",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      textAlign: "center",
      height: 80,
      width: 320,
      marginTop: "5%",
      borderRadius: spacing.m,
      backgroundColor: colors.sub1.background,
    },
    rowcontent: {
        flexDirection: "column",
      },
    rowBack: {
      alignItems: "center",
      backgroundColor: colors.white.background,
      flex: 1,
      height: 80,
      width: 320,
      borderRadius: spacing.s,
      marginTop: "5%",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: spacing.m,
      paddingRight: spacing.m,
    },
  });
  