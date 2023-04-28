// React
import React, { FunctionComponent, useState } from "react";

// React Native
import { View, ImageBackground } from "react-native";

// Components
import SignatureBoard from "../../components/signatureBoard/SignatureBoard";

// Styles
import DrawingBoardScreenStyles from "./DrawingBoardScreenStyles";

type DrawingBoardProps = {};

// function DrawingBoardScreen({}: Props) {
//   return <div>DrawingBoardScreen</div>;
// }

const DrawingBoardScreen: FunctionComponent<DrawingBoardProps> = () => {
  return (
    <View style={DrawingBoardScreenStyles.drawingBoardScreenContainer}>
      <SignatureBoard />
    </View>
  );
};

export default DrawingBoardScreen;
