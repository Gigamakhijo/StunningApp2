import React, { FC } from "react";
import { TabStackScreenProps } from "../App";
import { BasicScreen } from "../components/BasicScreen";

interface StudyWithMeListScreenProps
  extends TabStackScreenProps<"StudyWithMeList"> {}

export const StudyWithMeListScreen: FC<StudyWithMeListScreenProps> =
  function StudyWithMeLsitScreen(_props) {
    const { navigation } = _props;

    return <BasicScreen></BasicScreen>;
  };
