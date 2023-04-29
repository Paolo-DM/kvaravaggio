// React
import React, { FC, useRef, useState } from "react";

// React Native
import { View, Modal, StyleSheet, Image, Button } from "react-native";
import ViewShot from "react-native-view-shot";

// Signature
import SignatureScreen, {
  SignatureViewRef,
} from "react-native-signature-canvas";

// Screens & Components
import ColorPickerPanel from "../hookComponents/colorPickerPanel/ColorPickerPanel";
import CameraScreen from "../../screens/cameraScreen/CameraScreen";
import PenSizePicker from "../functionalComponents/penSizePicker/PenSizePicker";

// Styles
import SignatureBoardStyles from "./SignatureBoardStyles";
import { webStyle } from "./SignatureBoardStyles";
import ToolsBar from "../functionalComponents/toolsBar/ToolsBar";

interface SignatureBoardProps {
  // onOK: (signature) => void;
}

interface State {
  showColorPicker: boolean;
  showChangePenSize: boolean;
  isCameraOpen: boolean;
  bgImage: string;
  signature: string;
}

const initialState: State = {
  showColorPicker: false,
  showChangePenSize: false,
  isCameraOpen: false,
  bgImage: "",
  signature: "",
};

const SignatureBoard: FC<SignatureBoardProps> = (SignatureBoardProps) => {
  // refs
  const boardRef = useRef<SignatureViewRef>(null);
  const screenshotRef = useRef<ViewShot>(null);

  const [state, setState] = useState<State>(initialState);

  function showColorPicker(): void {
    setState({ ...state, showColorPicker: true });
  }

  function hideColorPicker(): void {
    setState({ ...state, showColorPicker: false });
  }

  function showCamera(): void {
    setState({ ...state, isCameraOpen: true });
  }

  function showSizePicker(): void {
    setState({ ...state, showChangePenSize: true });
  }

  function hideSizePicker(): void {
    setState({ ...state, showChangePenSize: false });
  }

  // Called after ref.current.readSignature() reads a non-empty base64 string
  const handleOK = (signature: string) => {
    setState({ ...state, signature: signature });
  };

  // Called after ref.current.clearSignature()
  const handleClear = () => {
    setState({ ...state, signature: "", bgImage: "" });
  };

  // Called after end of stroke
  const handleEnd = () => {
    boardRef.current?.readSignature();
  };

  const changeColor = (color: string) => {
    console.log("changeColor: ", color);
    boardRef.current?.changePenColor(color);
  };

  const changeBgImage = (image: string | null | undefined) => {
    setState({
      ...state,
      isCameraOpen: false,
      bgImage: "data:image/png;base64," + image,
    });
  };

  return (
    <>
      {!state.isCameraOpen && (
        <>
          <ToolsBar
            top={true}
            boardRef={boardRef}
            screenRef={screenshotRef}
            changeBgImage={changeBgImage}
            showCamera={showCamera}
          />
          <View style={SignatureBoardStyles.signatureBoardContainer}>
            <ViewShot
              ref={screenshotRef}
              options={{ format: "png", quality: 1 }}
              style={{
                flex: 1,
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              {state.bgImage !== "" && (
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                  }}
                  source={{ uri: state.bgImage }}
                />
              )}
              {state.signature !== "" && (
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                  }}
                  source={{ uri: state.signature }}
                />
              )}
            </ViewShot>

            <SignatureScreen
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                zIndex: 5,
              }}
              descriptionText="Drawing Board"
              ref={boardRef}
              onOK={handleOK}
              onEnd={handleEnd}
              onUndo={handleEnd}
              onRedo={handleEnd}
              onClear={handleClear}
              bgSrc={state.bgImage}
              webStyle={webStyle}
            />

            <Modal
              onRequestClose={hideColorPicker}
              visible={state.showColorPicker}
              animationType="slide"
            >
              <ColorPickerPanel
                closeModal={hideColorPicker}
                changeColor={changeColor}
              />
            </Modal>
          </View>
          {state.showChangePenSize && (
            <PenSizePicker
              boardRef={boardRef}
              hideSizePicker={hideSizePicker}
            />
          )}
          <ToolsBar
            boardRef={boardRef}
            showColorPicker={showColorPicker}
            showSizePicker={showSizePicker}
          />
        </>
      )}
      {state.isCameraOpen && <CameraScreen changeBgImage={changeBgImage} />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  pickerContainer: {
    alignSelf: "center",
    width: 300,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  panelStyle: {
    borderRadius: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  sliderStyle: {
    borderRadius: 20,
    marginTop: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  previewTxtContainer: {
    paddingTop: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#bebdbe",
  },
  swatchesContainer: {
    paddingTop: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#bebdbe",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: 10,
  },
  swatchStyle: {
    borderRadius: 20,
    height: 30,
    width: 30,
    margin: 0,
    marginBottom: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  openButton: {
    width: "100%",
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  closeButton: {
    position: "absolute",
    bottom: 20,
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    alignSelf: "center",
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default SignatureBoard;
