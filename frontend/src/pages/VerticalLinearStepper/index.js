import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

const ColorlibStepIconRoot = styled('div')(({ ownerState }) => ({
  backgroundColor:"#232323",
  zIndex: 1,
  color: '#959595',
  width: 30,
  height: 30,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  border:"3px solid #232323",
  outline:"1.5px solid #bdbdbd",
  ...(ownerState.active && {
    backgroundColor:"#17FFA6",
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    color : "black",
    position : "relative",
    top:"0",
    outline:"1.5px solid #17ffa6",
  }),
  ...(ownerState.completed && {
    backgroundImage: `url("images/img_checkmark_teal_a400.svg")`, 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: '#232323',
    outline:"1.5px solid #17FFA6",     
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8"
  };

  return (
    <ColorlibStepIconRoot ownerState={{ active, completed }} className={className}>
      {completed ? (
         null
      ) : (
        icons[String(props.icon)]
      )}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};


const frontendSteps = [
  { label: 'Select A Model' },
  { label: 'Select Front End' },
  { label: 'Select Screen' },
  { label: 'Select Capabilities' },
  { label: 'Basic Details' },
  { label: 'Review' },
];
const BackendSteps = [
  { label: 'Select A Model' },
  { label: 'Select Back End' },
  { label: 'Select Database' },
  { label: 'Select Capabilities' },
  { label: 'Basic Details' },
  { label: 'Review' },
];
const BothSteps = [
  { label: 'Select A Model' },
  { label: 'Select Front End' },
  { label: 'Select Screen' },
  { label: 'Select Back End' },
  { label: 'Select Database' },
  { label: 'Select Capabilities' },
  { label: 'Basic Details' },
  { label: 'Review' },
];

export default function VerticalLinearStepper({activeStep,projectType}) {
  const [steps,setSteps] = useState([]);
  React.useEffect(() => {
    if(projectType === "Both")
      setSteps(BothSteps);
    else if(projectType === "Back End")
      setSteps(BackendSteps);
    else
      setSteps(frontendSteps)
  },[projectType])
  return (
    <Box 
    className='bg-gray_901 flex flex-col md:hidden justify-start w-[250px]'
    >
      <div className="flex flex-row gap-[9px] items-center justify-center mx-[auto] my-[113px] w-[73%]">
      <Stepper activeStep={activeStep} orientation="vertical" 
        sx={{
          '.css-8t49rw-MuiStepConnector-line': {
             minHeight:"35px",
             marginLeft: "2px",
          }
        }}
      >
        {steps.map((step, index) => (
          <Step key={step.label} 
          sx={{
            '& .MuiStepLabel-root .Mui-completed': {
              color: '#dddddd', // circle color (COMPLETED)
              fontSize:"1rem",
            },
            // '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
            //   {
            //     color: 'white', // Just text label (COMPLETED)
            //   },
            '& .MuiStepLabel-root .Mui-active': {
              color: '#f8fafc', // circle color (ACTIVE)
              fontSize:"1rem",
            },
            // '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
            //   {
            //     color: 'common.white', // Just text label (ACTIVE)
            //   },
            // '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
            //   fill: 'white', // circle's number (ACTIVE)
            // },
            'span.MuiStepLabel-label.Mui-disabled.css-1hv8oq8-MuiStepLabel-label': {
              color:'#959595',
              fontSize:"1rem",
            }
          }}
          >
            <StepLabel
                StepIconComponent={ColorlibStepIcon}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>
    </Box>
  );
}
