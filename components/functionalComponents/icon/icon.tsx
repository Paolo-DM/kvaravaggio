// React
import React, { FC } from "react";

// React Native
import { Image, ImageSourcePropType } from "react-native";

interface IconProps {
  // icon: string;
  src: ImageSourcePropType;
}

const Icon: FC<IconProps> = (props: IconProps) => {
  return <Image source={props.src} style={{ width: 36, height: 36 }} />;
};

export default Icon;
