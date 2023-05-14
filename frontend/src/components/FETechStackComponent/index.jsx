import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Line } from "components";
import TechStackList from "components/TechStackList";
import ButtonNew from "components/ButtonNew";
import { SET_FRONTEND_FETECKSTACK } from "store/slices/frontend.slice";
import { SET_FETECKSTACK } from "store/slices/fullstack.slice";

const FETechStackComponent = ({path,selected_techStack}) => {
  const navigate = useNavigate();
  const [selectedTech, setSelectedTech]  = useState(selected_techStack);
  const dispatch = useDispatch();

  const project_type = useSelector(store => store.basicInformation.projectType);
  const techList = [
    { name: "React", src: "images/img_globe_light_blue_300.svg" , 
      description1: `Pharetra morbi libero id aliquam elit massa integer
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
      { name: "Open UI5", src: "images/img_group.png" , 
      description1: `Open UI5 morbi libero id aliquam elit massa integer
      tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar
      ullamcorper sit dictumst ut eget a, elementum eu. Maecenas
      est morbi mattis id in ac pellentesque ac.`, description2: `Open UI5 morbi libero id aliquam elit massa integer
      tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar
      ullamcorper sit dictumst ut eget a, elementum eu. Maecenas
      est morbi mattis id in ac pellentesque ac.`},
    { name: "HTML5", src: "images/img_arrowdown_deep_orange_701.svg", description1: 'HTML5 description' },
    { name: "Flutter", src: "images/img_google.svg", description1: 'Flutter description' },
    { name: "Angular", src: "images/img_arrowup.svg", description1: 'Angular description' },
    { name: "Vue JS",  src: "images/img_arrowdown_teal_400.svg", description1: 'VueJS description' }
  ];
  const updateTech = (val) => {
    setSelectedTech(val);
  }
  const onSubmitHandler = () => {
    if(project_type === "Front End")
     dispatch(SET_FRONTEND_FETECKSTACK(selectedTech));
    else
    dispatch(SET_FETECKSTACK(selectedTech));
    navigate(path);
  }

  return (
    <>
          <div className="flex flex-1 flex-col gap-[41px] items-center justify-start md:mt-[0] mt-[32px] md:px-[20px] w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <TechStackList choosen="Front End" techList={techList} updateTech={updateTech} selectedTech={selectedTech} updateItemToState={SET_FETECKSTACK}
                title="Select Front End" description="Choose the tech stack you want your project to build in"
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

FETechStackComponent.defaultProps = {
  path: "/",
  selected_techStack:"", 
};

export default FETechStackComponent;
