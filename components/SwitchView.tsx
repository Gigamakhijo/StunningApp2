import { Switch, StyleSheet } from "react-native";
import { useState } from "react";
import colors from "@/constants/Colors";
import spacing from "@/constants/spacing";

export default function CalenderView(props: any) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <Switch
      style={styles.toggle}
      // 배경 트랙 색상 설정 false: 스위치 꺼진 상태 배경 true: 켜진상태 배경
      trackColor={{
        false: colors.switchfalse.background,
        true: colors.white.background,
      }}
      // 스위치 슬라이더 색상
      thumbColor={
        isEnabled ? colors.switchblack.background : colors.gray.background
      }
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
}

const styles = StyleSheet.create({
  toggle: {
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
    marginLeft: "30%",
  },
});
