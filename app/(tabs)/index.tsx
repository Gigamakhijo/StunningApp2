import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";
import { useAuth0 } from "react-native-auth0";
import SectionButton from "@/components/SectionButton";
import SmallButton from "@/components/SmallButton";
import SwitchView from "@/components/SwitchView";
import colors from "@/constants/Colors";
import spacing from "@/constants/spacing";
import CalendarView from "@/components/CalendarView";
import { SwipeListView } from "react-native-swipe-list-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

interface DataItem {
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

  const [data, setData] = useState<DataItem[]>([
    { id: "1", title: "Item 1", contents: "content1", completed: false },
    { id: "2", title: "Item 2", contents: "content2", completed: false },
    { id: "3", title: "Item 3", contents: "content3", completed: false },
    // Add more items as needed
  ]);


  const trainerButtonPress = () => {
    router.replace('/(screens)/chat')
  }

  const todoButtonPress = () => {
    router.replace('/(screens)/todo')
  }

  const renderItem = ({ item }: { item: DataItem }) => (
    <View style={styles.row}>
      <View style={styles.rowcontent}>
        <Text
          style={styles.itemTitle}
        >
          {item.title}
        </Text>
        <View style={styles.interval}>
          <Image source={circle} style={styles.itemContentCircle} />
          <Text
            style={styles.itemContent}>
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
        <Image source={modifyicon} style={styles.iconStyle} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("right button click")}>
        <Image source={deleteicon} style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  );


  return (
    <SafeAreaView
      style={styles.container}
      edges={{ bottom: "off", top: "additive" }}
    >
      <View style={styles.entry}>
        <SmallButton onPress={trainerButtonPress} text="Trainer" />
        <CalendarView
          selectday={selected}
          onDayPress={(day: { dateString: string }) =>
            setSelected(day.dateString)
          }
        />
        <View style={styles.content}>
          <Text style={styles.selectday}>{formatDate(new Date(selected))}</Text>
          <View>
            <SectionButton onPress={todoButtonPress} text="Todolist +" />
            <View style={styles.todolist}>
              <SwipeListView
                data={data}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={50}
                rightOpenValue={-50}
              />
            </View>
          </View>
        </View>
        </View>
    </SafeAreaView>
  );
}

function formatDate(d: Date) {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  return dayNames[d.getDay()] + " " + d.getDate();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
  entry: {
    backgroundColor: "#F7F9FC",
  },
  content: {
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
  buttonRow: {
    flexDirection: "row",
    marginBottom: spacing.s,
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
    marginLeft: "7%",
    fontSize: 15,
    fontWeight: "normal",
    color: "black",
  },
  todolist: {
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
  itemTitle:{
    color: colors.white.background,
    fontSize: 18,
    fontWeight: "normal",
  },
  itemContentCircle:{
    height: 8, 
    width: 8
  },
  itemContent:{
    color: colors.white.background,
    fontSize: 15,
    fontWeight: "normal"
  },
  iconStyle:{
    height: 20, 
    width: 20
  }
});
