import { View } from "react-native";
import { Atom, Templates } from "../../components";

type Props = {
  navigation: any;
};

const styleList = [
  {
    title: "Theme",
    data: [
      {
        text: "Color",
        screen: "StyleColor",
      },
      {
        text: "Typography",
        screen: "StyleTypography",
      },
    ],
  },
  {
    title: "Atom",
    data: [
      {
        text: "Button",
        screen: "StyleButton",
      },
    ],
  },
];

const StyleNav = ({ navigation }: Props) => {
  return (
    <View style={{ marginHorizontal: 15 }}>
      <Templates.CustomSectionList
        list={styleList}
        RenderItem={({ item }: any) => (
          <Atom.CustomButton
            variant="ternary"
            text={item.text}
            modifier={{ alignItems: "flex-start", paddingVertical: 15 }}
            onPress={() => navigation.navigate(item.screen)}
          />
        )}
      />
    </View>
  );
};

export default StyleNav;
