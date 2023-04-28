import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";
import { Alert } from "react-native";

const requestCameraPermission = async () => {
  const { status } = await Camera.requestCameraPermissionsAsync();
  return status === "granted";
};

const requestLibraryPermission = async () => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  return status === "granted";
};

const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    base64: true,
    quality: 1,
  });

  if (!result.canceled) {
    return result.assets[0].base64;
  }
};

const captureScreen = async (ref: any) => {
  try {
    let result = await captureRef(ref);
    console.log("result:", result);
    saveImage(result);
    Alert.alert("Success", "Image saved to gallery!", [{ text: "OK" }]);
  } catch (snapshotError) {
    console.error(snapshotError);
  }
};

const saveImage = async (image: string) => {
  const permission = await requestLibraryPermission();
  if (permission) {
    const asset = await MediaLibrary.createAssetAsync(image);
    await MediaLibrary.createAlbumAsync("Kvaravaggio", asset, false);
    return asset;
  }
};

const getImages = async () => {
  const permission = await requestLibraryPermission();
  console.log("permission:", permission);
  if (permission) {
    const albums = await MediaLibrary.getAlbumsAsync();
    const album = albums.find((album) => album.title === "Kvaravaggio");
    console.log("album:", album);
    if (album) {
      const assets = await MediaLibrary.getAssetsAsync({
        album: album,
        first: 200,
      });
      console.log("assets:", assets);
      // console.log("assets.assets:", assets.assets[0].uri);
      return assets;
    }
  }
};

const deleteImage = async (image: string) => {
  const permission = await requestLibraryPermission();
  if (permission) {
    const asset = await MediaLibrary.deleteAssetsAsync(image);
    return asset;
  }
};

// Delete a specific asset from an album
const deleteImageFromAlbum = async (idImage: string) => {
  console.log("asset:", idImage);
  const permission = await requestLibraryPermission();
  if (permission) {
    const albums = await MediaLibrary.getAlbumsAsync();
    const album = albums.find((album) => album.title === "Kvaravaggio");
    if (album) {
      const assets = await MediaLibrary.getAssetsAsync({
        album: album,
        first: 200,
      });
      const assetToDelete: any = assets.assets.find(
        (item) => item.id === idImage
      );
      // Delete the asset
      await MediaLibrary.deleteAssetsAsync([assetToDelete]);
      Alert.alert("Success", "Image deleted from gallery!", [{ text: "OK" }]);
      // Get the updated assets
      const updatedAssets = await MediaLibrary.getAssetsAsync({
        album: album,
        first: 200,
      });
      return updatedAssets;
    }
  }
};

const takePicture = async (cameraRef: any) => {
  if (cameraRef.current) {
    const options = {
      quality: 1,
      base64: true,
      skipProcessing: true,
    };
    try {
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.base64;
      if (source) {
        await cameraRef.current.pausePreview();
        return source;
      }
    } catch (error) {
      console.log("error", error);
    }
  }
};

export {
  requestCameraPermission,
  requestLibraryPermission,
  pickImage,
  captureScreen,
  takePicture,
  getImages,
  deleteImage,
  deleteImageFromAlbum,
};
