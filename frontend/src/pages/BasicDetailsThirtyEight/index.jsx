import React from "react";

import { Text, Line, Img, SelectBox, Input, Button } from "components";
import UploadModelColumninputOne from "components/UploadModelColumninputOne";
import BasicDetailsFourteenColumninputOne from "components/BasicDetailsFourteenColumninputOne";
import UploadModelColumnenterapplicatioOne from "components/UploadModelColumnenterapplicatioOne";

const BasicDetailsThirtyEightPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between max-w-[1256px] mx-[auto] md:px-[20px] w-[100%]">
         
          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
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
                <UploadModelColumninputOne className="bg-gray_902 border-[1px] border-gray_801 border-solid flex flex-col items-start justify-start px-[12px] py-[15px] rounded-[4px] sm:w-[100%] w-[479px]" />
              </div>
              <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Namespace
                </Text>
                <BasicDetailsFourteenColumninputOne className="bg-gray_902 border-[1px] border-gray_801 border-solid flex flex-col items-start justify-start px-[12px] py-[15px] rounded-[4px] sm:w-[100%] w-[479px]" />
              </div>
            </div>
            <div className="h-[222px] md:h-[242px] mt-[20px] relative w-[100%]">
              <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start max-w-[982px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_300 text-left w-[auto]"
                      variant="body2"
                    >
                      Application Description
                    </Text>
                    <UploadModelColumnenterapplicatioOne
                      className="bg-gray_902 border-[1px] border-gray_801 border-solid flex flex-col h-[96px] md:h-[auto] items-start justify-start max-w-[982px] px-[12px] py-[15px] rounded-[4px] w-[100%]"
                      enterapplicatio_One="Enter application description"
                    />
                  </div>
                  <div className="flex items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-end justify-start md:w-[100%] w-[50%]">
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
                        <Text
                          className="font-medium mt-[5px] text-center text-teal_A400 w-[auto]"
                          variant="body3"
                        >
                          (This will be on hover)
                        </Text>
                      </div>
                      <SelectBox
                        className="bg-gray_902 border-[1px] border-gray_801 border-solid font-normal not-italic px-[12px] py-[15px] rounded-[4px] text-[12px] text-gray_801 text-left w-[100%]"
                        placeholderClassName="text-gray_801"
                        name="dropdown"
                        placeholder="Select architecture"
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
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-col gap-[8px] items-start justify-start right-[0] self-stretch w-[auto]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Database Name
                </Text>
                <Input
                  wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
                  className="font-light p-[0] placeholder:text-gray_801 text-[12px] text-gray_801 text-left w-[100%]"
                  type="text"
                  name="textfield"
                  placeholder="Database name"
                ></Input>
              </div>
              <div className="absolute bottom-[32%] flex flex-col items-start justify-start left-[8%] self-stretch shadow-bs1 w-[auto]">
                <div className="bg-gray_801 flex items-start justify-start px-[12px] py-[8px] rounded-[4px] w-[100%]">
                  <Text
                    className="font-medium text-center text-gray_50 w-[auto]"
                    variant="body3"
                  >
                    Explanation of feature
                  </Text>
                </div>
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-[6px] w-[28px]"
                  alt="arrowdown"
                />
              </div>
            </div>
            <div className="md:gap-[20px] gap-[24px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[20px] w-[100%]">
              <div className="flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
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
                  className="bg-gray_902 border-[1px] border-gray_801 border-solid font-normal not-italic px-[12px] py-[15px] rounded-[4px] text-[12px] text-gray_801 text-left w-[100%]"
                  placeholderClassName="text-gray_801"
                  name="dropdown"
                  placeholder="Select server"
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
              <div className="flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
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
                    alt="warning"
                  />
                </div>
                <SelectBox
                  className="bg-gray_902 border-[1px] border-gray_801 border-solid font-normal not-italic px-[12px] py-[15px] rounded-[4px] text-[12px] text-gray_801 text-left w-[100%]"
                  placeholderClassName="text-gray_801"
                  name="dropdown"
                  placeholder="Select build tool"
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
              <div className="flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
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
            </div>
            <div className="flex flex-col gap-[16px] h-[89px] md:h-[auto] items-start justify-start max-w-[982px] mt-[115px] w-[100%]">
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

export default BasicDetailsThirtyEightPage;
