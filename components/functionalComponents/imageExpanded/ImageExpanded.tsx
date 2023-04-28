// React
import React, { FC } from "react";

// React Native
import {
  View,
  Text,
  Image,
  Pressable,
  GestureResponderEvent,
} from "react-native";
// Styles
import ImageExpandedStyles from "./ImageExpandedStyles";

interface ImageExpandedProps {
  source: string;
  closeImageModal: (event: GestureResponderEvent) => void;
}

const ImageExpanded: FC<ImageExpandedProps> = (props: ImageExpandedProps) => {
  return (
    <View style={ImageExpandedStyles.modalContentContainer}>
      <Image
        source={{
          uri: props.source,
        }}
        resizeMode={"contain"}
        style={ImageExpandedStyles.modalImage}
      />
      <Pressable
        style={ImageExpandedStyles.closeButton}
        onPress={props.closeImageModal}
      >
        <Text style={{ color: "#707070", fontWeight: "bold" }}>Close</Text>
      </Pressable>
    </View>
  );
};

export default ImageExpanded;
