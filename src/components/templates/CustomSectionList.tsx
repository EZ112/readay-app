import { FlatList, SectionList } from "react-native";

import { CustomText } from "../atoms";

type Props = {
  list: Array<any>;
  RenderItem: any;
};

const CustomSectionList = ({ list, RenderItem }: Props) => {
  return (
    <SectionList
      sections={list}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={({ section: { title, horizontal, data } }) => (
        <>
          <CustomText
            variant="heading"
            text={title}
            modifier={{ marginTop: 32 }}
          />
          {horizontal && (
            <FlatList
              data={data}
              horizontal
              renderItem={({ item, index }) => (
                <RenderItem item={item} index={index} title={title} />
              )}
            />
          )}
        </>
      )}
      renderItem={({ item, index, section: { title, horizontal } }) => (
        <>
          {!horizontal && (
            <RenderItem item={item} index={index} title={title} />
          )}
        </>
      )}
    />
  );
};

export default CustomSectionList;
