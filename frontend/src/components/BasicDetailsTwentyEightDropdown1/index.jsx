import React from "react";

import { Text, Img } from "components";

const BasicDetailsTwentyEightDropdown1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute flex h-[max-content] inset-[0] items-center justify-start m-[auto] w-[100%]">
          <Text
            className="font-inter font-normal not-italic text-gray_801 text-left w-[auto]"
            variant="body3"
          >
            {props?.selectpackagema_One}
          </Text>
        </div>
        <Img
          src="images/img_arrowdown_gray_50_24x24.svg"
          className="absolute h-[24px] inset-y-[0] my-[auto] right-[25%] w-[24px]"
          alt="arrowdown"
        />
      </div>
    </>
  );
};

BasicDetailsTwentyEightDropdown1.defaultProps = {
  selectpackagema_One: "Select package management",
};

export default BasicDetailsTwentyEightDropdown1;
