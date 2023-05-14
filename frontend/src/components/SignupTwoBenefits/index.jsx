import React from "react";

import { Img, Text, PagerIndicator } from "components";
import ComponentNavigator from "components/ComponentNavigator";
const SignupTwoBenefits = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[40px] items-center justify-start mt-[48px] self-stretch sm:w-[100%] w-[auto]">
          <Img
            src="images/img_frame_gray_802.svg"
            className="h-[413px] w-[397px]"
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

SignupTwoBenefits.defaultProps = {
  title: "Choice of Technologies",
  description:
    "Freedom to choose your own technology stack based on project needs. Select any framework or library in the layers and tiers to create your own tech stack, e.g. Angular, Spring MVC, JPA, Oracle DB. The domain model is automatically knitted with the application code. The layers and tiers are smoothly integrated, irrespective of the underlying frameworks",
};

export default SignupTwoBenefits;
