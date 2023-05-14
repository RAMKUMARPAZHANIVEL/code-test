import React from "react";

import SettingsOneSidemenu from "components/SettingsOneSidemenu";
import SettingsOneSidebar from "components/SettingsOneSidebar";
import { Text, Line, Img, Button } from "components";

const SettingsOnePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start max-w-[1256px] mx-[auto] md:px-[20px] w-[100%]">
          <SettingsOneSidemenu className="bg-gray_901 border-gray_801 border-r-[1px] border-solid flex flex-col md:hidden justify-start w-[72px]" />
          <SettingsOneSidebar className="bg-gray_901 flex flex-1 flex-col items-center justify-start p-[11px] w-[100%]" />
          <div className="flex flex-1 flex-col items-center justify-start md:ml-[0] ml-[24px] md:mt-[0] mt-[32px] w-[100%]">
            <div className="flex items-start justify-start max-w-[912px] w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_50 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Github Account
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_501 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Update your photo and personal details here.
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray_801 h-[1px] w-[100%]" />
              </div>
            </div>
            <Img
              src="images/img_githubmark1.svg"
              className="h-[132px] mt-[149px] w-[auto]"
              alt="githubmarkOne"
            />
            <Text
              className="font-normal mt-[26px] not-italic text-gray_300 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              No Github Account Connected
            </Text>
            <Text
              className="font-normal mt-[9px] not-italic text-gray_501 text-left w-[auto]"
              variant="body2"
            >
              Connect a github account to commit a project
            </Text>
            <Button
              className="bg-teal_A400 cursor-pointer flex items-center justify-center min-w-[206px] mt-[32px] px-[20px] py-[16px] rounded-[4px] w-[auto]"
              leftIcon={
                <Img
                  src="images/img_plus_gray_900.svg"
                  className="mr-[8px]"
                  alt="plus"
                />
              }
            >
              <div className="font-medium text-[16px] text-gray_900 text-left">
                Connect Account
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsOnePage;
