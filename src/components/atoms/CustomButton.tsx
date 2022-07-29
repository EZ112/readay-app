import { StyleSheet, TouchableOpacity } from "react-native";

import CustomText from "./CustomText";
import * as Theme from "../theme";

type Props = {
  variant: "primary" | "secondary" | "ternary";
  text: string;
  modifier?: object;
  onPress?: any;
};

const CustomButton = ({ variant, text, modifier, onPress }: Props) => {
  let buttonStyle = { button: {}, text: {} };

  switch (variant) {
    case "primary":
      buttonStyle.button = StyleSheet.flatten([style.base, style.primary]);
      break;
    case "secondary":
      buttonStyle.button = StyleSheet.flatten([style.base, style.secondary]);
      break;
    case "ternary":
      buttonStyle.button = StyleSheet.flatten([style.base]);
      buttonStyle.text = StyleSheet.flatten([style.ternary]);
      break;
  }

  return (
    <TouchableOpacity
      style={{ ...buttonStyle.button, ...modifier }}
      onPress={onPress}
    >
      <CustomText variant={"body"} modifier={buttonStyle.text} text={text} />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  base: {
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  primary: {
    backgroundColor: Theme.COLOR.PURPLE_1,
  },
  secondary: {
    borderColor: Theme.COLOR.GREEN_1,
    borderWidth: 1,
  },
  ternary: {
    color: Theme.COLOR.GREEN_1,
  },
});

export default CustomButton;
