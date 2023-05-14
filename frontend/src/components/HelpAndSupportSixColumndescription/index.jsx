import React from "react";

import { Text } from "components";

const HelpAndSupportSixColumndescription = (props) => {
  return (
    <>
      <div className={props.className} onClick= {() => props.setInputFocused(true)}>
        <div className="flex items-center justify-start self-stretch sm:w-[100%] w-[auto]">
          <Text
            className="font-inter font-normal leading-[150.00%] not-italic text-gray_300 text-left"
            variant="body3"
          >
            {props?.description}
          </Text>
        </div>
      </div>
    </>
  );
};

HelpAndSupportSixColumndescription.defaultProps = {
  description: (
    <>
      Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
      cillum dolor. Voluptate exercitation incididunt aliquip deserunt
      reprehenderit elit laborum.
      <br />
      Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
      esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit
      aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id
      deserunt nisi.
    </>
  ),
};

export default HelpAndSupportSixColumndescription;
