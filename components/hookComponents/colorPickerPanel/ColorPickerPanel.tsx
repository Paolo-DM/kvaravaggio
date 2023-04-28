import React, { FC, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import ColorPicker, {
  Panel1,
  Swatches,
  OpacitySlider,
  HueSlider,
  colorKit,
  PreviewText,
} from "reanimated-color-picker";
import type { returnedResults } from "reanimated-color-picker";

// Styles
import ColorPickerSyles from "./ColorPickerStyles";

interface ColorPickerPanelProps {
  closeModal: (event: GestureResponderEvent) => void;
  changeColor: (color: string) => void;
}

const ColorPickerPanel: FC<ColorPickerPanelProps> = ({
  closeModal,
  changeColor,
}: ColorPickerPanelProps) => {
  const customSwatches = new Array(6)
    .fill("#fff")
    .map(() => colorKit.randomRgbColor().hex());

  const selectedColor = useSharedValue(customSwatches[0]);
  const backgroundColorStyle = useAnimatedStyle(() => ({
    backgroundColor: selectedColor.value,
  }));

  const onColorSelect = (color: returnedResults) => {
    selectedColor.value = color.hex;
    // Call the changeColor function from the parent component
    changeColor(color.hex);
  };

  return (
    <>
      <Animated.View style={[ColorPickerSyles.container, backgroundColorStyle]}>
        <View style={ColorPickerSyles.pickerContainer}>
          <ColorPicker
            value={selectedColor.value}
            sliderThickness={25}
            thumbSize={24}
            thumbShape="circle"
            onChange={onColorSelect}
            boundedThumb
          >
            <Panel1 style={ColorPickerSyles.panelStyle} />
            <HueSlider style={ColorPickerSyles.sliderStyle} />
            <OpacitySlider style={ColorPickerSyles.sliderStyle} />
            <Swatches
              style={ColorPickerSyles.swatchesContainer}
              swatchStyle={ColorPickerSyles.swatchStyle}
              colors={customSwatches}
            />
            <View style={ColorPickerSyles.previewTxtContainer}>
              <PreviewText style={{ color: "#707070" }} />
            </View>
          </ColorPicker>
        </View>

        <Pressable style={ColorPickerSyles.closeButton} onPress={closeModal}>
          <Text style={{ color: "#707070", fontWeight: "bold" }}>Close</Text>
        </Pressable>
      </Animated.View>
    </>
  );
};

export default ColorPickerPanel;
