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
  Button
} from "react-native";
import { useState } from "react";
import {router} from "expo-router";
import SmallButton from "@/components/SmallButton";
import ScrollButton from "@/components/ScrollButton";
import SectionButton from "@/components/SectionButton";
import SwitchView from "@/components/SwitchView";
import colors from "@/constants/Colors";
import icon from "@/constants/Icon";
import spacing from "@/constants/spacing";
import CalendarView from "@/components/CalendarView";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
import { SwipeListView } from "react-native-swipe-list-view";
interface DataItem{
  id:string;
  title: string;
  contents: string;
  completed: boolean;
}
export default function MainScreen() {
  /* hacky way to convert to string */
  const [selected, setSelected] = useState(new Date(Date.now()) + "");
  
  const [data, setData] = useState<DataItem[]>([
    { id: '1', title: 'Item 1', contents: 'content1', completed: false},
    { id: '2', title: 'Item 2', contents: 'content2', completed: false },
    { id: '3', title: 'Item 3', contents: 'content3', completed: false },
    // Add more items as needed
  ]);

  const renderItem = ({ item }: {item: DataItem}) => (
    <View style={styles.row}>
      <View style={styles.rowcontent}>
        <Text style={{color:colors.white.background,fontSize:18, fontWeight:'normal'}} >{item.title}</Text>
        <View style={styles.interval}>
          <Image source={icon.circle} style={{height:8,width:8}}/>
          <Text style={{color:colors.white.background,fontSize:15, fontWeight:'normal'}}>{item.contents}</Text>
        </View>
      </View>
      <SwitchView/>
      <SwipeListView />
    </View>
  );

  const renderHiddenItem = () => (
    <View style={styles.rowBack}>
      <TouchableOpacity onPress={() =>  console.log("left button click")}>
        <Image source={icon.modifyicon} style={{height:20, width: 20}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>  console.log("right button click")}>
        <Image source={icon.deleteicon} style={{height:20, width: 20}}/>
      </TouchableOpacity>
    </View>
  );
  return (

    <ScrollView style={styles.entry}>
      <CalendarView
        selectday={selected}
        onDayPress={(day: {dateString: string})=> setSelected(day.dateString)}
      />
      <View style={styles.content}>
        <Text style={styles.selectday}>{formatDate(new Date(selected))}</Text>

        {/* <View style={styles.buttonRow}>
          <ScrollButton text="todo" />
          <ScrollButton text="comment" />
          <ScrollButton text="challenge" />
        </View> */}

        {/* <View style={styles.section}>
          <SectionButton href="./schedule" text="Schedule +" />
        </View> */}

        <View style={styles.section}>
          {/* <SectionButton text="Todolist +" /> */}
          <View style={styles.todoaddbutton}>
            <Pressable onPress={()=>router.push("/(screens)/(tabs)/todo/todoadd")}style={styles.buttonstyle}>
            <Text style={styles.buttontext}>Todolist +</Text>
          </Pressable>
          </View>
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
    </ScrollView>
  );
}

function formatDate(d: Date) {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  return dayNames[d.getDay()] + " " + d.getDate();
}

const styles = StyleSheet.create({
  entry: {
    height: "100%",
  },
  content: {
    flex: 2,
    marginTop: "5%",
  },
  interval:{
    flexDirection:"row", 
    alignItems:'center', 
    marginTop:"7%",
    marginLeft:"5%",
    gap:spacing.s,
  },
  selectday: {
    marginLeft: "5%",
    fontSize: 25,
    fontWeight: "bold",
    color: colors.main.background,
  },
  todoaddbutton: {
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
  buttonRow: {
    flexDirection: "row",
    marginBottom: spacing.s,
  },
  section: {
    flex: 1,
  },
  Sectionbutton:{
    fontSize: 20,
    fontWeight: "bold",
    color: colors.main.background,
  },
  todolist:{
    alignItems: 'center',
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
  },
  rowcontent:{
    flexDirection: 'column',
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: colors.white.background,
    flex: 1,
    height: 80,
    width: 320,
    borderRadius:spacing.s,
    marginTop:"5%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: spacing.m,
    paddingRight: spacing.m,
  },
});
