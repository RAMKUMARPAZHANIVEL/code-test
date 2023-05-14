import React from "react";

import { Img, Text } from "components";

const BackEndSelectedBe = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_springioicon1.svg"
          className="h-[90px] w-[90px]"
          alt="springioiconOne"
        />
        <Text
          className="font-inter font-semibold text-gray_50 text-left w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.spring}
        </Text>
      </div>
    </>
  );
};

BackEndSelectedBe.defaultProps = { spring: "Spring" };

export default BackEndSelectedBe;
