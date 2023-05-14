import React from "react";
import ModalProvider from "react-modal";

import { Text, Button } from "components";

const GithubModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[33%]"
        overlayClassName="bg-black_900_7f fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-gray_901 flex items-center justify-start p-[40px] md:px-[20px] rounded-[4px] w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <Text
                className="font-semibold leading-[125.00%] text-center text-gray_50 sm:w-[100%] w-[86%]"
                as="h3"
                variant="h3"
              >
                Your GitHub Account isn’t connected
              </Text>
              <Text
                className="font-normal leading-[150.00%] mt-[16px] not-italic text-center text-gray_501 sm:w-[100%] w-[95%]"
                as="h5"
                variant="h5"
              >
                Please connect your GitHub account before creating a project
              </Text>
              <div className="flex flex-row gap-[16px] items-center justify-between mt-[48px] w-[100%]">
                <Button className="border-[1px] border-solid border-teal_A400 cursor-pointer font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[161px]">
                  Cancel
                </Button>
                <Button className="bg-gradient  cursor-pointer font-medium px-[12px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[161px]">
                  Proceed
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default GithubModal;
