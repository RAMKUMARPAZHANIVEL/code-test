import React from "react";

import { Img, Text } from "components";

const BackEndBe4 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_settings_gray_50.svg"
          className="h-[90px] w-[90px]"
          alt="settings"
        />
        <Text
          className="font-inter font-semibold mb-[2px] text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.blockchain}
        </Text>
      </div>
    </>
  );
};

BackEndBe4.defaultProps = { blockchain: "Blockchain" };

export default BackEndBe4;
