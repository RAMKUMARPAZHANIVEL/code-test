import React from "react";

import { Input, Img } from "components";

const SettingsOneSidebar = (props) => {
  return (
    <>
      <div className={props.className}>
        <Input
          wrapClassName="bg-gray_801 flex mb-[750px] mt-[13px] pl-[13px] pr-[35px] py-[12px] rounded-[4px] w-[100%]"
          className="font-inter font-medium p-[0] placeholder:text-gray_50 sm:pr-[20px] text-[16px] text-gray_50 text-left w-[100%]"
          name="menuitem"
          placeholder="Github Account"
          prefix={
            <Img
              src="images/img_user_gray_50.svg"
              className="mr-[12px] my-[auto]"
              alt="user"
            />
          }
        ></Input>
      </div>
    </>
  );
};

SettingsOneSidebar.defaultProps = {};

export default SettingsOneSidebar;
