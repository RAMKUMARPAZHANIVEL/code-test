import React from "react";

import { Text } from "components";

const TechStackDescription = ({selectedTech, rhsDescription}) => {
  return (
    <>
  { !selectedTech ? 
              <div className="bg-gray_901 flex md:flex-1 items-center justify-start mb-[128px] p-[128px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[60%]">
                <Text
                  className="font-normal leading-[150.00%] my-[160px] not-italic text-center text-gray_501 w-[100%]"
                  as="h6"
                  variant="h6"
                >
                  {rhsDescription}
                </Text>
              </div> : 
              <>
        <div className="bg-gray_901 flex md:flex-1 flex-col items-start justify-center mb-[128px] p-[24px] sm:px-[20px] md:w-[100%] w-[70%]"> 
          <Text
            className="font-semibold mt-[6px] text-gray_50 text-left w-[auto]"
            as="h4"
            variant="h4"
          >
            {selectedTech.name}
          </Text>
          <Text
            className="font-normal leading-[150.00%] mt-[19px] not-italic text-gray_300 text-left"
            as="h6"
            variant="h6"
          >
            <>
              {selectedTech.description1}
              <br/>
              <br/>
              {selectedTech.description2}
              <br/>
              <br/>
              {selectedTech.description3}
            </>
          </Text>
        </div>
        </>}
    </>
  );
};

export default TechStackDescription;
