import React from "react";

import FETechStackColumnglobe from "components/FETechStackColumnglobe";
import TechStackDescription from "components/TechStackDescription";
import { Text, Line } from "components";

const TechStackList = ({title, description, rhsDescription, techList, updateTech, selectedTech,multipleSelection,addToList,addedList, removeFromList }) => {

  return (
    <>  
        <div className="flex items-start justify-start w-[100%]">
            <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                    className="font-medium text-gray_50 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                    >
                    {title}
                    </Text>
                    <Text
                    className="font-normal not-italic text-gray_501 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                    >
                    {description}
                    </Text>
                </div>
                </div>
                <Line className="bg-gray_801 h-[1px] w-[100%]" />
            </div>
        </div>
        <div className="flex md:flex-col flex-row gap-[17px] items-start justify-between w-[100%]">
        <div className="flex md:flex-1 items-center justify-start md:mt-[0] mt-[24px] md:w-[100%] w-[48%]">
            <div className="sm:gap-[20px] gap-[24px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
            {techList.map((item, index) => {
                return(
                <FETechStackColumnglobe
                className="cursor-pointer flex flex-1 flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]"
                item={item}
                updateTech={updateTech}
                selectedTech={selectedTech}
                key={index}
                locked={item?.locked}
                addToList = {addToList}
                removeFromList={removeFromList}
                multipleSelection = {multipleSelection}
                addedList = {addedList}
                />
                );
            })}
            </div>
        </div>
        <TechStackDescription selectedTech={selectedTech} rhsDescription={rhsDescription}/>
        </div>
    </>
  );
};

 TechStackList.defaultProps = {
    multipleSelection:false,
 };
export default TechStackList;
