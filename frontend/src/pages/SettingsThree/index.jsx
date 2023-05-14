import React from "react";

import SettingsOneSidemenu from "components/SettingsOneSidemenu";
import SettingsOneSidebar from "components/SettingsOneSidebar";
import { Text, Line, Img, Button } from "components";

const SettingsThreePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start max-w-[1256px] mx-[auto] md:px-[20px] w-[100%]">
          <SettingsOneSidemenu className="bg-gray_901 border-gray_801 border-r-[1px] border-solid flex flex-col md:hidden justify-start w-[72px]" />
          <SettingsOneSidebar className="bg-gray_901 flex flex-1 flex-col items-center justify-start p-[11px] w-[100%]" />
          <div className="flex flex-1 flex-col gap-[24px] items-start justify-start md:ml-[0] ml-[24px] md:mt-[0] mt-[32px] w-[100%]">
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
            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start md:w-[100%] w-[57%]">
              <Img
                src="images/img_image57.png"
                className="h-[56px] md:h-[auto] rounded-[50%] w-[56px]"
                alt="imageFiftySeven"
              />
              <Text
                className="font-normal sm:ml-[0] ml-[8px] not-italic text-gray_50 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Ram G
              </Text>
              <Button className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium sm:ml-[0] ml-[225px] sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[161px]">
                Remove Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsThreePage;
