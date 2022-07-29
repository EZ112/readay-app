import { View } from "react-native";
import { Atom, Templates, Theme } from "../../components";

const colorList = [
  {
    title: "Purple",
    horizontal: true,
    data: [
      Theme.COLOR.PURPLE_1,
      Theme.COLOR.PURPLE_2,
      Theme.COLOR.PURPLE_3,
      Theme.COLOR.PURPLE_4,
      Theme.COLOR.PURPLE_5,
    ],
  },
  {
    title: "Pink",
    horizontal: true,
    data: [
      Theme.COLOR.PINK_1,
      Theme.COLOR.PINK_2,
      Theme.COLOR.PINK_3,
      Theme.COLOR.PINK_4,
      Theme.COLOR.PINK_5,
    ],
  },
  {
    title: "Green",
    horizontal: true,
    data: [
      Theme.COLOR.GREEN_1,
      Theme.COLOR.GREEN_2,
      Theme.COLOR.GREEN_3,
      Theme.COLOR.GREEN_4,
      Theme.COLOR.GREEN_5,
    ],
  },
  {
    title: "Monochrome",
    horizontal: true,
    data: [
      Theme.COLOR.WHITE,
      Theme.COLOR.GRAY_1,
      Theme.COLOR.GRAY_2,
      Theme.COLOR.GRAY_3,
      Theme.COLOR.BLACK,
    ],
  },
];

type BoxProps = {
  color: string;
  text: string;
  modifier?: object;
};

type RenderProps = {
  item: any;
  index: any;
  title: any;
};

const ColorBox = ({ color, text }: BoxProps) => {
  return (
    <View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: color,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Atom.CustomText
          variant="label"
          text={color}
          modifier={{
            color:
              color === Theme.COLOR.WHITE
                ? Theme.COLOR.BLACK
                : Theme.COLOR.WHITE,
          }}
        />
      </View>
      <Atom.CustomText variant="label" text={text} />
    </View>
  );
};

const StyleColor = () => {
  return (
    <View style={{ marginHorizontal: 15 }}>
      <Templates.CustomSectionList
        list={colorList}
        RenderItem={({ item, index, title }: RenderProps) => (
          <ColorBox color={item} text={`${title}-${++index}`} />
        )}
      />
    </View>
  );
};

export default StyleColor;
