import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Theme, Box, Text } from "./Theme";

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  iconRatio: number;
}
//colors {value: key, value: key, .... } 
const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
  //iconRatio,
}: RoundedIconProps) => {
  const iconSize = 50;//size * iconRatio;
  return (
    <Box
      height={size}
      width={size}
      justifyContent="center"
      alignItems="center"
      style={{ borderRadius: size/ 2.5 }}
      {...{ backgroundColor }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon size={46} {...{ name }} />
      </Text>
    </Box>
  );
};

RoundedIcon.defaultProps = {
  iconRatio: 0.7,
};

export default RoundedIcon;