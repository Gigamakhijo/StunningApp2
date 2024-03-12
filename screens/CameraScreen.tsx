import React, { FC } from "react";
import { TabStackScreenProps } from "../App";
import { BasicScreen } from "../components/BasicScreen";

interface CameraScreenProops extends TabStackScreenProps<"Camera"> {}

export const CameraScreen: FC<CameraScreenProops> = function CameraScreen(
  _props,
) {
  const { navigation } = _props;

  return <BasicScreen></BasicScreen>;
};
