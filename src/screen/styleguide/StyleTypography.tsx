import { FlatList, View } from "react-native";
import { Atom } from "../../components";

const fontList = [
  { variant: "heading" as fontVariant },
  { variant: "body" as fontVariant },
  { variant: "label" as fontVariant },
];

type fontVariant = "heading" | "body" | "label";

const StyleTypography = () => {
  return (
    <View style={{ marginHorizontal: 15, marginTop: 16 }}>
      <FlatList
        data={fontList}
        renderItem={({ item: { variant } }) => (
          <Atom.CustomText
            variant={variant}
            text={variant}
            modifier={{ marginTop: 8 }}
          />
        )}
      />
    </View>
  );
};

export default StyleTypography;
