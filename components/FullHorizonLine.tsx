import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

export interface FullHorizonLineProps {
  style?: StyleProp<ViewStyle>;
}

/**
 * Describe your component here
 */
export function FullHorizonLine(props: FullHorizonLineProps) {
  const { style } = props;
  const $styles = [style];

  return <View style={$styles} />;
}
