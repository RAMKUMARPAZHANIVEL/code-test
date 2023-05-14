import React from "react";

import { Img, Text } from "components";

const BackEndBe2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_pythonicon1.png"
          className="h-[90px] md:h-[auto] object-cover w-[90px]"
          alt="pythoniconOne"
        />
        <Text
          className="font-inter font-semibold text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.python}
        </Text>
      </div>
    </>
  );
};

BackEndBe2.defaultProps = { python: "Python" };

export default BackEndBe2;
