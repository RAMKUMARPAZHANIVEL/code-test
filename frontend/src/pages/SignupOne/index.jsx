import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import SignupOneBenefits from "components/SignupOneBenefits";
import SignupTwoBenefits from "components/SignupTwoBenefits";
import SignupFourBenefits from "components/SignupFourBenefits";
import SignupOneSidebarframe529821 from "components/SignupOneSidebarframe529821";
import SignupOneSocial from "components/SignupOneSocial";
import { Button, Img, Line, Text, Input } from "components";
import SignupOneSocial1 from "components/SignupOneSocial1";


const SignupOnePage = () => {
  const [indexToShow, setIndexToShow] = useState(0);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();
  if (isAuthenticated) {
    navigate("/home1");
  }
  
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-start justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[52px] items-center justify-start md:px-[20px] md:w-[100%] w-[96%]">
       
          {/* onclick of indicator need to show below component */}
          {indexToShow === 0 ? (
            <SignupOneBenefits
              className="bg-gray_901 flex flex-col items-center justify-end p-[32px] sm:px-[20px] rounded-bl-[0] rounded-br-[24px] rounded-tl-[0] rounded-tr-[24px] md:w-[100%] w-[auto]"
              title="Generate Code Instantly"
              description="End-to-end application code is generated in a few minutes. It’s not just skeleton code, it is a fully functional code. The platform takes care of code build, executing pre-generated unit test cases, checking-in to Github. Supports adding toolchain for code review, deployment, so on."
              setIndexToShow={setIndexToShow}
              indexToShow={indexToShow}
            />
          ) : indexToShow === 1 ? (
            <SignupTwoBenefits
              className="bg-gray_901 flex flex-col items-center justify-end p-[32px] sm:px-[20px] rounded-bl-[0] rounded-br-[24px] rounded-tl-[0] rounded-tr-[24px] md:w-[100%] w-[auto]"
              title="Choice of Technologies"
              description="Freedom to choose your own technology stack based on project needs. Select any framework or library in the layers and tiers to create your own tech stack, e.g. Angular, Spring MVC, JPA, Oracle DB. The domain model is automatically knitted with the application code. The layers and tiers are smoothly integrated, irrespective of the underlying frameworks"
              setIndexToShow={setIndexToShow}
              indexToShow={indexToShow}
            />
          ) : (
            <SignupFourBenefits
            className="bg-gray_901 flex flex-col items-center justify-centre p-[32px] sm:px-[20px] rounded-bl-[0] rounded-br-[24px] rounded-tl-[0] rounded-tr-[24px] md:w-[100%] w-[auto]"
            title="Numerous Tech Stacks and Capabilities"
            description={
              <>
                For increased value addition, multiple tech stacks are being
                added.
                <br />
                Commonly needed capabilities like Login, User Management,
                Parsers, Email Sending, API Integrations, and many more. We help
                continuous Application Modernization with our ever-evolving tech
                stacks.
              </>
            }
            setIndexToShow={setIndexToShow}
            indexToShow={indexToShow}
          />
          )}
                
          <div className="flex flex-col md:gap-[40px] gap-[80px] items-center justify-start md:w-[100%] w-[46%]">
            <SignupOneSidebarframe529821 className="flex flex-col md:hidden items-center justify-start md:w-[100%] w-[auto]" />
            <div className="flex flex-col items-center justify-start w-[100%]">
              <SignupOneSocial
                className="border-[1px] border-gray_801 border-solid flex flex-col items-center justify-center sm:px-[20px] md:px-[40px] px-[64px] py-[12px] rounded-[4px] sm:w-[100%] w-[555px]"
                text="Signup with Google"
              />
              <Button
                className="border-[1px] border-gray_801 border-solid cursor-pointer flex items-center justify-center sm:min-w-[100%] min-w-[555px] mt-[20px] px-[64px] py-[12px] rounded-[4px] w-[auto]"
                leftIcon={
                  <Img
                    src="images/img_settings.svg"
                    className="mr-[12px]"
                    alt="settings"
                  />
                }
              >
                <div className="font-normal md:px-[40px] not-italic sm:px-[20px] text-[16px] text-gray_300 text-left">
                  Signup with Github
                </div>
              </Button>
              <SignupOneSocial1
                className="border-[1px] border-gray_801 border-solid flex flex-col items-center justify-center mt-[20px] sm:px-[20px] md:px-[40px] px-[64px] py-[12px] rounded-[4px] sm:w-[100%] w-[555px]"
                text_One="Signup with Linkedin"
              />
              <div className="flex sm:flex-col flex-row gap-[12px] items-center justify-between mt-[58px] w-[100%]">
                <Line className="bg-gray_801 h-[1px] sm:mt-[0] my-[9px] w-[46%]" />
                <Text
                  className="font-medium text-gray_50 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  OR
                </Text>
                <Line className="bg-gray_801 h-[1px] sm:mt-[0] my-[9px] w-[46%]" />
              </div>
              <div className="flex items-start justify-start mt-[57px] self-stretch sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Email ID
                  </Text>
                  <Input
                    wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex p-[12px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-gray_300 text-[12px] text-gray_300 text-left w-[100%]"
                    type="email"
                    name="email"
                    placeholder=""
                    prefix={
                      <Img
                        src="images/img_mail.svg"
                        className="mr-[8px] my-[auto]"
                        alt="mail"
                      />
                    }
                  ></Input>
                  {/* incase of invalid email use below input */}
                  {/* <Input
                    wrapClassName="common-pointer bg-gray_905 border-[2px] border-pink_900 border-solid flex p-[12px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-red_400 text-[12px] text-left text-red_400 w-[100%]"
                    type="email"
                    onClick={() => alert("working")}
                    name="email"
                    placeholder="ram@g.co"
                    prefix={
                      <Img
                        src="images/img_mail_red_400.svg"
                        className="mr-[8px] my-[auto]"
                        alt="mail"
                      />
                    }
                  ></Input>
                  <Text
                    className="font-normal not-italic text-left text-red_400 w-[auto]"
                    variant="body3"
                  >
                    Invalid Email!
                  </Text> */}
                </div>
              </div>
              <Button
                onClick={() => navigate("/home1")}
                className="bg-teal_900 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[555px]"
              >
                Proceed
              </Button>
              {/* { isAuthenticated ? (
              <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="bg-teal_900 cursor-pointer font-medium mt-[24px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[555px]">
              logout
            </Button>) : false} */}
              <Text
                className="font-medium mt-[170px] text-gray_501 text-left w-[auto]"
                variant="body2"
              ></Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupOnePage;
