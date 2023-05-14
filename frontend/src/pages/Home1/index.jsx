import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SET_PROJECT_TYPE } from "store/slices/basicInformation.slice";
import { useDispatch } from "react-redux";

import HomeSidemenu from "components/HomeSidemenu";
import { Text, Line, Button, List, Img } from "components";



const Home1Page = () => {
    const[navigationKey,setNavigationKey] = useState("selectmodel");
    const [toggleDropdown,setToggleDropdown] = useState(false);
    const dispatch = useDispatch();
    const frontendExistingProjects = [{
        projectName : "E-Commerce Application",
        imageUrl : "images/img_springioicon1.svg"
    }];
    const backendExistingProjects =  [{
      projectName : "E-Commerce Application",
      imageUrl : "images/img_springioicon1.svg"
    }];
    const navigate = useNavigate();
    const projectTypes = [{ typeName :"Front End", path : "selectmodel"},{typeName : "Back End",path : "selectmodeltwo"},{typeName : "Both",path : "selectmodelfour"}];
    const onClickProjectTypeHandler = (project) => {
      dispatch(SET_PROJECT_TYPE(project.typeName));
      setNavigationKey(project.path);
      sessionStorage.setItem("project_type", project.typeName);
    }

    useEffect(() => {
      sessionStorage.setItem("project_type", "Front End");
    }, []);
    
     return (
    <>
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between max-w-[1256px] mx-[auto] md:px-[20px] w-[100%]">
          <HomeSidemenu
            className="bg-gray_901 flex flex-col md:hidden justify-start w-[250px]"
            ramg="Ram G"
            email="ram@gmail.com"
            setToggleDropdown = {setToggleDropdown}
            toggleDropdown = {toggleDropdown}
          />

          {/* items-start gap-[24px] can use instaed items-center to show existing project in below line  */}
          <div className={`flex flex-1 flex-col ${(navigationKey === "selectmodel" && frontendExistingProjects.length > 0 ) || (navigationKey === "selectmodeltwo" && backendExistingProjects.length > 0) ?"items-start" : "items-center"} justify-start md:mt-[0] mt-[32px] w-[100%]`}>
            <div className="flex items-start justify-start max-w-[982px] w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_50 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Home
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray_801 h-[1px] w-[100%]" />
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[24px] w-[100%]">
              <div className="border-[1px] border-gray_801 border-solid flex flex-row gap-[8px] items-center justify-start p-[6px] rounded-[4px] self-stretch w-[auto]">
                <List
                  className="project-type-container sm:flex-col flex-row gap-[8px] grid grid-cols-3 w-[100%]"
                  orientation="horizontal"
                >
                  {projectTypes.map((project,idx) => {
                    return(
                      <Button key={idx} onClick={() => onClickProjectTypeHandler(project)} className={`${project.path === navigationKey ? "active-project-type-button" : false} project-type-button cursor-pointer font-medium sm:px-[20px] px-[20px] py-[12px] rounded-[2px] text-[16px] text-center text-gray_900 w-[auto]`}>
                  {project.typeName}
                </Button>
                    )
                  })}
                </List>
              </div>
              <Button
                className="bg-teal_A400 cursor-pointer flex items-center justify-center min-w-[165px] px-[20px] py-[16px] rounded-[4px] w-[auto]"
                onClick = {() => navigate(`/${navigationKey}`)}
                leftIcon={
                  <Img
                    src="images/img_plus_gray_900.svg"
                    className="mr-[8px]"
                    alt="plus"
                  />
                }
              >
                <div className="font-medium text-[16px] text-gray_900 text-left">
                  New Project
                </div>
              </Button>
            </div>

                {/* use below code to display existing project */}
           
              {(navigationKey === "selectmodel" && frontendExistingProjects.length > 0) ?(
                 <div className="flex flex-row gap-[1rem] flex-wrap w-[100%] "> 
                 {frontendExistingProjects.map((frontendExistingProject,idx) => {
                 return(
                   <>
               <div className="flex items-center justify-start md:w-[100%] w-[227px] mt-[24px]" key={idx}>
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[227px]">
               <div className="bg-gray_901 flex items-center justify-center p-[40px] sm:px-[20px] rounded-[8px] w-[100%]">
               <div className="bg-gray_902 flex h-[88px] items-center justify-start p-[16px] rounded-[50%] w-[88px]">
              <Img
                   src={frontendExistingProject?.imageUrl}
                   className="h-[56px] w-[56px]"
                   alt="springioiconOne"
                 />
              </div>
              </div>
              <Text
                className="font-medium mt-[15px] text-center text-gray_50 w-[auto]"
                as="h6"
                variant="h6"
              >
                {frontendExistingProject?.projectName}
              </Text>
                   <div className="flex flex-row items-start justify-start mt-[5px] md:w-[100%] w-[23%]">
               <Img
                 src="images/img_clock_gray_501.svg"
                 className="h-[16px] w-[16px]"
                 alt="clock"
               />
               <Text
                 className="font-light text-center text-gray_501 w-[auto]"
                 variant="body3"
               >
                 Today
               </Text>
             </div>
           </div>
         </div>
               </>
                 )
               })}
               </div>
              )
                 : navigationKey === "selectmodeltwo" && backendExistingProjects.length > 0 ? (
                  <div className="flex flex-row gap-[1rem] flex-wrap w-[100%] "> 
                    {backendExistingProjects.map((backendExistingProject,idx) => {
                    return(
                      <>
                  <div className="flex items-center justify-start md:w-[100%] w-[227px] mt-[24px]" key={idx}>
                 <div className="flex flex-col items-start justify-start md:w-[100%] w-[227px]">
                  <div className="bg-gray_901 flex items-center justify-center p-[40px] sm:px-[20px] rounded-[8px] w-[100%]">
                  <div className="bg-gray_902 flex h-[88px] items-center justify-start p-[16px] rounded-[50%] w-[88px]">
                 <Img
                      src={backendExistingProject?.imageUrl}
                      className="h-[56px] w-[56px]"
                      alt="springioiconOne"
                    />
                 </div>
                 </div>
                 <Text
                   className="font-medium mt-[15px] text-center text-gray_50 w-[auto]"
                   as="h6"
                   variant="h6"
                 >
                   {backendExistingProject?.projectName}
                 </Text>
                      <div className="flex flex-row items-start justify-start mt-[5px] md:w-[100%] w-[23%]">
                  <Img
                    src="images/img_clock_gray_501.svg"
                    className="h-[16px] w-[16px]"
                    alt="clock"
                  />
                  <Text
                    className="font-light text-center text-gray_501 w-[auto]"
                    variant="body3"
                  >
                    Today
                  </Text>
                </div>
              </div>
            </div>
                  </>
                    )
                  })}
                  </div>
                 ) : (
                  <>
                  <Img
              src="images/img_frame529821_173x177.png"
              className="h-[173px] md:h-[auto] mt-[144px] object-cover sm:w-[100%] w-[19%]"
              alt="frame529821_One"
            />
            <Text
              className="font-normal mt-[35px] not-italic text-gray_50 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              It’s empty in here!
            </Text>
            <Text
              className="font-normal mt-[8px] not-italic text-gray_501 text-left w-[auto]"
              variant="body2"
            >
              Start building in Replicacia
            </Text> 
                  </>
                 )}
                      
            {/* only on click of 3 dots near user profile this should be shown */}
            {toggleDropdown ?(
            <div className="account-control-container bg-bluegray_906 flex flex-col gap-[20px] items-start justify-start mt-[-6rem] mr-[832px] p-[8px] rounded-[4px] md:w-[100%] w-[17%]">
              <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[4px] mt-[10px] self-stretch w-[auto]">
                <Img
                  src="images/img_user.svg"
                  className="cursor-pointer h-[24px] rounded-[50%] w-[24px]"
                  alt="user"
                />
                <Text
                  className="cursor-pointer font-normal not-italic text-gray_50 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  My Account
                </Text>
              </div>
              <Line className="bg-gray_801 h-[1px] rounded-[1px] w-[100%]" />
              <div className="flex flex-row gap-[8px] items-center justify-start mb-[8px] md:ml-[0] ml-[8px] self-stretch w-[auto]">
                <Img
                  src="images/img_arrowright.svg"
                  className="cursor-pointer h-[20px] w-[20px]"
                  alt="arrowright"
                />
                <Text
                  className="cursor-pointer font-normal not-italic text-gray_50 text-left w-[auto]"
                  variant="body2"                                 
                >
                  Logout
                </Text>
              </div>
            </div>):
              false
            }
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
