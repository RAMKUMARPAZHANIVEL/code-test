import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { SET_BASIC_DETAIL } from "store/slices/fullstack.slice";

import { Text, Line, Input, Img, SelectBox, Button } from "components";
import { SET_FRONTEND_BASIC_DETAIL } from "store/slices/frontend.slice";
import { SET_BACKEND_BASIC_DETAIL } from "store/slices/backend.slice";

var details = {
  ApplicationName : "",
  Namespace : "",
  ApplicationDescription : "",
  Architecture : "",
  DatabaseName : "",
  Server : "",
  BuildTool : "",
  PackageManagement : ""
}

const BasicDetailsPage = () => {
  const navigate = useNavigate();
  const[basicdetails,setBasicDetails] = useState(details);
  const[activeInputValue,setActiveInputValue] = useState("");
  const dispatch = useDispatch();

  const project_type = useSelector(store => store.basicInformation.projectType);
  const selected_basicDetails = useSelector(store => store.fullstack.fullstack_details?.basicDetail);
   const updateInputValue = (name) => {
     setActiveInputValue(name)
   }
  const onchangeHandler = (e) => {
    setBasicDetails(curDetails => {
       return {...curDetails,[e.target.name] : e.target.value}
    });
  }
  const onChangeDropdownHandler = (name,value) => {
    setBasicDetails(curDetails => {
       return {...curDetails,[name] : value}
    });
    console.log(basicdetails);
  }
  const ArchitectureSelectOptions = [
    { value: "Architecture 1", label: "Architecture 1" },
    { value: "Architecture 2", label: "Architecture 2" },
    { value: "Architecture 3", label: "Architecture 3" },
  ];
  const serverSelectOptions = [
    { value: "option1", label: "server 1" },
    { value: "option2", label: "server 2" },
    { value: "option3", label: "server 3" },
  ];
  const toolSelectOptions = [
    { value: "option1", label: "tool 1" },
    { value: "option2", label: "tool 2" },
    { value: "option3", label: "tool 3" },
    { value: "option4", label: "tool 4" },
    { value: "option5", label: "tool 5" },
    { value: "option6", label: "tool 6" }
  ];
  const projectManagementSelectOptions = [
    { value: "option1", label: "project management 1" },
    { value: "option2", label: "project management 2" },
    { value: "option3", label: "project management 3" },
  ];

  const onSubmitHandler = () => {
    if(project_type === "Front End")
        dispatch(SET_FRONTEND_BASIC_DETAIL(basicdetails));
    else if(project_type === "Back End")
        dispatch(SET_BACKEND_BASIC_DETAIL(basicdetails));
    else
      dispatch(SET_BASIC_DETAIL(basicdetails));
    navigate("/review");
  }
  return (
    <>
          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
            <div className="flex items-start justify-start max-w-[982px] w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_50 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Basic Details
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray_801 h-[1px] w-[100%]" />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between mt-[24px] w-[100%]">
              <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Application Name
                </Text>
                <Input
                  wrapClassName="bg-gray_902 border-[1px] border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
                  className="font-normal not-italic p-[0] placeholder:text-gray_801 text-[12px] text-gray_300 text-left w-[100%]"
                  name="ApplicationName"
                  placeholder="Enter Application Name"
                  activeInputValue = {activeInputValue}
                  updateInputValue = {updateInputValue}
                  onChange = {onchangeHandler}
                  value={selected_basicDetails?.ApplicationName}
                ></Input>
              </div>
              <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Namespace
                </Text>
                <Input
                  wrapClassName="bg-gray_902 border-[1px] border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
                  className="font-normal not-italic p-[0] placeholder:text-gray_801 text-[12px] text-gray_300 text-left w-[100%]"
                  name="Namespace"
                  placeholder="Input value"
                  onChange = {onchangeHandler}
                  activeInputValue = {activeInputValue}
                  updateInputValue = {updateInputValue}
                  value={selected_basicDetails?.Namespace}
                ></Input>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-start justify-start max-w-[982px] mt-[20px] w-[100%]">
              <Text
                className="font-semibold text-gray_300 text-left w-[auto]"
                variant="body2"
              >
                Application Description
              </Text>
              <Input
                wrapClassName="bg-gray_902 border-[1px] border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
                className="font-normal md:h-[auto] not-italic p-[0] placeholder:text-gray_801 sm:h-[auto] text-[12px] text-gray_300 text-left w-[100%] focus:border-gray_501"
                name="ApplicationDescription"
                placeholder="Enter Description Of Your Application"
                onChange = {onchangeHandler}
                updateInputValue = {updateInputValue}
                activeInputValue = {activeInputValue}
                value={selected_basicDetails?.ApplicationDescription}
              ></Input>
            </div>
            <div className="md:gap-[20px] gap-[24px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[20px] w-[100%]">
              <div className="flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Architecture
                  </Text>
                  <Img
                    src="images/img_warning.svg"
                    className="h-[12px] w-[12px]"
                    alt="warning"
                  />
                </div>
                <SelectBox
                  className="bg-gray_902 border-[1px] border-solid font-normal not-italic px-[12px] py-[15px] rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                  placeholderClassName="text-gray_300"
                  name="Architecture"
                  placeholder="Select Architecture"
                  isSearchable={false}
                  isMulti={false}
                  options = {ArchitectureSelectOptions}
                  updateInputValue={updateInputValue}
                  activeInputValue={activeInputValue}
                  onChange ={onChangeDropdownHandler}
                  value = {selected_basicDetails?.Architecture}
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_50_24x24.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                {/* custom dropdown for additional purpose */}
                {/* <select 
                  className="! bg-gray_902 border-[1px] border-gray_801 border-solid  text-[12px] text-gray_300 px-[12px] py-[8px] rounded-[4px] sm:w-[100%] w-[100%] focus:border-gray_501"
                >
                  {ArchitectureSelectOptions.map((item) => {
                       return(
                        <option className="text-gray_300 p-[20px] text-[12px] ! h-96" style={{padding:"1rem",border:"2px solid red"}}>{item.label}</option>
                       )
                  })}
                </select> */}
              </div>
              <div className="flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Database Name
                </Text>
                <Input
                  wrapClassName="bg-gray_902 border-[1px] border-solid px-[12px] py-[15px] rounded-[4px] w-[100%]"
                  className="font-normal not-italic p-[0] placeholder:text-gray_801 text-[12px] text-gray_300 text-left w-[100%] focus:border-gray_501"
                  name="DatabaseName"
                  placeholder="Enter Database Name"
                  activeInputValue = {activeInputValue}
                  updateInputValue = {updateInputValue}
                  onChange = {onchangeHandler}
                  value={selected_basicDetails?.database}
                ></Input>
              </div>
              <div className="flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Server
                  </Text>
                  <Img
                    src="images/img_warning.svg"
                    className="h-[12px] w-[12px]"
                    alt="warning"
                  />
                </div>
                <SelectBox
                  className="bg-gray_902 border-[1px] border-solid font-normal not-italic px-[12px] py-[15px] rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                  placeholderClassName="text-gray_300"
                  name="Server"
                  placeholder="select Server"
                  isSearchable={false}
                  isMulti={false}
                  options = {serverSelectOptions}
                  activeInputValue={activeInputValue}
                  updateInputValue={updateInputValue}
                  onChange ={onChangeDropdownHandler}
                  value = {selected_basicDetails?.Server}
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_50_24x24.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
              <div className="flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Build Tool
                  </Text>
                  <Img
                    src="images/img_warning.svg"
                    className="h-[12px] w-[12px]"
                    alt="warning"
                  />
                </div>
                <SelectBox
                  className="bg-gray_902 border-[1px] border-solid font-normal not-italic px-[12px] py-[15px] rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                  placeholderClassName="text-gray_300"
                  name="BuildTool"
                  placeholder="select tool"
                  isSearchable={false}
                  isMulti={false}
                  options={toolSelectOptions}
                  activeInputValue={activeInputValue}
                  updateInputValue={updateInputValue}
                  onChange ={onChangeDropdownHandler}
                  value = {selected_basicDetails?.BuildTool}
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_50_24x24.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
              <div className="flex flex-1 flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                  <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
                    <Text
                      className="font-semibold text-gray_300 text-left w-[auto]"
                      variant="body2"
                    >
                      Package Management
                    </Text>
                    <Img
                      src="images/img_warning.svg"
                      className="h-[12px] w-[12px]"
                      alt="warning"
                    />
                  </div>
                  <SelectBox
                    className="bg-gray_902 border-[1px] border-solid font-normal not-italic px-[12px] py-[15px] rounded-[4px] text-[12px] text-gray_300 text-left w-[100%]"
                    placeholderClassName="text-gray_801"
                    name="PackageManagement"
                    placeholder="Select package management"
                    isSearchable={false}
                    isMulti={false}
                    options={projectManagementSelectOptions}
                    activeInputValue={activeInputValue}
                    updateInputValue={updateInputValue}
                    onChange ={onChangeDropdownHandler}
                    value = {selected_basicDetails?.PackageManagement}
                    // value = {selected_basicDetails?.PackageManagement ? selected_basicDetails?.PackageManagement : null}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_50_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
            </div>
            <div className="flex flex-col gap-[16px] h-[89px] md:h-[auto] items-start justify-start max-w-[982px] mt-[115px] w-[100%]">
              <Line className="bg-gray_801 h-[1px] w-[100%]" />
              <div className="flex items-start justify-start w-[100%]">
                <div className="flex flex-row gap-[12px] items-center justify-end w-[100%]">
                  <Button onClick={() => navigate(-1)} className="border-[1px] border-solid border-teal_A400 cursor-pointer flex-1 font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-teal_A400 w-[100%]">
                    Previous
                  </Button>
                  <Button onClick={()=> onSubmitHandler()} className="bg-teal_900 cursor-pointer flex-1 font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[100%]">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default BasicDetailsPage;
