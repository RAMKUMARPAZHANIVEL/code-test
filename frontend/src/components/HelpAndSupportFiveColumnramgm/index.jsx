import React from "react";

import { Text,Input } from "components";

const HelpAndSupportFiveColumnramgm = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex items-center justify-start self-stretch sm:w-[100%] w-[100%]">
          {/* <Text
            className="font-inter font-normal not-italic text-gray_300 text-left w-[auto]"
            variant="body3"
          >
            {props?.ramgm}
          </Text> */}
            <Input
          wrapClassName="w-[100%]"
          className="font-inter font-light p-[0] placeholder:text-gray_801 text-[12px] text-gray_300 text-left w-[100%] border-[0px]"
          name={props?.name}
          onChange={props?.onChangeHandler}
          onBlur = {props?.messageOnBlurHandler}
          placeholder={`Enter your ${props?.name}`}
          value = {props?.value}
        ></Input>
        </div>
      </div>
    </>
  );
};

HelpAndSupportFiveColumnramgm.defaultProps = {
  ramgm: "Nulla Lorem mollit cupi|",
};

export default HelpAndSupportFiveColumnramgm;
