import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";

import RoundedIcon, { RoundedIconProps } from "./RoundedIcon";

//type Dispatcher<S> = Dispatch<SetStateAction<S>>;

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress?: () => void;

  // modalVisible?: boolean;
  // setModalVisible?: Dispatcher<boolean> | undefined;
}

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
  
  
  return (
    <BorderlessButton style={{justifyContent: "center"}} {...{ onPress }}>
      <RoundedIcon {...props} />
    </BorderlessButton>
  );
};

RoundedIconButton.defaultProps = {
  iconRatio: 0.7,
};

export default RoundedIconButton;