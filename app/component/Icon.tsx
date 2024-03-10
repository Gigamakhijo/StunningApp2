import * as React from "react"
import { ComponentType } from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from "react-native"

export type IconTypes = keyof typeof iconRegistry

interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  icon: IconTypes

  /**
   * An optional tint color for the icon
   */
  color?: string

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps["onPress"]
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Icon.md)
 */
export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props

  const isPressable = !!WrapperProps.onPress
  const Wrapper = (WrapperProps?.onPress ? TouchableOpacity : View) as ComponentType<
    TouchableOpacityProps | ViewProps
  >

  const $imageStyle: StyleProp<ImageStyle> = [
    $imageStyleBase,
    color !== undefined && { tintColor: color },
    size !== undefined && { width: size, height: size },
    $imageStyleOverride,
  ]

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      <Image style={$imageStyle} source={iconRegistry[icon]} />
    </Wrapper>
  )
}

export const iconRegistry = {
  back: require("../../assets/icons/back.png"),
  bell: require("../../assets/icons/bell.png"),
  caretLeft: require("../../assets/icons/caretLeft.png"),
  caretRight: require("../../assets/icons/caretRight.png"),
  check: require("../../assets/icons/checkicon.png"),
  clap: require("../../assets/icons/clap.png"),
  community: require("../../assets/icons/community.png"),
  components: require("../../assets/icons/components.png"),
  debug: require("../../assets/icons/debug.png"),
  github: require("../../assets/icons/github.png"),
  heart: require("../../assets/icons/heart.png"),
  hidden: require("../../assets/icons/hidden.png"),
  ladybug: require("../../assets/icons/ladybug.png"),
  lock: require("../../assets/icons/lock.png"),
  menu: require("../../assets/icons/menu.png"),
  more: require("../../assets/icons/more.png"),
  pin: require("../../assets/icons/pin.png"),
  podcast: require("../../assets/icons/podcast.png"),
  settings: require("../../assets/icons/settings.png"),
  slack: require("../../assets/icons/slack.png"),
  view: require("../../assets/icons/view.png"),
  camera: require("../../assets/icons/camera.png"),
  myprofile: require("../../assets/icons/myprofile2.png"),
  stdwmList: require("../../assets/icons/stdl2.png"),
  calendar: require("../../assets/icons/calendar2.png"),
  backButton: require("../../assets/icons/profile-Back-Button.png"),
  messageButton: require("../../assets/icons/profile-message.png"),
  notificationButton: require("../../assets/icons/profile-notification.png"),
  settingButton: require("../../assets/icons/profile-setting.png"),
  weeklychart: require("../../assets/icons/chart2.png"),
  plusicon: require("../../assets/icons/plusicon.png"),
  addtaskemogi: require("../../assets/icons/addtaskemogi.png"),
  chatbotemogi: require("../../assets/icons/chatbotemogi.png"),
  todolistemoji1: require("../../assets/icons/todolistemoji1.png"),
  todolistemoji2: require("../../assets/icons/todolistemoji2.png"),
  todolistemoji3: require("../../assets/icons/todolistemoji3.png"),
  todolistemoji4: require("../../assets/icons/todolistemoji4.png"),
  x: require("../../assets/icons/x.png"),
  newplus: require("../../assets/icons/newplusicon.png"),
  appbasicprofile: require("../../assets/icons/app-basic-profile.png"),
  send: require("../../assets/icons/send.png"),
  chevron: require("../../assets/icons/chevron-right.png"),
  search: require("../../assets/icons/search.png"),
}

const $imageStyleBase: ImageStyle = {
  resizeMode: "contain",
}
