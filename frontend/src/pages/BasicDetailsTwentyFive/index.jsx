import React from "react";

import { Text, Line, Input, Img, SelectBox, List, Button } from "components";
import BasicDetailsTwentyEightDropdown1 from "components/BasicDetailsTwentyEightDropdown1";
import BasicDetailsTwentyFiveDropdown from "components/BasicDetailsTwentyFiveDropdown";

const BasicDetailsTwentyFivePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between max-w-[1256px] mx-[auto] md:px-[20px] w-[100%]">
          
          <div className="flex flex-1 flex-col gap-[44px] items-center justify-start w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex items-start justify-start max-w-[982px] w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[100%]">
                    <div className="flex items-start justify-start w-[100%]">
                      <Text
                        className="font-medium text-gray_50 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Basic Details
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray_801 h-[1px] w-[100%]" />
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between mt-[24px] w-[100%]">
                <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Application Name
                  </Text>
                  <Input
                    wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                    name="textfield"
                    placeholder="E-commence"
                  ></Input>
                </div>
                <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Namespace
                  </Text>
                  <Input
                    wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                    name="textfield_One"
                    placeholder="Input value"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start max-w-[982px] mt-[20px] w-[100%]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Application Description
                </Text>
                <Input
                  wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
                  className="font-normal md:h-[auto] not-italic p-[0] placeholder:text-gray_300 sm:h-[auto] text-[12px] text-gray_300 text-left w-[100%]"
                  name="textfield_Two"
                  placeholder="This application is for E-commerce"
                ></Input>
              </div>
              <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between mt-[20px] w-[100%]">
                <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
                    <Text
                      className="font-semibold text-gray_300 text-left w-[auto]"
                      variant="body2"
                    >
                      Architecture
                    </Text>
                    <Img
                      src="images/img_warning.svg"
                      className="h-[12px] w-[12px]"
                      alt="warning"
                    />
                  </div>
                  <SelectBox
                    className="bg-gray_902 border-[1px] border-gray_801 border-solid font-normal not-italic px-[12px] py-[15px] rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                    placeholderClassName="text-gray_300"
                    name="architectureCounter"
                    placeholder="Architecture 1"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_50_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
                <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Database Name
                  </Text>
                  <Input
                    wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                    type="text"
                    name="textfield_Three"
                    placeholder="same as application name"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between mt-[20px] w-[100%]">
                <List
                  className="md:flex-1 flex-col gap-[20px] grid md:w-[100%] w-[49%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                    <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
                      <Text
                        className="font-semibold text-gray_300 text-left w-[auto]"
                        variant="body2"
                      >
                        Server
                      </Text>
                      <Img
                        src="images/img_warning.svg"
                        className="h-[12px] w-[12px]"
                        alt="warning"
                      />
                    </div>
                    <SelectBox
                      className="bg-gray_902 border-[1px] border-gray_801 border-solid font-normal not-italic px-[12px] py-[15px] rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                      placeholderClassName="text-gray_300"
                      name="serverCounter"
                      placeholder="Server 1"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_50_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                    <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
                      <Text
                        className="font-semibold text-gray_300 text-left w-[auto]"
                        variant="body2"
                      >
                        Package Management
                      </Text>
                      <Img
                        src="images/img_warning.svg"
                        className="h-[12px] w-[12px]"
                        alt="warning"
                      />
                    </div>
                    <SelectBox
                      className="bg-gray_902 border-[1px] border-gray_801 border-solid font-normal not-italic px-[12px] py-[15px] rounded-[4px] text-[12px] text-gray_801 text-left w-[100%]"
                      placeholderClassName="text-gray_801"
                      name="dropdown"
                      placeholder="Select package management"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_50_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                </List>
                <div className="flex h-[245px] justify-end relative md:w-[100%] w-[49%]">
                  <div className="flex flex-col gap-[8px] h-[100%] items-start justify-start mb-[71px] mt-[auto] mx-[auto] self-stretch w-[auto]">
                    <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
                      <Text
                        className="font-semibold text-gray_300 text-left w-[auto]"
                        variant="body2"
                      >
                        Package Management
                      </Text>
                      <Img
                        src="images/img_warning.svg"
                        className="h-[12px] w-[12px]"
                        alt="warning_One"
                      />
                    </div>
                    <BasicDetailsTwentyEightDropdown1
                      className="bg-gray_902 border-[1px] border-gray_801 border-solid h-[48px] px-[12px] py-[15px] relative rounded-[4px] sm:w-[100%] w-[479px]"
                      selectpackagema_One="Select package management"
                    />
                  </div>
                  <div className="absolute flex flex-col gap-[8px] h-[100%] inset-[0] items-start justify-start m-[auto] self-stretch w-[auto]">
                    <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
                      <Text
                        className="font-semibold text-gray_300 text-left w-[auto]"
                        variant="body2"
                      >
                        Build Tool
                      </Text>
                      <Img
                        src="images/img_warning.svg"
                        className="h-[12px] w-[12px]"
                        alt="warning_Two"
                      />
                    </div>
                    <BasicDetailsTwentyFiveDropdown
                      className="flex flex-col items-center justify-start w-[100%]"
                      selectbuildtool_One="Select build tool"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] h-[89px] md:h-[auto] items-start justify-start max-w-[982px] w-[100%]">
              <Line className="bg-gray_801 h-[1px] w-[100%]" />
              <div className="flex items-start justify-start w-[100%]">
                <div className="flex flex-row gap-[12px] items-center justify-end w-[100%]">
                  <Button className="border-[1px] border-solid border-teal_A400 cursor-pointer flex-1 font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[100%]">
                    Previous
                  </Button>
                  <Button className="bg-teal_900 cursor-pointer flex-1 font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[100%]">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicDetailsTwentyFivePage;
