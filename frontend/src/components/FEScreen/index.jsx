import React, { useState } from "react";

import { Text, Line, Img, Button } from "components";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FETEMPLATES } from "store/slices/fullstack.slice";
import FETemplateButton from "components/FETemplateButton";
import { useNavigate } from "react-router-dom";
import ButtonNew from "components/ButtonNew";
import { ADD_FRONTEND_FETEMPLATES } from "store/slices/frontend.slice";
import FETemplateselectedModal from "modals/FETemplateselected";
import FETemplateselectedOneModal from "modals/FETemplateselectedOne";

const FEScreen = ({path,selected_feTemplates}) => {
  const [selectedScreen, setSelectedScreen] = useState("");
  const [choosenScreenList, SetChooseScreenList] = useState([]);
  const[feSelectedScreenToRender,SetFeSelectedScreenToRender] = useState(false);
  const[feSelectedScreens,setFeSelectedScreens] = useState(selected_feTemplates);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const project_type = useSelector(store => store.basicInformation.projectType);
  const addToSelectedScreen = (screen) => {
    SetChooseScreenList((curList) => {
      console.log([...curList, screen.name]);
      return [...curList, screen.name];
    });
    console.log(choosenScreenList);
    setFeSelectedScreens((curList) => {
        return [...curList, screen];
    });
  };
  const removeScreenFromList = (screen) => {
    const filteredScreens = choosenScreenList.filter((elem) => elem !== screen?.name);
    SetChooseScreenList(filteredScreens);
    setSelectedScreen(false);
    console.log(choosenScreenList);
    const filteredFeScreens = feSelectedScreens.filter((elem) => elem?.name !== screen?.name);
    setFeSelectedScreens(filteredFeScreens)
  };
  const screenList = [
    {
      name: "Login",
      imgUrl: {
        small: "images/img_image62_1.png",
        large: "images/img_rectangle179.png",
      },
    },
    {
      name: "Signup",
      imgUrl: {
        small: "images/img_image62_2.png",
        large: "images/img_rectangle179.png",
      },
    },
    {
      name: "Product List",
      imgUrl: {
        small: "images/img_image62_3.png",
        large: "images/img_rectangle179.png",
      },
    },
    {
      name: "Product Details",
      imgUrl: {
        small: "images/img_image62_4.png",
        large: "images/img_rectangle179.png",
      },
    },
    {
      name: "Ref 1",
      imgUrl: {
        small: "images/img_image62.png",
        large: "images/img_rectangle179.png",
      },
    },
    {
      name: "Ref 2",
      imgUrl: {
        small: "images/img_image62_91x165.png",
        large: "images/img_rectangle179.png",
      },
    },
  ];
  const onsubmitHandler = () => {
    if(project_type === "Front End")
        dispatch(ADD_FRONTEND_FETEMPLATES(feSelectedScreens));
    else
      dispatch(ADD_FETEMPLATES(feSelectedScreens));
    navigate(path);
  }
  const deleteAllScreen = () => {
   setFeSelectedScreens([]);
   SetChooseScreenList([]);
  }
  const onRequestClose = () => {
    SetFeSelectedScreenToRender(false)
  }
  return (
    <>    { feSelectedScreenToRender ? (
      // <FETemplateselectedModal />
      <FETemplateselectedModal addedList={feSelectedScreens}
       choosenScreenList={choosenScreenList} 
       selectedScreen={selectedScreen} 
       removeScreenFromList={removeScreenFromList} 
       deleteAllScreen = {deleteAllScreen}
       onRequestClose ={onRequestClose}
       />
    ) : (
      <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
      <div className="flex flex-col items-center justify-start w-[100%]">
        <div className="flex items-start justify-start max-w-[982px] w-[100%]">
          <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
            <div className="flex items-start justify-start w-[100%]">
              <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                <Text
                  className="font-medium text-gray_50 text-left w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Select Screen
                </Text>
                <Text
                  className="font-normal not-italic text-gray_501 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Choose the screens you want your in project
                </Text>
              </div>
            </div>
            <Line className="bg-gray_801 h-[1px] w-[100%]" />
          </div>
        </div>
        {/* mapping screen list */}
        <div className="flex md:flex-col flex-row gap-[17px] items-start justify-between w-[100%]">
          <div className="flex md:flex-1 items-center justify-start md:mt-[0] mt-[24px] md:w-[100%] w-[40%] ">
            <div className="sm:gap-[20px] gap-[24px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%] ">
              {screenList.map((item, index) => {
                return (
                  <>
                    <div className="flex flex-col gap-[20px] items-center justify-between w-[100%]">
                      <div
                        onClick={() => setSelectedScreen(item)}
                        className={
                          feSelectedScreens.find(elem => elem?.name === item?.name) ||
                          selectedScreen.name === item?.name
                            ? "bg-gray_901 flex items-center justify-center h-[181px] relative rounded-[4px] w-[181px]"
                            : "bg-gray_901 flex h-[181px] items-center justify-start p-[8px] rounded-[4px] w-[181px]"
                        }
                      >
                        <Img
                          src={item?.imgUrl?.small}
                          className="h-[91px] m-[auto] object-cover rounded-[4px] w-[92%]"
                          alt="imageSixtyTwo_Two"
                        />
                        {feSelectedScreens.find(elem => elem?.name === item?.name) ? (
                          <div className="absolute bg-gray_900_66 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[74px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[181px]">
                            <Img
                              src="images/img_close_teal_a400.svg"
                              className="cursor-pointer h-[32px] w-[32px]"
                              alt="close"
                              onClick={() =>
                                removeScreenFromList(item)
                              }
                            />
                          </div>
                        ) : selectedScreen.name === item?.name ? (
                          <div className="absolute bg-gray_900_66 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[74px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[181px]">
                            <Img
                              src="images/img_plus_teal_a400.svg"
                              className="cursor-pointer h-[32px] w-[32px]"
                              alt="plus"
                              onClick={() =>
                                addToSelectedScreen(item)
                              }
                            />
                          </div>
                        ) : (
                          false
                        )}
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_300 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        {item.name}
                      </Text>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          {/* showing expanded view for user selected screen on RHS */}
          {!selectedScreen ? (
            <div className="bg-gray_901 flex md:flex-1 items-center justify-start mb-[128px] p-[128px] sm:px-[20px] md:px-[40px] md:m-[0px] m-[13px] md:w-[100%] w-[60%]">
              <Text
                className="font-normal leading-[150.00%] my-[112px] not-italic text-center text-gray_501 w-[100%]"
                as="h6"
                variant="h6"
              >
                Select a Screen to see it’s Expanded View
              </Text>
            </div>
          ) : (
            <>
              {/* <div className="absolute bg-gray_901 flex items-center justify-start p-[11px] right-[0] top-[0] w-[60%]"> */}
              <div className="flex flex-col md:gap-[40px] gap-[88px] items-center justify-start mb-[136px] mt-[13px] md:w-[100%] w-[60%]">
                <div className="flex flex-row sm:gap-[40px] items-end justify-between md:w-[100%] w-[96%]">
                  <Text
                    className="font-normal mb-[3px] mt-[8px] not-italic text-gray_50 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Signup Screen
                  </Text>
                  {!choosenScreenList.includes(selectedScreen.name) ? (
                    <Button
                      onClick={() =>
                        addToSelectedScreen(selectedScreen?.name)
                      }
                      className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium min-w-[115px] sm:px-[20px] px-[24px] py-[8px] rounded-[4px] text-[12px] text-center text-teal_A400 w-[auto]"
                    >
                      Add Screen
                    </Button>
                  ) : (
                    <Button
                      onClick={() =>
                        removeScreenFromList(selectedScreen?.name)
                      }
                      className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium min-w-[138px] sm:px-[20px] px-[24px] py-[8px] rounded-[4px] text-[12px] text-center text-teal_A400 w-[auto]"
                    >
                      Remove Screen
                    </Button>
                  )}
                </div>
                <div className="flex items-center justify-start  md:w-[100%] w-[96%]">
                  <Img
                    src="images/img_rectangle179.png"
                    className="h-[332px] md:h-[auto] object-cover rounded-[4px] w-[100%]"
                    alt="rectangle179"
                  />
                </div>
              </div>
              {/* </div>   */}
            </>
          )}
        </div>
      </div>
      {/* page navigation */}
      <div className="bg-gray_900 flex flex-col gap-[16px] h-[89px] md:h-[auto] inset-x-[0] items-center justify-start max-w-[982px] mt-[20px] mx-[auto] w-[100%]">
        <Line className="bg-gray_801 h-[1px] w-[100%]" />
        <div className="flex md:flex-col flex-row gap-[20px] items-start justify-start w-[100%]">
          <FETemplateButton
            className="flex sm:flex-1 flex-col items-center justify-center sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] sm:w-[100%] w-[161px]"
            text_One={`Selected Screens (${choosenScreenList.length})`}
            onClick={() => SetFeSelectedScreenToRender(true)}
          />
          <div className="flex items-start justify-end w-[100%]">
          <div className="flex flex-row gap-[12px] items-center justify-center pr-2">
            <ButtonNew
             onClick={() => navigate(-1)}
             children="Previous"
            >
            </ButtonNew>
            <ButtonNew
              isActive={feSelectedScreens.length > 0}
              onClick={() =>
                feSelectedScreens.length > 0 ?
               onsubmitHandler() : null}
              children="Next"
              isSubmit
            >
            </ButtonNew>
          </div>
        </div>
        </div>
      </div>
    </div>
    )}
         
    </>
  );
};

export default FEScreen;
