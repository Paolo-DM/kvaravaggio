import { SignatureViewRef } from "react-native-signature-canvas";
import { RefObject } from "react";

export const undo = (boardRef: RefObject<SignatureViewRef>) => {
  console.log("undo utils");
  boardRef?.current?.undo();
};

export const redo = (boardRef: RefObject<SignatureViewRef | undefined>) => {
  boardRef.current?.redo();
};

export const clear = (boardRef: RefObject<SignatureViewRef | undefined>) => {
  boardRef.current?.clearSignature();
};

export const erase = (boardRef: RefObject<SignatureViewRef | undefined>) => {
  boardRef.current?.erase();
};

export const draw = (boardRef: RefObject<SignatureViewRef | undefined>) => {
  boardRef.current?.draw();
};

export const changePenSize = (
  boardRef: RefObject<SignatureViewRef | undefined>,
  minWidth: number,
  maxWidth: number
) => {
  boardRef.current?.changePenSize(minWidth, maxWidth);
};

export const toolsIconsTop = [
  {
    icon: "undo",
    src: require("../assets/images/toolsIcons/topIcons/undo.png"),
  },
  {
    icon: "redo",
    src: require("../assets/images/toolsIcons/topIcons/redo.png"),
  },
  {
    icon: "gallery",
    src: require("../assets/images/toolsIcons/topIcons/gallery.png"),
  },
  {
    icon: "camera",
    src: require("../assets/images/toolsIcons/topIcons/camera.png"),
  },
  {
    icon: "save",
    src: require("../assets/images/toolsIcons/topIcons/save.png"),
  },
];

export const toolsIconsBottom = [
  {
    icon: "clear",
    src: require("../assets/images/toolsIcons/bottomIcons/trash.png"),
  },
  {
    icon: "erase",
    src: require("../assets/images/toolsIcons/bottomIcons/eraser.png"),
  },
  {
    icon: "pencil",
    src: require("../assets/images/toolsIcons/bottomIcons/pencil.png"),
  },
  {
    icon: "palette",
    src: require("../assets/images/toolsIcons/bottomIcons/paint.png"),
  },
  {
    icon: "pencil-thickness",
    src: require("../assets/images/toolsIcons/bottomIcons/pencil-thickness.png"),
  },
];
// export const save = (boardRef: RefObject<SignatureViewRef | undefined>) => {
//   boardRef.current?.save();
// };

// export const saveImage = (boardRef) => {
//   boardRef.current?.saveImage();
// };

// export const saveImageToGallery = (boardRef) => {
//   boardRef.current?.saveImageToGallery();
// };

// export const saveImageToGalleryWithCustomName = (boardRef) => {
//   boardRef.current.saveImageToGalleryWithCustomName();
// };

// export const saveImageToGalleryWithCustomNameAndCompression = (boardRef) => {
//   boardRef.current.saveImageToGalleryWithCustomNameAndCompression();
// };

// export const saveImageWithCompression = (boardRef) => {
//   boardRef.current.saveImageWithCompression();
// };

// export const saveImageWithCustomName = (boardRef) => {
//   boardRef.current.saveImageWithCustomName();
// };

// export const saveImageWithCustomNameAndCompression = (boardRef) => {
//   boardRef.current.saveImageWithCustomNameAndCompression();
// };

// export const saveImageWithCustomNameAndCompressionAndQuality = (boardRef) => {
//   boardRef.current.saveImageWithCustomNameAndCompressionAndQuality();
// };

// export const saveImageWithCustomNameAndQuality = (boardRef) => {
//   boardRef.current.saveImageWithCustomNameAndQuality();
// };

// export const saveImageWithQuality = (boardRef) => {
//   boardRef.current.saveImageWithQuality();
// };

// export const saveImageWithQualityAndCompression = (boardRef) => {
//   boardRef.current.saveImageWithQualityAndCompression();
// };

// export const saveImageWithQualityAndCompressionAndCustomName = (boardRef) => {
//   boardRef.current.saveImageWithQualityAndCompressionAndCustomName();
// };

// export const saveImageWithQualityAndCustomName = (boardRef) => {
//   boardRef.current.saveImageWithQualityAndCustomName();
// };

// export const saveImageWithQualityAndCustomNameAndCompression = (boardRef) => {
//   boardRef.current.saveImageWithQualityAndCustomNameAndCompression();
// };

// export const saveImageWithQualityAndCustomNameAndCompressionAndQuality = (
//   boardRef
// ) => {
//   boardRef.current.saveImageWithQualityAndCustomNameAndCompressionAndQuality();
// };
