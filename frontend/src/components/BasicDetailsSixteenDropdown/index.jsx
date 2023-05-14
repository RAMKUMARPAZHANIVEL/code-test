import React from "react";

import { Text, Img, Input } from "components";

const BasicDetailsSixteenDropdown = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_902 border-[1px] border-gray_501 border-solid md:h-[24px] h-[48px] px-[12px] py-[15px] relative rounded-[4px] md:w-[100%] w-[479px]">
          <div className="absolute flex h-[max-content] inset-[0] items-center justify-start m-[auto] w-[100%]">
            <Text
              className="font-inter font-light text-gray_902 text-left w-[auto]"
              variant="body3"
            >
              {props?.selectpackagema_One}
            </Text>
          </div>
          <Img
            src="images/img_arrowup_gray_50.svg"
            className="absolute h-[24px] inset-y-[0] my-[auto] right-[25%] w-[24px]"
            alt="arrowup"
          />
        </div>
        <div className="bg-gray_902 border-[1px] border-gray_501 border-solid flex flex-col items-center justify-end pt-[7px] px-[7px] rounded-[4px] w-[100%]">
          <Input
            wrapClassName="bg-bluegray_906 flex px-[12px] py-[8px] rounded-[4px] sm:w-[100%] w-[455px]"
            className="font-inter font-normal not-italic p-[0] placeholder:text-gray_902 text-[12px] text-gray_902 text-left w-[100%]"
            name="element"
            placeholder="Package Management 1"
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
              {props?.afganistan_Three}
            </Text>
          </div>
          <div className="flex items-start justify-start px-[12px] py-[8px] rounded-[4px] sm:w-[100%] w-[455px]">
            <Text
              className="font-inter font-normal not-italic text-gray_902 text-left w-[auto]"
              variant="body3"
            >
              {props?.afganistan_Three}
            </Text>
          </div>
          <div className="flex items-start justify-start px-[12px] py-[8px] rounded-[4px] sm:w-[100%] w-[455px]">
            <Text
              className="font-inter font-normal not-italic text-gray_902 text-left w-[auto]"
              variant="body3"
            >
              {props?.afganistan_Three}
            </Text>
          </div>
          <div className="flex items-start justify-start px-[12px] py-[8px] rounded-[4px] sm:w-[100%] w-[455px]">
            <Text
              className="font-inter font-normal not-italic text-gray_902 text-left w-[auto]"
              variant="body3"
            >
              {props?.afganistan_Three}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

BasicDetailsSixteenDropdown.defaultProps = {
  selectpackagema_One: "Select package management",
  afganistan: "Package Management 5",
  afganistan_One: "Package Management 5",
  afganistan_Two: "Package Management 5",
  afganistan_Three: "Package Management 5",
};

export default BasicDetailsSixteenDropdown;
