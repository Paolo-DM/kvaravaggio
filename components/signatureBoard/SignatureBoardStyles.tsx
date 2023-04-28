import { Dimensions, StyleSheet } from "react-native";

const SignatureBoardStyles = StyleSheet.create({
  signatureBoardContainer: {
    flex: 1,
    position: "relative",
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export const webStyle = `
.m-signature-pad {
  border: none;
  margin: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  
}
.m-signature-pad img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.m-signature-pad--body {border: none;}
.m-signature-pad--footer {display: none; margin: 0px; }
`;

export default SignatureBoardStyles;
