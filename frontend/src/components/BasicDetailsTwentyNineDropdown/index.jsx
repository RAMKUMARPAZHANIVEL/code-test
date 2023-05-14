import React from "react";

import { Text, Img, Input } from "components";

const BasicDetailsTwentyNineDropdown = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_902 border-[1px] border-gray_501 border-solid md:h-[24px] h-[48px] px-[12px] py-[15px] relative rounded-[4px] md:w-[100%] w-[479px]">
          <div className="absolute flex h-[max-content] inset-[0] items-center justify-start m-[auto] w-[100%]">
            <Text
              className="font-inter font-light text-gray_300 text-left w-[auto]"
              variant="body3"
            >
              {props?.selectserver}
            </Text>
          </div>
          <Img
            src="images/img_arrowup_gray_50.svg"
            className="absolute h-[24px] inset-y-[0] my-[auto] right-[25%] w-[24px]"
            alt="arrowup"
          />
        </div>
        <div className="bg-gray_902 border-[1px] border-gray_501 border-solid flex flex-col items-center justify-end pt-[8px] px-[8px] rounded-[4px] w-[100%]">
          <Input
            wrapClassName="bg-bluegray_906 flex px-[12px] py-[8px] rounded-[4px] sm:w-[100%] w-[455px]"
            className="font-inter font-normal not-italic p-[0] placeholder:text-gray_902 text-[12px] text-gray_902 text-left w-[100%]"
            name="serverCounter"
            placeholder="Server 1"
            suffix={
              <Img
                src="images/img_checkmark_teal_a400_20x20.svg"
                className="ml-[35px] my-[auto]"
                alt="checkmark"
              />
            }
          ></Input>
          <div className="flex items-start justify-start px-[12px] py-[8px] rounded-[4px] sm:w-[100%] w-[455px]">
            <Text
              className="font-inter font-normal not-italic text-gray_902 text-left w-[auto]"
              variant="body3"
            >
              {props?.serverCounter_Four}
            </Text>
          </div>
          <div className="flex items-start justify-start px-[12px] py-[8px] rounded-[4px] sm:w-[100%] w-[455px]">
            <Text
              className="font-inter font-normal not-italic text-gray_902 text-left w-[auto]"
              variant="body3"
            >
              {props?.serverCounter_Four}
            </Text>
          </div>
          <div className="flex items-start justify-start px-[12px] py-[8px] rounded-[4px] sm:w-[100%] w-[455px]">
            <Text
              className="font-inter font-normal not-italic text-gray_902 text-left w-[auto]"
              variant="body3"
            >
              {props?.serverCounter_Four}
            </Text>
          </div>
          <div className="flex items-start justify-start px-[12px] py-[8px] rounded-[4px] sm:w-[100%] w-[455px]">
            <Text
              className="font-inter font-normal not-italic text-gray_902 text-left w-[auto]"
              variant="body3"
            >
              {props?.serverCounter_Four}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

BasicDetailsTwentyNineDropdown.defaultProps = {
  selectserver: "Select server",
  serverCounter_One: "Server 5",
  serverCounter_Two: "Server 5",
  serverCounter_Three: "Server 5",
  serverCounter_Four: "Server 5",
};

export default BasicDetailsTwentyNineDropdown;
