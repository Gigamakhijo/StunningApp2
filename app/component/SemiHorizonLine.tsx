import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
export interface SemiHorizonLineProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export function SemiHorizonLine(props: SemiHorizonLineProps) {
  const { style } = props
  const $styles = [$SemiHorizonLine, style]

  return <View style={$styles} />
}

const $SemiHorizonLine: ViewStyle = {
  backgroundColor: "#ECECEC",
  height: 3,
  width: 300,
  marginLeft: 92,
  marginBottom: 25,
}
