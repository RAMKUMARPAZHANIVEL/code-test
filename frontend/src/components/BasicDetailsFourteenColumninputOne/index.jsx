import React from "react";

import { Input } from "components";

const BasicDetailsFourteenColumninputOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <Input
          wrapClassName="w-[100%]"
          className="font-inter font-light p-[0] placeholder:text-gray_801 text-[12px] text-gray_801 text-left w-[100%]"
          name="input_One"
          placeholder="Enter the namespace"
        ></Input>
      </div>
    </>
  );
};

BasicDetailsFourteenColumninputOne.defaultProps = {};

export default BasicDetailsFourteenColumninputOne;
