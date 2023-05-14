import React,{useEffect, useState} from "react";
import Routes from "./Routes";
import VerticalLinearStepper from "pages/VerticalLinearStepper";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  const currentUrl = location.pathname;
  const [activeStep, setActiveStep] = useState(0);
  const project_type = useSelector(store => store.basicInformation.projectType);
  console.log(project_type);
   useEffect(() => {
    const frontendPaths = ['/selectmodel','/fetechstack','/fetemplate','/capabilities','/basicdetails','/review'];
    const backendPaths = ['/selectmodeltwo','/backend','/database','/capabilitiesone','/basicdetails','/review'];
    const bothPaths = ['/selectmodelfour','/fetechstackone','/fetemplateone','/backendone','/databasethree','/capabilitiestwo','/basicdetails','/review'];
  
      if(project_type === 'Both'){
         const index = bothPaths.indexOf(currentUrl);
         console.log(index)
         setActiveStep(index);
      }
      if(project_type === 'Front End'){
        const index = frontendPaths.indexOf(currentUrl);
        console.log(index)
        setActiveStep(index);
     }
     if(project_type === 'Back End'){
      const index = backendPaths.indexOf(currentUrl);
      console.log(index)
      setActiveStep(index);
     }
      
  }, [currentUrl,project_type])
  

  return (
    <>
    {(currentUrl === '/home1') || (currentUrl === '/') || (currentUrl === '/stepsone') ?  
      <Routes />
      :
      <div className="bg-gray_900 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between max-w-[1256px] mx-[auto] md:px-[20px] w-[100%]">
          <VerticalLinearStepper activeStep={activeStep} projectType={project_type}/> 
          <Routes />       
        </div>
      </div>
    }
    
    </>
  )
}

export default App;
