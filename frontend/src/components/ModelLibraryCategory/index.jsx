import React from "react";

import { Img, Text } from "components";

const ModelLibraryCategory = (props) => {
  return (
    <>
      <div 
        onClick={() => props?.updateSelectedModel(props?.productcatalog)}
        className={`${props?.selectedModelName === props.productcatalog ? "bg-bluegray_906 border-[2px] border-solid border-teal_A400": "bg-gray_901"} ${props.className}`}>
        <Img
          src={props?.imgUrl}
          className="h-[90px] w-[90px]"
          alt="report"
        />
        <Text
          className="font-inter font-semibold text-center text-gray_50 w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.productcatalog}
        </Text>
      </div>
    </>
  );
};

ModelLibraryCategory.defaultProps = { productcatalog: "Product Catalog" };

export default ModelLibraryCategory;
