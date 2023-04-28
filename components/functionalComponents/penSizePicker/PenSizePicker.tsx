// React
import React, { FC, useState, RefObject } from "react";

// React Native
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SignatureViewRef } from "react-native-signature-canvas";

// Slider
import Slider from "@react-native-community/slider";

// Utils
import { changePenSize } from "../../../utils/signatureBoardUtils";

// Icons
const checkIcon = require("../../../assets/images/sizePicker/check.png");

// Styles
import SizePickerStyles from "./SizePickerStyles";

interface Props {
  boardRef: RefObject<SignatureViewRef>;
  hideSizePicker: () => void;
}

interface State {
  penSize: number;
}

const initialState: State = {
  penSize: 1,
};

const PenSizePicker = (props: Props) => {
  const [state, setState] = useState<State>(initialState);

  function changeSize(value: number) {
    changePenSize(props.boardRef, 1, value);
    setState({ ...state, penSize: value });
  }

  return (
    <View style={SizePickerStyles.sizePickerContainer}>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={1}
        maximumValue={20}
        minimumTrackTintColor="gray"
        maximumTrackTintColor="#000000"
        onValueChange={changeSize}
        value={state.penSize}
        step={1}
      />
      <Text style={SizePickerStyles.sizePickerButtonText}>{state.penSize}</Text>
      <TouchableOpacity
        style={SizePickerStyles.sizePickerButton}
        onPress={props.hideSizePicker}
      >
        <Image source={checkIcon} style={SizePickerStyles.sizePickerIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default PenSizePicker;
