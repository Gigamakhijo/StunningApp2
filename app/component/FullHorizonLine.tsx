import * as React from "react"
import { StyleProp, View, ViewStyle, StyleSheet } from "react-native"
// import { observer } from "mobx-react-lite"

export interface FullHorizonLineProps {
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export function FullHorizonLine(props: FullHorizonLineProps) {
  const { style } = props
  const $styles = [style]

  return <View style={$styles} />
}


