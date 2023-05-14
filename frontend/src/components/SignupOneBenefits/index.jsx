import React from "react";

import { Img, Text, PagerIndicator } from "components";
import ComponentNavigator from "components/ComponentNavigator";

const SignupOneBenefits = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[40px] items-center justify-start mt-[48px] self-stretch sm:w-[100%] w-[auto]">
          <Img
            src="images/img_frame.svg"
            className="h-[413px] w-[454px]"
            alt="frame"
          />
          <div className="flex flex-col gap-[20px] items-center justify-start sm:w-[100%] w-[557px]">
            <Text
              className="font-inter font-semibold text-center text-gray_50 w-[auto]"
              as="h2"
              variant="h2"
            >
              {props?.title}
            </Text>
            <Text
              className="font-inter font-normal leading-[150.00%] md:max-w-[100%] max-w-[557px] not-italic text-center text-gray_501"
              as="h6"
              variant="h6"
            >
              {props?.description}
            </Text>
          </div>
        </div>
        <ComponentNavigator count={3} setIndexToShow={props?.setIndexToShow} indexToShow={props?.indexToShow}/>

        {/* <PagerIndicator
          className="flex gap-[8px] h-[6px] items-center justify-center mb-[24px] self-stretch w-[52px]"
          count={3}
          activeCss="inline-block cursor-pointer h-[6px] bg-gray_50 w-[24px] rounded-[3px]"
          activeIndex={1}
          inactiveCss="inline-block cursor-pointer rounded-[50%] h-[6px] bg-gray_50_87 w-[6px]"
          selectedWrapperCss="inline-block"
          unselectedWrapperCss="inline-block"
        /> */}
      </div>
    </>
  );
};

SignupOneBenefits.defaultProps = {
  title: "Generate Code Instantly",
  description:
    "End-to-end application code is generated in a few minutes. It’s not just skeleton code, it is a fully functional code. The platform takes care of code build, executing pre-generated unit test cases, checking-in to Github. Supports adding toolchain for code review, deployment, so on.",
};

export default SignupOneBenefits;
