import { FlatList, View } from "react-native";
import { Atom } from "../../components";
import { toCapitalize } from "../../helper/string";

const buttonList = [
  {
    variant: "primary",
    modifier: { paddingVertical: 15, marginTop: 8 },
  },
  {
    variant: "secondary",
    modifier: { paddingVertical: 15, marginTop: 8 },
  },
  {
    variant: "ternary",
    modifier: { paddingVertical: 15, marginTop: 8 },
  },
];

const ButtonInfo = ({ item }: any) => (
  <View style={{ marginTop: 16 }}>
    <Atom.CustomText variant="body" text={toCapitalize(item.variant)} />
    <Atom.CustomButton
      variant={item.variant}
      text={"Button"}
      modifier={item.modifier}
    />
  </View>
);

const StyleButton = () => {
  return (
    <View style={{ marginHorizontal: 15 }}>
      <FlatList data={buttonList} renderItem={ButtonInfo} />
    </View>
  );
};

export default StyleButton;
