// React
import React, { FunctionComponent, useState } from "react";

// React Native
import { Image, TouchableOpacity, Modal } from "react-native";

// Styles
import ImageCardStyles from "./ImageCardStyles";

// Components
import Icon from "../../functionalComponents/icon/icon";
import ImageExpanded from "../../functionalComponents/imageExpanded/ImageExpanded";

// Icons
const enlargeIcon = require("../../../assets/images/gallery/expand.png");
const binIcon = require("../../../assets/images/gallery/bin.png");

interface ImageCardProps {
  source: string;
  id: string;
  onImageDelete: (id: string) => () => Promise<void>;
}

interface State {
  isPressed: boolean;
  isModalOpen: boolean;
}

const initialState: State = {
  isPressed: false,
  isModalOpen: false,
};

const ImageCard: FunctionComponent<ImageCardProps> = (
  props: ImageCardProps
) => {
  const [state, setState] = useState<State>(initialState);

  const showIcons = () => {
    setState({ ...state, isPressed: !state.isPressed });
  };

  const openImageModal = () => {
    console.log("openImageModal");
    setState({ ...state, isModalOpen: true, isPressed: false });
  };

  const closeImageModal = () => {
    setState({ ...state, isModalOpen: false, isPressed: false });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal
          animationType="fade"
          visible={state.isModalOpen}
          onRequestClose={closeImageModal}
        >
          <ImageExpanded
            source={props.source}
            closeImageModal={closeImageModal}
          />
        </Modal>
      )}
      {!state.isModalOpen && (
        <>
          <TouchableOpacity
            style={ImageCardStyles.imageCardContainer}
            onLongPress={showIcons}
            // onPressOut={hideIcons}
          >
            <Image
              source={{
                uri: props.source,
              }}
              resizeMode={"contain"}
              style={ImageCardStyles.imageCard}
            />
          </TouchableOpacity>
          {state.isPressed && (
            <>
              <TouchableOpacity
                style={[
                  ImageCardStyles.cardIconContainer,
                  ImageCardStyles.deleteIconContainer,
                ]}
                onPress={props.onImageDelete(props.id)}
              >
                <Icon src={binIcon} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  ImageCardStyles.cardIconContainer,
                  ImageCardStyles.expandIconContainer,
                ]}
                onPress={openImageModal}
              >
                <Icon src={enlargeIcon} />
              </TouchableOpacity>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ImageCard;
