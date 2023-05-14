import React from "react";
import ModalProvider from "react-modal";

import { Text, Input, Button } from "components";
import PaymentDetailsElevenStackcreatefromframe from "components/PaymentDetailsElevenStackcreatefromframe";

const SettingsTwoModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[40%]"
        overlayClassName="bg-black_900_7f fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-gray_901 flex items-end justify-start pl-[39px] md:px-[20px] py-[39px] rounded-[4px] w-[100%]">
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="flex flex-col gap-[32px] items-center justify-start md:w-[100%] w-[92%]">
                <Text
                  className="font-semibold text-gray_50 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Connect Github Account
                </Text>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    User Name
                  </Text>
                  <Input
                    wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                    name="textfield"
                    placeholder="Ram G"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start mt-[20px] self-stretch sm:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Personal Access Token
                </Text>
                <PaymentDetailsElevenStackcreatefromframe
                  className="h-[48px] px-[12px] py-[15px] relative sm:w-[100%] w-[460px]"
                  one="••••••••••••••••••••••••••••••••••••••••"
                />
              </div>
              <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[41px] mt-[40px] md:w-[100%] w-[74%]">
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

export default SettingsTwoModal;
