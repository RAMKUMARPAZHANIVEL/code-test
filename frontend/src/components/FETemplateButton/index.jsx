import React from "react";

import { Text } from "components";

const FETemplateButton = (props) => {
  return (
    <>
      <div className={props.className} onClick={props?.onClick}>
        <Text
          className="font-inter font-medium text-gray_300 text-left w-[auto]"
          variant="body2"
        >
          {props?.text_One}
          
        </Text>
      </div>
    </>
  );
};

FETemplateButton.defaultProps = { text_One: "Selected Screens (0)" };

export default FETemplateButton;
