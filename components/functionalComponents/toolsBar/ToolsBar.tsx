// React
import React, { FC, RefObject } from "react";

//React native
import { View, TouchableOpacity } from "react-native";
import { SignatureViewRef } from "react-native-signature-canvas";
import ViewShot from "react-native-view-shot";

// Components
import Icon from "../icon/icon";

// Utils
import {
  undo,
  redo,
  clear,
  erase,
  draw,
} from "../../../utils/signatureBoardUtils";
import { pickImage, captureScreen } from "../../../utils/cameraUtils";
import {
  toolsIconsTop,
  toolsIconsBottom,
} from "../../../utils/signatureBoardUtils";

// Styles
import ToolsBarStyles from "./ToolsBarStyles";

interface ToolsBarProps {
  top?: boolean;
  boardRef: RefObject<SignatureViewRef>;
  screenRef?: RefObject<ViewShot>;
  showColorPicker?: () => void;
  showSizePicker?: () => void;
  showCamera?: () => void;
  changeBgImage?: (image: string | undefined | null) => void;
}

const ToolsBar: FC<ToolsBarProps> = (props) => {
  const mapIcons = (icon: any, index: number) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={async () => {
          switch (icon.icon) {
            case "undo":
              undo(props.boardRef);
              break;
            case "redo":
              redo(props.boardRef);
              break;
            case "clear":
              clear(props.boardRef);
              break;
            case "erase":
              erase(props.boardRef);
              break;
            case "pencil":
              draw(props.boardRef);
              break;
            case "palette":
              props.showColorPicker && props.showColorPicker();
              break;
            case "gallery":
              const pickedImage = await pickImage();
              props.changeBgImage && props.changeBgImage(pickedImage);
              break;
            case "save":
              await captureScreen(props.screenRef);
              break;
            case "camera":
              props.showCamera && props.showCamera();
              break;
            case "pencil-thickness":
              props.showSizePicker && props.showSizePicker();
          }
        }}
        style={ToolsBarStyles.IconWrapper}
      >
        <Icon src={icon.src} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[ToolsBarStyles.ToolsBarContainer]}>
      {props.top ? toolsIconsTop.map(mapIcons) : toolsIconsBottom.map(mapIcons)}
    </View>
  );
};

export default ToolsBar;
