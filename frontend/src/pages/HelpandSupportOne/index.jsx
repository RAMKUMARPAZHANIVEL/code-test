import React,{useEffect, useState} from "react";

import HelpAndSupportOneSidemenu from "components/HelpAndSupportOneSidemenu";
import { Text, Line, Button, List, Img, Input } from "components";
import HelpAndSupportOneColumninput from "components/HelpAndSupportOneColumninput";
import SignupOneColumnenteryouremail from "components/SignupOneColumnenteryouremail";
import { useNavigate } from "react-router-dom";
import HelpAndSupportFiveColumnramgm from "components/HelpAndSupportFiveColumnramgm";
import HelpAndSupportSixColumndescription from "components/HelpAndSupportSixColumndescription";


const HelpandSupportOnePage = () => {
  const navigate = useNavigate();
  const [userInformation,setUserInformation] = useState({
    fullName : "",
    email : "",
    message : "",
    status : "pending to submit"
  })
  const [error,setError] = useState({
    fullName : "",
    email : "",
    message : ""
  })
  const [isdisabledSendButton,setIsdisabledSendButton] = useState(false);
  const [isInputFocused,setInputFocused] = useState(false);
  
  useEffect(() => {
    if(error.fullName || error.email || error.message){
      setIsdisabledSendButton(true);
    }
    else{
      setIsdisabledSendButton(false);
    }
  },[error])
  const onSubmitHandler = () => {
  if(!userInformation.fullName || !userInformation.email || !userInformation.message){
    setIsdisabledSendButton(true);
    console.log("please fill the above details to continue");
  }else{
    setUserInformation((curObj) => {
      return {...curObj,status : "submitted"}
    })
   
    console.log(userInformation);
  }
  }

 const onChangeHandler = (event) => {
  const name = event.target.name;
  const value = event.target.value;
   setUserInformation(prev => ({
    ...prev,[name] : value
  }))
  // console.log(userInformation);
  validateForm(event);
  }

  const messageOnBlurHandler = (event) => {
    validateForm(event);
    setInputFocused(false);
  }
  const validateForm = (e) => {
    const {name, value} = e.target;
    setError((obj) => {
        const curError= {...obj,[name] : ""}
        switch(name){
            case "fullName" :
              if(!value){
                curError[name] = "Please Enter name"
              }
              else{
                const fullNameregex = /^[a-zA-Z ]*$/;
                const fullNameregexTest = fullNameregex.test(value);
                if(!fullNameregexTest){
                  curError[name] = "name should contain only alpabets"
                }
              }
              break;
            case "email" :
                if(!value){
                    curError[name] = "Please your email"
                  }else {
                    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
                    const emailRegexTest = emailRegex.test(value);
                    if(!emailRegexTest){
                      curError[name] = "please valid email"
                    }
                  }
                  break ;
            case "message" :
                if(!value){
                    curError[name] = "Please the concern"
                  }else {
                    const minLengthReg = /^\s*(?:\S\s*){3,300}$/;
                   
                    const minLengthTest = minLengthReg.test(value);
                    console.log(minLengthTest);
                    if(!minLengthTest){
                      curError[name] = "message should not exist above 300 leters"
                    }
                  }
              break;
            default :
              break;
              
           }
         
           return curError;
    })
   
  }
  return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] pb-[23px] sm:pr-[20px] pr-[23px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between max-w-[1257px] mb-[11px] mx-[auto] md:px-[20px] w-[100%]">
          <HelpAndSupportOneSidemenu
            className="flex flex-col md:hidden justify-start w-[250px]"
            ramg="Ram G"
            email="ram@gmail.com"
          />
          <div className="flex flex-1 flex-col items-start justify-start md:mt-[0] mt-[32px] w-[100%]">
            <div className="flex items-start justify-start max-w-[912px] w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_50 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Help and Support
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_501 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      We’d love to hear from you. Please fill out this form.
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray_801 h-[1px] w-[100%]" />
              </div>
            </div>
            <div className="flex items-start justify-start mt-[24px] self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Full Name
                </Text>
                <Input
                  wrapClassName= {`${error.fullName ?"!border-pink_900 color-pink_900": "border-gray_801"} common-pointer bg-gray_902 border-[1px] border-solid p-[12px] rounded-[4px] sm:w-[100%] w-[auto]`}
                  className="font-normal not-italic p-[0] placeholder:text-gray_801 border-[1px] text-[12px] text-gray_300 text-left sm:w-[100%] w-[512px] focus:border-gray_501"
                  name="fullName"
                  placeholder="Enter your name"
                  onChangeHandler={onChangeHandler} validateForm={validateForm}
                ></Input>
                 {error.fullName && 
                   <Text
                      className="font-normal not-italic text-left text-red_400 w-[auto]"
                      variant="body3"
                    >
                      Enter proper name!
                    </Text>
              }
                {/* <HelpAndSupportOneColumninput name="fullName" onChangeHandler={onChangeHandler} validateForm={validateForm} className="bg-gray_902 border-[1px] border-gray_801 border-solid flex flex-col items-start justify-start p-[12px] rounded-[4px] sm:w-[100%] w-[512px]" /> */}
              </div>
            </div>
            <div className="flex items-start justify-start mt-[20px] self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Email ID
                </Text>
                
                <Input
                  wrapClassName= {`${error.email ?"!border-pink_900 color-pink_900": "border-gray_801"} common-pointer bg-gray_902 border-[1px] border-solid p-[12px] rounded-[4px] sm:w-[100%] w-[auto]`}
                  className="font-normal not-italic p-[0] placeholder:text-gray_801 border-[1px] text-[12px] text-gray_300 text-left sm:w-[100%] w-[512px] focus:border-gray_501"
                  name="email"
                  placeholder="Enter your email"
                  onChangeHandler={onChangeHandler} validateForm={validateForm}
                ></Input>
                {/* <SignupOneColumnenteryouremail name="email" onChangeHandler={onChangeHandler} validateForm={validateForm} className="bg-gray_902 border-[1px] border-gray_801 border-solid flex flex-col items-start justify-start p-[12px] rounded-[4px] sm:w-[100%] w-[512px]" /> */}
                {error.email && 
                   <Text
                      className="font-normal not-italic text-left text-red_400 w-[auto]"
                      variant="body3"
                    >
                      Invalid Email!
                    </Text>
              }
              </div>
             
            </div>
            <div className="flex items-start justify-start mt-[20px] self-stretch sm:w-[100%] w-[auto]">
              <div className="common-pointer flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Message
                </Text>
                {isInputFocused ?(
                   <HelpAndSupportFiveColumnramgm
                   onChangeHandler={onChangeHandler} name="message" messageOnBlurHandler={messageOnBlurHandler} setInputFocused = {setInputFocused} value={userInformation.message}
                   className={`${error.message ?"border-pink_900": "border-gray_501"} bg-gray_902 border-[1px] border-solid flex flex-col h-[197px] md:h-[auto] items-start justify-start p-[12px] rounded-[4px] sm:w-[100%] w-[512px]`}
                   ramgm="Nulla Lorem mollit cupi|" 
                 />
                ) : (
                  <HelpAndSupportSixColumndescription
                  className= {`${error.message ?"border-pink_900": "border-gray_801"} bg-gray_902 border-[1px] border-solid flex flex-col h-[197px] md:h-[auto] items-start justify-start p-[12px] rounded-[4px] sm:w-[100%] w-[512px]`}
                  description={userInformation.message} setInputFocused = {setInputFocused}                
                />
                )}
                {error.message && 
                   <Text
                      className="font-normal not-italic text-left text-red_400 w-[auto]"
                      variant="body3"
                    >
                      Enter some message
                    </Text>
              }
              </div>
            </div>            
            {userInformation.status === "submitted" ?(
               <Button
               className="border-[1px] border-solid border-teal_A400 cursor-pointer flex items-center justify-center sm:min-w-[100%] min-w-[512px] mt-[32px] px-[12px] py-[16px] rounded-[4px] w-[auto]"
               leftIcon={
                 <Img
                   src="images/img_checkmark_teal_a400.svg"
                   className="mr-[10px]"
                   alt="checkmark"
                 />
               }
             >
               <div className="font-medium text-[16px] text-left text-teal_A400">
                 Message Sent
               </div>
             </Button>
            ) :(
              <Button onClick ={onSubmitHandler} disabled={isdisabledSendButton} className={`${isdisabledSendButton ? "bg-teal_900" :"bg-gradient "} cursor-pointer font-medium mt-[32px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 sm:w-[100%] w-[512px]`}>
                Send Message
            </Button>
            ) }          
            <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-between mt-[34px] w-[100%]">
              <Line className="bg-gray_801 h-[1px] sm:mt-[0] my-[9px] w-[47%]" />
              <Text
                className="font-medium text-gray_50 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                OR
              </Text>
              <Line className="bg-gray_801 h-[1px] sm:mt-[0] my-[9px] w-[47%]" />
            </div>
            <List
              className="sm:flex-col flex-row gap-[12px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-[983px] mt-[33px] w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-gray_901 flex flex-1 flex-col gap-[40px] h-[100%] items-start justify-start p-[24px] sm:px-[20px] rounded-[8px] w-[100%]">
                <Button className="bg-gray_906 flex h-[48px] items-center justify-center p-[12px] rounded-[10px] w-[48px]">
                  <Img
                    src="images/img_mail_teal_a402.svg"
                    className="h-[24px]"
                    alt="mail"
                  />
                </Button>
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_50 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Chat With Us
                    </Text>
                    <Text
                      className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[188px] not-italic text-gray_501 text-left"
                      as="h6"
                      variant="h6"
                    >
                      Speak to our friendly team.
                    </Text>
                  </div>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <div className="flex items-center justify-center self-stretch w-[auto]">
                      <Text
                        className="font-medium text-gray_501 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        replicacia@gmail.com
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_901 flex flex-1 flex-col gap-[40px] h-[100%] items-start justify-start p-[24px] sm:px-[20px] rounded-[8px] w-[100%]">
                <Button className="bg-gray_906 flex h-[48px] items-center justify-center p-[14px] rounded-[10px] w-[48px]">
                  <Img
                    src="images/img_call.svg"
                    className="h-[19px]"
                    alt="call"
                  />
                </Button>
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_50 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Call Us
                    </Text>
                    <Text
                      className="font-normal leading-[150.00%] not-italic text-gray_501 text-left"
                      as="h6"
                      variant="h6"
                    >
                      <>
                        Mon-Fri <br />
                        8am to 8pm.
                      </>
                    </Text>
                  </div>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <div className="flex items-center justify-center self-stretch w-[auto]">
                      <Text
                        className="font-medium text-gray_501 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        +91 9999999999
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_901 flex flex-1 flex-col gap-[40px] h-[100%] items-start justify-start p-[24px] sm:px-[20px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_folder_gray_906.svg"
                  className="h-[48px] rounded-[10px] w-[48px]"
                  alt="folder"
                />
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_50 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Video Call
                    </Text>
                    <Text
                      className="font-normal leading-[150.00%] not-italic text-gray_501 text-left"
                      as="h6"
                      variant="h6"
                    >
                      <>
                        Mon-Fri <br />
                        8am to 8pm.
                      </>
                    </Text>
                  </div>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <div className="flex items-center justify-center self-stretch w-[auto]">
                      <Text
                        className="border-b-[1px] border-green_A401 border-solid font-medium self-stretch text-left text-teal_A400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Book A Call
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_901 flex flex-1 flex-col gap-[40px] h-[100%] items-start justify-start p-[24px] sm:px-[20px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_clock_gray_906.svg"
                  className="h-[48px] rounded-[10px] w-[48px]"
                  alt="clock"
                />
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_50 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      FAQs
                    </Text>
                    <Text
                      className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[188px] not-italic text-gray_501 text-left"
                      as="h6"
                      variant="h6"
                    >
                      Find the answers your need
                    </Text>
                  </div>
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <div className="flex items-center justify-center self-stretch w-[auto]">
                      <Text
                        className="common-pointer border-b-[1px] border-green_A401 border-solid font-medium self-stretch text-left text-teal_A400 w-[auto]"
                        as="h6"
                        variant="h6"
                        onClick={() => navigate("/faqs")}
                      >
                        Go To FAQs
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpandSupportOnePage;
