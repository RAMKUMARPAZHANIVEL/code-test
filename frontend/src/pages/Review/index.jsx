import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ButtonNew from "components/ButtonNew";
import { Text, Line, List } from "components";

const ReviewPage = () => {
  const navigate = useNavigate();
  const data = useSelector(store => store);
  const project_type = useSelector(store => store.basicInformation.projectType);
  if(project_type === "Front End"){
    console.log(data.frontend);
  }else if(project_type === "Back End"){
    console.log(data.backend)
  }else{
   console.log(data.fullstack);
  }
  return (
    <>
          <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
            <div className="flex items-start justify-start max-w-[982px] w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_50 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Review
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray_801 h-[1px] w-[100%]" />
              </div>
            </div>
            <Text
              className="font-medium mt-[24px] text-gray_50 text-left w-[auto]"
              as="h4"
              variant="h4"
            >
              Tech Stack Details
            </Text>
            <List
              className="flex-col gap-[20px] grid items-center mt-[15px] w-[98%]"
              orientation="vertical"
            >
              <div className="flex md:flex-col flex-row md:gap-[48px] items-center justify-between w-[100%]">
                <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Front End Tech Stack
                  </Text>
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_501 text-left w-[auto]"
                      variant="body3"
                    >
                      React
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[40%]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Back End Tech Stack
                  </Text>
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_501 text-left w-[auto]"
                      variant="body3"
                    >
                      MySQL
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[48px] items-center justify-between w-[67%]">
                <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Capabilities
                  </Text>
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_501 text-left w-[auto]"
                      variant="body3"
                    >
                      Generate Test Cases, Generate Postman Collection
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <div className="flex items-center justify-start self-stretch w-[auto]">
                    <Text
                      className="font-semibold text-gray_300 text-left w-[auto]"
                      variant="body2"
                    >
                      Database
                    </Text>
                  </div>
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_501 text-left w-[auto]"
                      variant="body3"
                    >
                      Database 1
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <Text
              className="font-medium mt-[32px] text-gray_50 text-left w-[auto]"
              as="h4"
              variant="h4"
            >
              Basic Details
            </Text>
            <div className="flex md:flex-col flex-row md:gap-[48px] items-center justify-between mt-[15px] md:w-[100%] w-[98%]">
              <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Application Name
                </Text>
                <div className="flex items-center justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_501 text-left w-[auto]"
                    variant="body3"
                  >
                    E-commence
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[40%]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Namespace
                </Text>
                <div className="flex items-center justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_501 text-left w-[auto]"
                    variant="body3"
                  >
                    Input value
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-start justify-start max-w-[958px] mt-[20px] w-[100%]">
              <Text
                className="font-semibold text-gray_300 text-left w-[auto]"
                variant="body2"
              >
                Application Description
              </Text>
              <div className="flex items-center justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_501 text-left w-[auto]"
                  variant="body3"
                >
                  This application is for E-commerce
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[20px] md:w-[100%] w-[98%]">
              <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Architecture
                  </Text>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_501 text-left w-[auto]"
                    variant="body3"
                  >
                    Architecture 1
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[40%]">
                <Text
                  className="font-semibold text-gray_300 text-left w-[auto]"
                  variant="body2"
                >
                  Database Name
                </Text>
                <div className="flex items-center justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_501 text-left w-[auto]"
                    variant="body3"
                  >
                    same as application name
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] items-start justify-start mt-[20px] md:w-[100%] w-[71%]">
              <List
                className="sm:flex-col flex-row md:gap-[40px] gap-[456px] grid sm:grid-cols-1 grid-cols-2 justify-center w-[100%]"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start sm:ml-[0] w-[100%]">
                  <div className="flex items-center justify-start self-stretch w-[auto]">
                    <Text
                      className="font-semibold text-gray_300 text-left w-[auto]"
                      variant="body2"
                    >
                      Server
                    </Text>
                  </div>
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_501 text-left w-[auto]"
                      variant="body3"
                    >
                      Server 1
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start sm:ml-[0] self-stretch w-[auto]">
                  <div className="flex items-center justify-start self-stretch w-[125%]">
                    <Text
                      className="font-semibold text-gray_300 text-left w-[auto]"
                      variant="body2"
                    >
                      Build Tool
                    </Text>
                  </div>
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_501 text-left w-[auto]"
                      variant="body3"
                    >
                      Tool 1
                    </Text>
                  </div>
                </div>
              </List>
              <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                <div className="flex items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-semibold text-gray_300 text-left w-[auto]"
                    variant="body2"
                  >
                    Package Management
                  </Text>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_501 text-left w-[auto]"
                    variant="body3"
                  >
                    Package Management 1
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-start justify-start mt-[115px] w-[100%]">
              <Line className="bg-gray_801 h-[1px] w-[100%]" />
              <div className="flex items-start justify-end w-[100%]">
                <div className="flex flex-row gap-[12px] items-center justify-center pr-2">
                  <ButtonNew
                   onClick={() => navigate(-1)}
                   children="Previous"
                  >
                  </ButtonNew>
                  <ButtonNew
                    isActive={true}
                    onClick={() =>
                     navigate("/stepsone")}
                    children="Next"
                    isSubmit
                  >
                  </ButtonNew>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default ReviewPage;
