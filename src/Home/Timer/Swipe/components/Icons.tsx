import React from 'react';
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Text } from "../../../../components";
import { Theme } from "../../../../components/Theme";

export interface IconsProps {
    name: string;
    size: number;
    color: keyof Theme["colors"];
    backgroundColor: keyof Theme["colors"];
    iconRatio: number;
  }
  //colors {value: key, value: key, .... } 
  const Icons = ({
    name,
    size,
    color,
    backgroundColor,
    //iconRatio,
  }: IconsProps) => {
    const iconSize = 50;//size * iconRatio;
    return (
      <Box
        height={size}
        width={size}
        justifyContent="center"
        alignItems="center"
        style={{ borderRadius: size / 9.0 }}
        {...{ backgroundColor }}
      >
       <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
          <Icon size={46} {...{ name }} />
        </Text>
      </Box>
    );
  };
  
  Icons.defaultProps = {
    iconRatio: 0.,
  };
  
  export default Icons;