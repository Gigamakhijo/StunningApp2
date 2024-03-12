import React, { FC } from "react";
import { TabStackScreenProps } from "../App";
import { BasicScreen } from "../components/BasicScreen";

interface MyFeedScreenProps extends TabStackScreenProps<"MyFeed"> {}

export const MyFeedScreen: FC<MyFeedScreenProps> = function MyFeedScreen(
  _props,
) {
  const { navigation } = _props;

  return <BasicScreen></BasicScreen>;
};
