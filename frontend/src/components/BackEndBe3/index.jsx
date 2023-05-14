import React from "react";

import { Img, Text } from "components";

const BackEndBe3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_volume.svg"
          className="h-[90px] w-[90px]"
          alt="volume"
        />
        <Text
          className="font-inter font-semibold text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.nodejs}
        </Text>
      </div>
    </>
  );
};

BackEndBe3.defaultProps = { nodejs: "Node JS" };

export default BackEndBe3;
