import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { SET_BACKEND } from "store/slices/fullstack.slice";

import TechStackList from "components/TechStackList";
import ButtonNew from "components/ButtonNew";
import { Line } from "components";
import { SET_BACKEND_BACKEND } from "store/slices/backend.slice";

const BackEndComponent = ({path,selected_backend}) => {
  const navigate = useNavigate();
  const [selectedTech, setSelectedTech]  = useState(selected_backend);
  const dispatch = useDispatch();

  const project_type = useSelector(store => store.basicInformation.projectType);
  const techList = [
    {name: 'Spring', src: "images/img_springioicon1.svg", description1: `Pharetra morbi libero id aliquam elit massa integer
    tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar
    ullamcorper sit dictumst ut eget a, elementum eu. Maecenas
    est morbi mattis id in ac pellentesque ac.`, 
    description2: `Lectus id duis vitae porttitor enim gravida morbi.
    Eu turpis posuere semper feugiat volutpat elit, ultrices
    suspendisse. Auctor vel in vitae placerat.
   
    Suspendisse maecenas ac donec scelerisque diam sed est
    duis purus.
  
    Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
    imperdiet commodo consectetur convallis risus. Sed
    condimentum enim dignissim adipiscing faucibus consequat,
    urna. Viverra purus et erat auctor aliquam.`, 
    description3: `Lectus id duis vitae porttitor enim gravida morbi.
    Eu turpis posuere semper feugiat volutpat elit, ultrices
    suspendisse. Auctor vel in vitae placerat.
    Suspendisse maecenas ac donec scelerisque diam sed est
    duis purus.`},
    {name: 'Servlet', src: "images/img_fire.svg", description1: `Pharetra morbi libero id aliquam elit massa integer
    tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar
    ullamcorper sit dictumst ut eget a, elementum eu. Maecenas
    est morbi mattis id in ac pellentesque ac.`},
    {name: 'Python', src: "images/img_pythonicon1.png", description1: 'Python description', },
    {name: 'Node JS', src: "images/img_volume.svg", description1: 'Node description'},
    {name: 'Blockchain', src: "images/img_settings_gray_50.svg", description1: 'Blockchain description'},
  ];
  const updateTech = (val) => {
    setSelectedTech(val);
  }
  const onSubmitHandler = () => {
    if(project_type === "Back End")
        dispatch(SET_BACKEND_BACKEND(selectedTech));
    else
      dispatch(SET_BACKEND(selectedTech));
    navigate(path);
  }

  return (
    <>
        
          <div className="flex flex-1 flex-col gap-[48px] items-center justify-start md:mt-[0] mt-[32px] md:px-[20px] w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
            <TechStackList techList={techList} updateTech={updateTech} selectedTech={selectedTech} 
            title="Select Back End" description="Choose the tech stack you want your project to build in"
            rhsDescription = "Select a Tech Stack to see it’s Features"/>
            </div>
            <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
              <Line className="bg-gray_801 h-[1px] w-[100%]" />
              <div className="flex items-start justify-end w-[100%]">
                <div className="flex flex-row gap-[12px] items-center justify-center pr-2">
                  <ButtonNew
                   onClick={() => navigate(-1)}
                   children="Previous"
                  >
                  </ButtonNew>
                  <ButtonNew
                    isActive={selectedTech}
                    onClick={() =>
                      selectedTech ?
                     onSubmitHandler() : null}
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

export default BackEndComponent;
