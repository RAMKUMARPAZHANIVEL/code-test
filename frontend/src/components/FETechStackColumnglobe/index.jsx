import React from "react";

import { Img, Text } from "components";

const FETechStackColumnglobe = ({item, locked, addToList, removeFromList, updateTech, className, addedList, multipleSelection, selectedTech }) => {
  const updateAddedList = (item) => {
    const isItemAddedAlready = addedList.find(elem => elem.name === (item.name))
    if(isItemAddedAlready){
        removeFromList(item);
        updateTech("");
    } 
    else{
    addToList(item);
    updateTech(item);
    }
  }
  return (
    <>
    {!locked ? 
      <div 
        className={`${ multipleSelection ? (addedList.find(elem => elem['name'] === (item?.name))? "bg-bluegray_906 border-[2px] border-solid border-teal_A400" : "bg-gray_901")
          :
          selectedTech.name === item.name ? "bg-bluegray_906 border-[2px] border-solid border-teal_A400": "bg-gray_901"} ${className}}`}
          onClick = {() => {multipleSelection ? updateAddedList(item) : updateTech(item)}}
          >
        <Img
          src={item.src}
          className="h-[98px] w-[auto]"
          alt="globe"
        />
        <Text
          className="font-inter font-semibold text-gray_50 text-left w-[auto]"
          as="h6"
          variant="h6"
        >
          {item.name}
        </Text>
      </div> :
      <div 
        className={`${"bg-gray_901"} ${className}`}>
      <div className="flex flex-row gap-[20px] items-start justify-between w-[100%]">
        <Img
          src={item.src}
          className= {`${locked ? "grayscale" : null} h-[106px] mt-[16px] w-[106px]`}
          alt="location"
        />
        { locked ?  
        <Img
          src="images/img_lock_gray_300.svg"
          className="h-[24px] w-[24px]"
          alt="lock"
        /> : null }
        
      </div>
        
        <Text
          className={`${locked ? "text-gray_801" : "text-gray_50"} font-inter font-semibold text-center text-gray_50 w-[auto]`}
          as="h6"
          variant="h6"
        >
          {item?.name}
        </Text>
      </div>
      }
    </>
  );
};

FETechStackColumnglobe.defaultProps = { name: "React", src: "images/img_globe_light_blue_300.svg", locked: false };

export default FETechStackColumnglobe;
