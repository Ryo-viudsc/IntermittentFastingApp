import React, { Dispatch, SetStateAction } from "react";
import { BorderlessButton } from "react-native-gesture-handler";

import Icons, {IconsProps} from "./Icons";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

interface IconsButtonProps extends IconsProps {
    modalVisible: boolean;
    setModalVisible:  Dispatcher<boolean>; //( {ModalVisible} : any ) => void;
}

const IconsButton = ({ setModalVisible, modalVisible, ...props }: IconsButtonProps) => {
  
  
  return (
    <BorderlessButton style={{justifyContent: "center"}}  onPress={ () => {setModalVisible(!modalVisible)} } >
      <Icons {...props} />
    </BorderlessButton>
  );
};

IconsButton.defaultProps = {
  iconRatio: 0.7,
};

export default IconsButton;