import React, { useState, useCallback } from "react";
// React Native
import { View, Text } from "react-native";
// React Navigation
import { useFocusEffect } from "@react-navigation/native";

// FlashList
import { FlashList } from "@shopify/flash-list";

// Utils
import { getImages, deleteImageFromAlbum } from "../../utils/cameraUtils";

// Components
import ImageCard from "../../components/hookComponents/imageCard/ImageCard";

// Styles
import GalleryStyles from "./GalleryStyles";
import { Asset } from "expo-media-library";

interface GalleryProps {}

interface State {
  images: Asset[] | undefined;
  showImageModal: boolean;
}

const initialState: State = {
  images: [],
  showImageModal: false,
};

const GalleryScreen = (props: GalleryProps) => {
  const [state, setState] = useState<State>(initialState);

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      getImagesFromAlbum();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log("GalleryScreen unmounted");
      };
    }, [])
  );

  const getImagesFromAlbum = async () => {
    const images = await getImages();
    setState({ ...state, images: images?.assets });
  };

  const onImageDelete = (id: string) => async () => {
    const images = await deleteImageFromAlbum(id);
    console.log("images:", images);
    setState({ ...state, images: images?.assets });
  };

  return (
    <View style={GalleryStyles.galleryContainer}>
      <Text style={GalleryStyles.titleText}>My Gallery</Text>
      <FlashList
        data={state.images}
        extraData={state.images}
        estimatedItemSize={260}
        numColumns={2}
        renderItem={({ item }) => (
          <ImageCard
            source={item.uri}
            id={item.id}
            onImageDelete={onImageDelete}
          />
        )}
      />
    </View>
  );
};

export default GalleryScreen;
