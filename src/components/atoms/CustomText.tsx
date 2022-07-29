import { StyleSheet, Text } from "react-native";

import * as Theme from "../theme";

type Props = {
  variant: "heading" | "body" | "label";
  text: string;
  modifier?: object;
  onPress?: any;
};

const CustomText = ({ variant, text, modifier, onPress }: Props) => {
  const baseStyle = onPress ? style.link : style.base;
  let textStyle;

  switch (variant) {
    case "heading":
      textStyle = StyleSheet.flatten([baseStyle, style.heading]);
      break;
    case "body":
      textStyle = StyleSheet.flatten([baseStyle, style.body]);
      break;
    case "label":
      textStyle = StyleSheet.flatten([baseStyle, style.label]);
      break;
  }

  return (
    <Text style={{ ...textStyle, ...modifier }} onPress={onPress}>
      {text}
    </Text>
  );
};

const style = StyleSheet.create({
  base: {
    color: Theme.COLOR.WHITE,
  },
  link: {
    color: Theme.COLOR.PURPLE_1,
    borderBottomWidth: 1,
    borderBottomColor: Theme.COLOR.PURPLE_1,
  },
  heading: {
    fontSize: 24,
  },
  body: {
    fontSize: 16,
  },
  label: {
    fontSize: 12,
  },
});

export default CustomText;
