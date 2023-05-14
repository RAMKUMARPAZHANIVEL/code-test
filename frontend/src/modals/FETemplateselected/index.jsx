import React from "react";
import ModalProvider from "react-modal";

import { Text, Button, Img, List } from "components";

const FETemplateselectedModal = (props) => {
  return (
    <>
      {/* <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[75%]"
        overlayClassName="bg-black_900_7f fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      > */}
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-gray_901 flex items-end justify-start max-w-[960px] mx-[auto] pt-[16px] px-[16px] md:px-[20px] w-[100%]">
            <div className="flex flex-col items-start justify-start md:w-[100%] w-[93%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="font-medium md:mt-[0] mt-[24px] text-gray_50 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Selected Screens
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[3px] md:mt-[0] mt-[34px] not-italic text-gray_501 text-left w-[auto]"
                  variant="body2"
                >
                  {props?.addedList.length}
                </Text>
                <Button 
                 onClick = {props?.deleteAllScreen}
                 className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium min-w-[162px] md:ml-[0] ml-[391px] md:mt-[0] mt-[22px] sm:px-[20px] px-[24px] py-[8px] rounded-[4px] text-[12px] text-center text-teal_A400 w-[auto]">
                  Remove All Screens
                </Button>
                <Img
                  src="images/img_close.svg"
                  className="common-pointer h-[24px] md:ml-[0] ml-[48px] rounded-[50%] w-[24px]"
                  onClick={props.onRequestClose}
                  alt="close"
                />
              </div>
              <div className="flex md:flex-1 items-center justify-start md:mt-[0] mt-[24px] md:w-[100%] w-[100%] ">
            <div className="sm:gap-[20px] gap-[24px] grid sm:grid-cols-1 grid-cols-4 justify-center min-h-[auto] w-[100%] ">
              {props?.addedList.map((item, index) => {
                return (
                  <>
                    <div className="flex flex-col gap-[20px] items-center justify-between w-[100%]">
                      <div
                        // onClick={() => setSelectedScreen(item)}
                        className={
                          props?.feSelectedScreens.find(elem => elem?.name === item?.name)  ||
                          props?.selectedScreen.name === item?.name
                            ? "bg-gray_901 flex items-center justify-center h-[181px] relative rounded-[4px] w-[181px]"
                            : "bg-gray_901 flex h-[181px] items-center justify-start p-[8px] rounded-[4px] w-[181px]"
                        }
                      >
                        <Img
                          src={item?.imgUrl?.small}
                          className="h-[91px] m-[auto] object-cover rounded-[4px] w-[92%]"
                          alt="imageSixtyTwo_Two"
                        />
                        
                        {props?.feSelectedScreens.find(elem => elem?.name === item?.name)  ? (
                          <div className="absolute bg-gray_900_66 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[74px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[181px]">
                            <Img
                              src="images/img_close_teal_a400.svg"
                              className="cursor-pointer h-[32px] w-[32px]"
                              alt="close"
                              onClick={() =>
                                props?.removeScreenFromList(item)
                              }
                            />
                          </div>)
                        // ) : selectedScreen.name === item?.name ? (
                        //   <div className="absolute bg-gray_900_66 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[74px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[181px]">
                        //     <Img
                        //       src="images/img_plus_teal_a400.svg"
                        //       className="cursor-pointer h-[32px] w-[32px]"
                        //       alt="plus"
                        //       onClick={() =>
                        //         addToSelectedScreen(item?.name)
                        //       }
                        //     />
                        //   </div>
                         : (
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
                {/* <List
                className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 mt-[30px] w-[92%]"
                orientation="horizontal"
              >
                <div className="bg-gray_901 h-[181px] relative rounded-[4px] w-[100%]">
                  <Img
                    src="images/img_image62_1.png"
                    className="h-[91px] m-[auto] object-cover rounded-[4px] w-[92%]"
                    alt="imageSixtyTwo"
                  />
                  <div className="absolute bg-gray_900_66 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[74px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[181px]">
                    <Img
                      src="images/img_close_teal_a400.svg"
                      className="h-[32px] w-[32px]"
                      alt="close"
                    />
                  </div>
                </div>
                <div className="bg-gray_901 h-[181px] relative rounded-[4px] w-[100%]">
                  <Img
                    src="images/img_image62_1.png"
                    className="h-[91px] m-[auto] object-cover rounded-[4px] w-[92%]"
                    alt="imageSixtyTwo"
                  />
                  <div className="absolute bg-gray_900_66 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[74px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[181px]">
                    <Img
                      src="images/img_close_teal_a400.svg"
                      className="h-[32px] w-[32px]"
                      alt="close"
                    />
                  </div>
                </div>
                <div className="bg-gray_901 h-[181px] relative rounded-[4px] w-[100%]">
                  <Img
                    src="images/img_image62_1.png"
                    className="h-[91px] m-[auto] object-cover rounded-[4px] w-[92%]"
                    alt="imageSixtyTwo"
                  />
                  <div className="absolute bg-gray_900_66 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[74px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[181px]">
                    <Img
                      src="images/img_close_teal_a400.svg"
                      className="h-[32px] w-[32px]"
                      alt="close"
                    />
                  </div>
                </div>
                <div className="bg-gray_901 h-[181px] relative rounded-[4px] w-[100%]">
                  <Img
                    src="images/img_image62_1.png"
                    className="h-[91px] m-[auto] object-cover rounded-[4px] w-[92%]"
                    alt="imageSixtyTwo"
                  />
                  <div className="absolute bg-gray_900_66 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[74px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[181px]">
                    <Img
                      src="images/img_close_teal_a400.svg"
                      className="h-[32px] w-[32px]"
                      alt="close"
                    />
                  </div>
                </div>
              </List>
              <div className="md:gap-[40px] gap-[77px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start mt-[16px] md:w-[100%] w-[85%]">
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Signup Screen
                </Text>
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Signup Screen
                </Text>
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Signup Screen
                </Text>
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Signup Screen
                </Text>
              </div> */}
              {/* <List
                className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 mt-[24px] w-[92%]"
                orientation="horizontal"
              >
                <div className="bg-gray_901 h-[181px] relative rounded-[4px] w-[100%]">
                  <Img
                    src="images/img_image62_1.png"
                    className="h-[91px] m-[auto] object-cover rounded-[4px] w-[92%]"
                    alt="imageSixtyTwo"
                  />
                  <div className="absolute bg-gray_900_66 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[74px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[181px]">
                    <Img
                      src="images/img_close_teal_a400.svg"
                      className="h-[32px] w-[32px]"
                      alt="close"
                    />
                  </div>
                </div>
                <div className="bg-gray_901 h-[181px] relative rounded-[4px] w-[100%]">
                  <Img
                    src="images/img_image62_1.png"
                    className="h-[91px] m-[auto] object-cover rounded-[4px] w-[92%]"
                    alt="imageSixtyTwo"
                  />
                  <div className="absolute bg-gray_900_66 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[74px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[181px]">
                    <Img
                      src="images/img_close_teal_a400.svg"
                      className="h-[32px] w-[32px]"
                      alt="close"
                    />
                  </div>
                </div>
                <div className="bg-gray_901 h-[181px] relative rounded-[4px] w-[100%]">
                  <Img
                    src="images/img_image62_1.png"
                    className="h-[91px] m-[auto] object-cover rounded-[4px] w-[92%]"
                    alt="imageSixtyTwo"
                  />
                  <div className="absolute bg-gray_900_66 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[74px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[181px]">
                    <Img
                      src="images/img_close_teal_a400.svg"
                      className="h-[32px] w-[32px]"
                      alt="close"
                    />
                  </div>
                </div>
                <div className="bg-gray_901 h-[181px] relative rounded-[4px] w-[100%]">
                  <Img
                    src="images/img_image62_1.png"
                    className="h-[91px] m-[auto] object-cover rounded-[4px] w-[92%]"
                    alt="imageSixtyTwo"
                  />
                  <div className="absolute bg-gray_900_66 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[74px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[181px]">
                    <Img
                      src="images/img_close_teal_a400.svg"
                      className="h-[32px] w-[32px]"
                      alt="close"
                    />
                  </div>
                </div>
              </List> */}
              {/* <div className="md:gap-[40px] gap-[77px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start mt-[16px] md:w-[100%] w-[85%]">
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Signup Screen
                </Text>
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Signup Screen
                </Text>
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Signup Screen
                </Text>
                <Text
                  className="font-normal not-italic text-gray_300 text-left w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Signup Screen
                </Text>
              </div> */}
              {/* <List
                className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 mt-[24px] w-[92%]"
                orientation="horizontal"
              >
                <div className="bg-gray_901 flex h-[76px] justify-end relative rounded-[4px] w-[100%]">
                  <Img
                    src="images/img_image62_1.png"
                    className="h-[32px] mt-[auto] mx-[auto] object-cover rounded-[4px] w-[92%]"
                    alt="imageSixtyTwo"
                  />
                  <div className="absolute bg-gray_900_66 h-[76px] inset-[0] justify-center m-[auto] rounded-[4px] w-[100%]"></div>
                </div>
                <div className="bg-gray_901 flex h-[76px] justify-end relative rounded-[4px] w-[100%]">
                  <Img
                    src="images/img_image62_1.png"
                    className="h-[32px] mt-[auto] mx-[auto] object-cover rounded-[4px] w-[92%]"
                    alt="imageSixtyTwo"
                  />
                  <div className="absolute bg-gray_900_66 h-[76px] inset-[0] justify-center m-[auto] rounded-[4px] w-[100%]"></div>
                </div>
                <div className="bg-gray_901 flex h-[76px] justify-end relative rounded-[4px] w-[100%]">
                  <Img
                    src="images/img_image62_1.png"
                    className="h-[32px] mt-[auto] mx-[auto] object-cover rounded-[4px] w-[92%]"
                    alt="imageSixtyTwo"
                  />
                  <div className="absolute bg-gray_900_66 h-[76px] inset-[0] justify-center m-[auto] rounded-[4px] w-[100%]"></div>
                </div>
                <div className="bg-gray_901 flex h-[76px] justify-end relative rounded-[4px] w-[100%]">
                  <Img
                    src="images/img_image62_1.png"
                    className="h-[32px] mt-[auto] mx-[auto] object-cover rounded-[4px] w-[92%]"
                    alt="imageSixtyTwo"
                  />
                  <div className="absolute bg-gray_900_66 h-[76px] inset-[0] justify-center m-[auto] rounded-[4px] w-[100%]"></div>
                </div>
              </List> */}
            </div>
          </div>
        </div>
      {/* </ModalProvider> */}
    </>
  );
};

export default FETemplateselectedModal;
