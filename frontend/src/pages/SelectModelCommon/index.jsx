import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Text, Line, Button, Input, Img, List } from "components";
import { CloseSVG } from "../../assets/images";
import ModelLibraryCategory from "components/ModelLibraryCategory";
import YourModelsTwoCategory from "components/YourModelsTwoCategory";
import YourModelsThreeCategory from "components/YourModelsThreeCategory";
import UploadmodelModal from "modals/Uploadmodel";
import { SET_MODEL_DETAIL } from "store/slices/fullstack.slice";
import { SET_BACKEND_MODEL_DETAIL } from "store/slices/backend.slice";
import { SET_FRONTEND_MODEL_DETAIL } from "store/slices/frontend.slice";

const SelectModelCommonPage = ({path,selected_model}) => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [modelListToShow,setModelListToShow] = useState([]);
  const [selectedModelName, setSelectedModelName] = useState(selected_model);
  const [toggleModel, setToggleModel] = useState(false);
  const [uploadComponentToShow,SetUploadComponentToShow] = useState(false);
  const [isAuthorizedId,setAuthorizedId] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const project_type = useSelector(store => store.basicInformation.projectType);
  console.log(project_type)
  const ExistingModelList = [
    { modalType: "Product Catalog", imgUrl: "images/img_report.svg" },
    { modalType: "Online Teacher", imgUrl: "images/img_cut.svg" },
    {
      modalType: "User Management",
      imgUrl: "images/img_download_teal_a400.svg",
    },
    { modalType: "E-commerce", imgUrl: "images/img_computer_gray_50.svg" },
    { modalType: "Customer Accounts", imgUrl: "images/img_group52991.svg" },
    { modalType: "Customers and Payments", imgUrl: "images/img_car.svg" },
    { modalType: "Traveler Trips", imgUrl: "images/img_car_gray_50.svg" },
    { modalType: "Student Assignments", imgUrl: "images/img_assignment.svg" },
  ];
  useEffect(_ => {
    const filteredList = ExistingModelList.filter(singleModel => {
      const modelTypeInLowerCase = singleModel.modalType.toLowerCase();
        if(modelTypeInLowerCase.startsWith(inputvalue.toLowerCase()))
           return true;
        if(modelTypeInLowerCase.includes(inputvalue))
           return true;
         return false;
    });
    setModelListToShow(filteredList);
    },[inputvalue])

  const onClickYourModelsHandler = () => {
    setToggleModel(true);
    setSelectedModelName("");
  };
  const SelectedModelHandler = () => {
    if(project_type === 'Front End')
    dispatch(SET_FRONTEND_MODEL_DETAIL(selectedModelName));
    else if(project_type === 'Back End')
    dispatch(SET_BACKEND_MODEL_DETAIL(selectedModelName));
    else
    dispatch(SET_MODEL_DETAIL(selectedModelName));
    navigate(path);
  };
  const updateSelectedModel = (singleModel) => {
    console.log('singleModel', singleModel);
    setSelectedModelName(singleModel);
  };

  const uploadModel = () => {
    console.log("upload model called")
     SetUploadComponentToShow(true);
  }


  return (
    <>   
         { uploadComponentToShow ? (
           <UploadmodelModal SetUploadComponentToShow={SetUploadComponentToShow}/>
          // <UploadmodelTwoModal />
          // <UploadmodelOneModal />
         ) : (
           <div className="flex flex-1 flex-col gap-[40px] items-center justify-start w-[100%]">
           <div className="flex flex-col items-center justify-start w-[100%]">
             <div className="flex items-start justify-start max-w-[982px] w-[100%]">
               <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                 <div className="flex items-start justify-start w-[100%]">
                   <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                     <Text
                       className="font-medium text-gray_50 text-left w-[auto]"
                       as="h2"
                       variant="h2"
                     >
                       Select A Model
                     </Text>
                     <Text
                       className="font-normal not-italic text-gray_501 text-left w-[auto]"
                       as="h6"
                       variant="h6"
                     >
                       Choose Models from the existing library or add your own
                     </Text>
                   </div>
                 </div>
                 <Line className="bg-gray_801 h-[1px] w-[100%]" />
               </div>
             </div>
             <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[32px] w-[100%]">
               <div className="border-[1px] border-gray_801 border-solid flex flex-row gap-[8px] items-center justify-start p-[6px] rounded-[4px] self-stretch w-[auto]">
                 <Button
                   onClick={() => setToggleModel(false)}
                   className={`${
                     !toggleModel
                       ? "bg-gray_300 text-gray_900"
                       : "text-gray_50"
                   } cursor-pointer font-medium min-w-[149px] px-[14px] py-[10px] rounded-[2px] text-[16px] text-center w-[auto]`}
                 >
                   Existing Models
                 </Button>
                 <Button
                   onClick={onClickYourModelsHandler}
                   className={`${
                     toggleModel ? "bg-gray_300 text-gray_900" : "text-gray_50"
                   } cursor-pointer font-medium min-w-[149px] px-[14px] py-[10px] rounded-[2px] text-[16px] text-center w-[auto]`}
                 >
                   Your Models
                 </Button>
               </div>
               <div className="flex sm:flex-1 sm:flex-col flex-row gap-[16px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                 <Input
                   value={inputvalue}
                   onChange={(e) => setInputvalue(e?.target?.value)}
                   wrapClassName="bg-gray_902 border-[1px] border-gray_801 border-solid flex p-[16px] rounded-[4px] sm:w-[100%] w-[73%]"
                   className="font-medium p-[0] placeholder:text-gray_801 text-[14px] text-gray_50 text-left w-[100%]"
                   name="searchbox"
                   placeholder="Search Models"
                   suffix={
                     inputvalue?.length > 0 ? (
                       <>
                         <CloseSVG
                           className="cursor-pointer ml-[35px] my-[auto]"
                           onClick={() => setInputvalue("")}
                           color="#4e4e4e"
                         />
                       </>
                     ) : (
                       <Img
                         src="images/img_search.svg"
                         className="cursor-pointer ml-[35px] my-[auto]"
                         alt="search"
                       />
                     )
                   }
                 ></Input>
                 {toggleModel ? (
                   <Button
                   className="bg-teal_A400 cursor-pointer flex items-center justify-center min-w-[217px] px-[20px] py-[16px] rounded-[4px] w-[auto]"
                   leftIcon={
                     <Img
                       src="images/img_plus_gray_900.svg"
                       className="mr-[8px]"
                       alt="plus"
                     />
                   }
                   onClick = {toggleModel ? uploadModel : null}
                 >
                   <div className="font-medium text-[16px] text-gray_900 text-left">
                     Upload New Model
                   </div>
                 </Button>
                 ) : (
                  null
                 ) }
                
               </div>
             </div>
             {/* conditional rendering b/w existing models list and your models list*/}
             {!toggleModel ? (
               <div className="md:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-[24px] w-[100%]">
                 {modelListToShow.map((singleModel, idx) => {
                   return (
                     <ModelLibraryCategory
                       className="cursor-pointer flex flex-1 flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]"
                       productcatalog={singleModel.modalType}
                       imgUrl={singleModel.imgUrl}
                       updateSelectedModel={updateSelectedModel}
                       selectedModelName={selectedModelName}
                       key={idx}
                     />
                   );
                 })}
               </div>
             ) : (
               /*created a extra div to wrap the yourModels list on below */
               <div className="flex w-[100%]">
                 <List
                   className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 grid-cols-2 mt-[24px] w-[49%]"
                   orientation="horizontal"
                 >
                   <YourModelsTwoCategory
                     className="cursor-pointer border-[2px] border-solid flex flex-col items-center justify-start p-[16px] rounded-[8px] w-[100%]"
                     groupThirtyEight="file type"
                     ecommerce="E-commerce"
                     v10="v1.0"
                     modelname="model_name"
                     timeZone="Amet minim mollit non deserunt ullamco est sit am..."
                     readmore="Read More"
                     updateSelectedModel={updateSelectedModel}
                     selectedModelName={selectedModelName}
                   />
                   <YourModelsThreeCategory
                     className="cursor-pointer bg-gray_901 flex flex-col items-center justify-start p-[16px] rounded-[8px] w-[100%]"
                     groupSixtyThree="file type"
                     ecommerce="E-commerce"
                     v10="v1.0"
                     modelname="model_name"
                     timeZone="Amet minim mollit non deserunt ullamco est sit am..."
                     readmore="Read More"
                   />
                 </List>
               </div>
             )}
           </div>
           <div className="flex flex-col gap-[16px] items-start justify-start max-w-[982px] w-[100%]">
             <Line className="bg-gray_801 h-[1px] w-[100%]" />
             <div className="flex h-[41px] md:h-[auto] items-start justify-between w-[100%]">
               <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                 <div className="flex flex-1 md:flex-1 flex-row gap-[8px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                   {selectedModelName ? (
                     <>
                       <Img
                         src="images/img_download_teal_a400.svg"
                         className="h-[24px] w-[24px]"
                         alt="download"
                       />
                       <Text
                         className="cursor-pointer font-medium text-left text-teal_A400 w-[auto]"
                         as="h6"
                         variant="h6"
                       >
                         Download Model
                       </Text>
                     </>
                   ) : (
                     false
                   )}
                 </div>
                 <Button
                   onClick={selectedModelName ? SelectedModelHandler : null}
                   className={`${
                     selectedModelName ? "bg-gradient" : "bg-teal_900"
                   } cursor-pointer font-medium sm:px-[20px] md:px-[40px] px-[64px] py-[10px] rounded-[4px] text-[14px] text-center text-gray_900 w-[161px]`}
                 >
                   Next
                 </Button>
               </div>
             </div>
           </div>
         </div>
         )}
    </>
  );
};
SelectModelCommonPage.defaultProps = {
  path: "/fetechstack",
  selected_model:"", 
};

export default SelectModelCommonPage;
