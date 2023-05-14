import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HomeMain from "pages/universalPage/homeMain";
const Error1 = React.lazy(() => import("pages/Error1"));
const VerticalLinearStepper = React.lazy(() => import("pages/VerticalLinearStepper"));
const Error = React.lazy(() => import("pages/Error"));
const FAQs = React.lazy(() => import("pages/FAQs"));
const HelpandSupportOne = React.lazy(() => import("pages/HelpandSupportOne"));
const WhatsNew = React.lazy(() => import("pages/WhatsNew"));
const Databaselocked = React.lazy(() => import("pages/Databaselocked"));
const StepsSix = React.lazy(() => import("pages/StepsSix"));
const YourModelsTwo = React.lazy(() => import("pages/YourModelsTwo"));
const Code = React.lazy(() => import("pages/Code"));
const CodeGenerated = React.lazy(() => import("pages/CodeGenerated"));
const StepsTwelve = React.lazy(() => import("pages/StepsTwelve"));
const StepsEleven = React.lazy(() => import("pages/StepsEleven"));
const StepsTen = React.lazy(() => import("pages/StepsTen"));
const StepsNine = React.lazy(() => import("pages/StepsNine"));
const StepsEight = React.lazy(() => import("pages/StepsEight"));
const StepsSeven = React.lazy(() => import("pages/StepsSeven"));
const StepsFive = React.lazy(() => import("pages/StepsFive"));
const StepsFour = React.lazy(() => import("pages/StepsFour"));
const StepsThree = React.lazy(() => import("pages/StepsThree"));
const StepsTwo = React.lazy(() => import("pages/StepsTwo"));
const StepsOne = React.lazy(() => import("pages/StepsOne"));
const Review = React.lazy(() => import("pages/Review"));
const BasicDetailsFour = React.lazy(() => import("pages/BasicDetailsFour"));
const BasicDetailsTwelve = React.lazy(() => import("pages/BasicDetailsTwelve"));
const BasicDetailsTen = React.lazy(() => import("pages/BasicDetailsTen"));
const BasicDetailsSeven = React.lazy(() => import("pages/BasicDetailsSeven"));

const BasicDetailsThirtyNine = React.lazy(() =>
  import("pages/BasicDetailsThirtyNine")
);
const BasicDetailsThirtyThree = React.lazy(() =>
  import("pages/BasicDetailsThirtyThree")
);
const BasicDetailsThirtyEight = React.lazy(() =>
  import("pages/BasicDetailsThirtyEight")
);
const BasicDetailsThirtyFive = React.lazy(() =>
  import("pages/BasicDetailsThirtyFive")
);
const CapabilitiesselectedTwo = React.lazy(() =>
  import("pages/CapabilitiesselectedTwo")
);
const CapabilitiesTwo = React.lazy(() => import("pages/CapabilitiesTwo"));
const DatabaseThree = React.lazy(() => import("pages/DatabaseThree"));
const DatabaseTwo = React.lazy(() => import("pages/DatabaseTwo"));
const BackEndOne = React.lazy(() => import("pages/BackEndOne"));
const FETemplatehoverOne = React.lazy(() => import("pages/FETemplatehoverOne"));
const FETemplateaddedOne = React.lazy(() => import("pages/FETemplateaddedOne"));
const FETemplateopenOne = React.lazy(() => import("pages/FETemplateopenOne"));
const FETemplateOne = React.lazy(() => import("pages/FETemplateOne"));
const FETechStackselectedOne = React.lazy(() =>
  import("pages/FETechStackselectedOne")
);
const FETechStackOne = React.lazy(() => import("pages/FETechStackOne"));
const SelectModelFour = React.lazy(() => import("pages/SelectModelFour"));
const ResetPasswordEight = React.lazy(() => import("pages/ResetPasswordEight"));
const ResetPasswordTen = React.lazy(() => import("pages/ResetPasswordTen"));
const ResetPasswordNine = React.lazy(() => import("pages/ResetPasswordNine"));
const ResetPasswordFive = React.lazy(() => import("pages/ResetPasswordFive"));
const ResetPasswordFour = React.lazy(() => import("pages/ResetPasswordFour"));
const ResetPasswordThree = React.lazy(() => import("pages/ResetPasswordThree"));
const ResetPasswordTwo = React.lazy(() => import("pages/ResetPasswordTwo"));
const ResetPasswordOne = React.lazy(() => import("pages/ResetPasswordOne"));
const DatabaselockedTwo = React.lazy(() => import("pages/DatabaselockedTwo"));
const DatabaselockedThree = React.lazy(() =>
  import("pages/DatabaselockedThree")
);
const CodeTwo = React.lazy(() => import("pages/CodeTwo"));
const CodeGeneratedTwo = React.lazy(() => import("pages/CodeGeneratedTwo"));
const Frame53226 = React.lazy(() => import("pages/Frame53226"));
const StepsFortyNine = React.lazy(() => import("pages/StepsFortyNine"));
const StepsFortyEight = React.lazy(() => import("pages/StepsFortyEight"));
const StepsFortySeven = React.lazy(() => import("pages/StepsFortySeven"));
const StepsFortySix = React.lazy(() => import("pages/StepsFortySix"));
const StepsFortyFive = React.lazy(() => import("pages/StepsFortyFive"));
const StepsFortyFour = React.lazy(() => import("pages/StepsFortyFour"));
const StepsFortyThree = React.lazy(() => import("pages/StepsFortyThree"));
const BasicDetails = React.lazy(() =>
  import("pages/BasicDetails")
);
const BasicDetailsThirtySix = React.lazy(() =>
  import("pages/BasicDetailsThirtySix")
);
const BasicDetailsThirtyOne = React.lazy(() =>
  import("pages/BasicDetailsThirtyOne")
);
const BasicDetailsTwentyFive = React.lazy(() =>
  import("pages/BasicDetailsTwentyFive")
);
const BasicDetailsFifteen = React.lazy(() =>
  import("pages/BasicDetailsFifteen")
);
const BasicDetailsTwentySix = React.lazy(() =>
  import("pages/BasicDetailsTwentySix")
);
const BasicDetailsTwentyEight = React.lazy(() =>
  import("pages/BasicDetailsTwentyEight")
);
const BasicDetailsTwentyOne = React.lazy(() =>
  import("pages/BasicDetailsTwentyOne")
);
const BasicDetailsThirteen = React.lazy(() =>
  import("pages/BasicDetailsThirteen")
);
const BasicDetailsTwentyThree = React.lazy(() =>
  import("pages/BasicDetailsTwentyThree")
);
const BasicDetailsTwentyTwo = React.lazy(() =>
  import("pages/BasicDetailsTwentyTwo")
);
const BasicDetailsTwentySeven = React.lazy(() =>
  import("pages/BasicDetailsTwentySeven")
);
const CapabilitiesselectedOne = React.lazy(() =>
  import("pages/CapabilitiesselectedOne")
);
const Capabilities = React.lazy(() => import("pages/Capabilities"));
const Database = React.lazy(() => import("pages/Database"));
const BackEnd = React.lazy(() => import("pages/BackEnd"));
const SelectModelTwo = React.lazy(() => import("pages/SelectModelTwo"));
const ForgotPasswordFive = React.lazy(() => import("pages/ForgotPasswordFive"));
const ForgotPasswordFour = React.lazy(() => import("pages/ForgotPasswordFour"));
const ForgotPasswordThree = React.lazy(() =>
  import("pages/ForgotPasswordThree")
);
const ForgotPasswordTwo = React.lazy(() => import("pages/ForgotPasswordTwo"));
const ForgotPasswordOne = React.lazy(() => import("pages/ForgotPasswordOne"));
const CodeOne = React.lazy(() => import("pages/CodeOne"));
const CodeGeneratedOne = React.lazy(() => import("pages/CodeGeneratedOne"));
const StepsThirtyOne = React.lazy(() => import("pages/StepsThirtyOne"));
const StepsThirty = React.lazy(() => import("pages/StepsThirty"));
const StepsTwentyNine = React.lazy(() => import("pages/StepsTwentyNine"));
const StepsTwentyEight = React.lazy(() => import("pages/StepsTwentyEight"));
const StepsTwentySeven = React.lazy(() => import("pages/StepsTwentySeven"));
const StepsTwentySix = React.lazy(() => import("pages/StepsTwentySix"));
const StepsThirteen = React.lazy(() => import("pages/StepsThirteen"));
const BasicDetailsTwentyFour = React.lazy(() =>
  import("pages/BasicDetailsTwentyFour")
);
const Capabilitiesselected = React.lazy(() =>
  import("pages/Capabilitiesselected")
);
const CapabilitiesOne = React.lazy(() => import("pages/CapabilitiesOne"));
const FETemplatehover = React.lazy(() => import("pages/FETemplatehover"));
const FETemplateadded = React.lazy(() => import("pages/FETemplateadded"));
const FETemplateopen = React.lazy(() => import("pages/FETemplateopen"));
const FETemplate = React.lazy(() => import("pages/FETemplate"));

const FETechStack = React.lazy(() => import("pages/FETechStack"));
const SelectModel = React.lazy(() => import("pages/SelectModel"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ModelLibraryOne = React.lazy(() => import("pages/ModelLibraryOne"));
const ModelLibrarynotfound = React.lazy(() =>
  import("pages/ModelLibrarynotfound")
);
const YourModels = React.lazy(() => import("pages/YourModels"));
const ModelLibrarynotfoundOne = React.lazy(() =>
  import("pages/ModelLibrarynotfoundOne")
);
const ModelLibrarysearchresult = React.lazy(() =>
  import("pages/ModelLibrarysearchresult")
);
const ModelLibrarysearchactive = React.lazy(() =>
  import("pages/ModelLibrarysearchactive")
);
const ModelLibrary = React.lazy(() => import("pages/ModelLibrary"));
const OTPOne = React.lazy(() => import("pages/OTPOne"));
const LoginSix = React.lazy(() => import("pages/LoginSix"));
const LoginEight = React.lazy(() => import("pages/LoginEight"));
const LoginFour = React.lazy(() => import("pages/LoginFour"));
const SettingsThree = React.lazy(() => import("pages/SettingsThree"));
const SettingsOne = React.lazy(() => import("pages/SettingsOne"));
const AddCardDetailsNineteen = React.lazy(() =>
  import("pages/AddCardDetailsNineteen")
);
const BillingAddressTen = React.lazy(() => import("pages/BillingAddressTen"));
const Allfeaturesandbenefits = React.lazy(() =>
  import("pages/Allfeaturesandbenefits")
);
const AllfeaturesandbenefitsOne = React.lazy(() =>
  import("pages/AllfeaturesandbenefitsOne")
);
const EditCardDetails = React.lazy(() => import("pages/EditCardDetails"));
const MyAccountbillingTwo = React.lazy(() =>
  import("pages/MyAccountbillingTwo")
);
const MyAccountbillingOne = React.lazy(() =>
  import("pages/MyAccountbillingOne")
);
const PaymentDetailsEleven = React.lazy(() =>
  import("pages/PaymentDetailsEleven")
);
const SelectPlans = React.lazy(() => import("pages/SelectPlans"));
const SelectPlansOne = React.lazy(() => import("pages/SelectPlansOne"));
const MyAccountPassword = React.lazy(() => import("pages/MyAccountPassword"));
const OTPFour = React.lazy(() => import("pages/OTPFour"));
const SignupEleven = React.lazy(() => import("pages/SignupEleven"));
const MyAccountMyDetailsNine = React.lazy(() =>
  import("pages/MyAccountMyDetailsNine")
);
const SignupOne = React.lazy(() => import("pages/SignupOne"));
const ProjectRoutes = () => {
  return (
    // <div className="flex flex-1 flex-col items-center justify-start w-[70%]">
    <React.Suspense fallback={<>Loading...</>} >
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<SignupOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homemain" element={<HomeMain />}/> 
          <Route
            path="/myaccountmydetailsnine"
            element={<MyAccountMyDetailsNine />}
          />
          <Route path="/signupeleven" element={<SignupEleven />} />
          <Route path="/otpfour" element={<OTPFour />} />
          <Route path="/myaccountpassword" element={<MyAccountPassword />} />
          <Route path="/selectplansone" element={<SelectPlansOne />} />
          <Route path="/selectplans" element={<SelectPlans />} />
          <Route
            path="/paymentdetailseleven"
            element={<PaymentDetailsEleven />}
          />
          <Route
            path="/myaccountbillingone"
            element={<MyAccountbillingOne />}
          />
          <Route
            path="/myaccountbillingtwo"
            element={<MyAccountbillingTwo />}
          />
          <Route path="/editcarddetails" element={<EditCardDetails />} />
          <Route
            path="/allfeaturesandbenefitsone"
            element={<AllfeaturesandbenefitsOne />}
          />
          <Route
            path="/allfeaturesandbenefits"
            element={<Allfeaturesandbenefits />}
          />
          <Route path="/billingaddressten" element={<BillingAddressTen />} />
          <Route
            path="/addcarddetailsnineteen"
            element={<AddCardDetailsNineteen />}
          />
          <Route path="/settingsone" element={<SettingsOne />} />
          <Route path="/settingsthree" element={<SettingsThree />} />
          <Route path="/loginfour" element={<LoginFour />} />
          <Route path="/logineight" element={<LoginEight />} />
          <Route path="/loginsix" element={<LoginSix />} />
          <Route path="/otpone" element={<OTPOne />} />
          <Route path="/modellibrary" element={<ModelLibrary />} />
          <Route
            path="/modellibrarysearchactive"
            element={<ModelLibrarysearchactive />}
          />
          <Route
            path="/modellibrarysearchresult"
            element={<ModelLibrarysearchresult />}
          />
          <Route
            path="/modellibrarynotfoundone"
            element={<ModelLibrarynotfoundOne />}
          />
          <Route path="/yourmodels" element={<YourModels />} />
          <Route
            path="/modellibrarynotfound"
            element={<ModelLibrarynotfound />}
          />
          <Route path="/modellibraryone" element={<ModelLibraryOne />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/selectmodel" element={<SelectModel />} />
          <Route path="/fetechstack" element={<FETechStack />} />
          <Route path="/fetemplate" element={<FETemplate />} />
          <Route path="/fetemplateopen" element={<FETemplateopen />} />
          <Route path="/fetemplateadded" element={<FETemplateadded />} />
          <Route path="/fetemplatehover" element={<FETemplatehover />} />
          <Route path="/capabilitiesone" element={<CapabilitiesOne />} />
          <Route
            path="/capabilitiesselected"
            element={<Capabilitiesselected />}
          />
          <Route
            path="/basicdetailstwentyfour"
            element={<BasicDetailsTwentyFour />}
          />
          <Route path="/stepsthirteen" element={<StepsThirteen />} />
          <Route path="/stepstwentysix" element={<StepsTwentySix />} />
          <Route path="/stepstwentyseven" element={<StepsTwentySeven />} />
          <Route path="/stepstwentyeight" element={<StepsTwentyEight />} />
          <Route path="/stepstwentynine" element={<StepsTwentyNine />} />
          <Route path="/stepsthirty" element={<StepsThirty />} />
          <Route path="/stepsthirtyone" element={<StepsThirtyOne />} />
          <Route path="/codegeneratedone" element={<CodeGeneratedOne />} />
          <Route path="/codeone" element={<CodeOne />} />
          <Route path="/forgotpasswordone" element={<ForgotPasswordOne />} />
          <Route path="/forgotpasswordtwo" element={<ForgotPasswordTwo />} />
          <Route
            path="/forgotpasswordthree"
            element={<ForgotPasswordThree />}
          />
          <Route path="/forgotpasswordfour" element={<ForgotPasswordFour />} />
          <Route path="/forgotpasswordfive" element={<ForgotPasswordFive />} />
          <Route path="/selectmodeltwo" element={<SelectModelTwo />} />
          <Route path="/backend" element={<BackEnd />} />
          <Route path="/database" element={<Database />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route
            path="/capabilitiesselectedone"
            element={<CapabilitiesselectedOne />}
          />
          <Route
            path="/basicdetails"
            element={<BasicDetails />}
          />
          <Route
            path="/basicdetailstwentyseven"
            element={<BasicDetailsTwentySeven />}
          />
          <Route
            path="/basicdetailstwentytwo"
            element={<BasicDetailsTwentyTwo />}
          />
          <Route
            path="/basicdetailstwentythree"
            element={<BasicDetailsTwentyThree />}
          />
          <Route
            path="/basicdetailsthirteen"
            element={<BasicDetailsThirteen />}
          />
          <Route
            path="/basicdetailstwentyone"
            element={<BasicDetailsTwentyOne />}
          />
          <Route
            path="/basicdetailstwentyeight"
            element={<BasicDetailsTwentyEight />}
          />
          <Route
            path="/basicdetailstwentysix"
            element={<BasicDetailsTwentySix />}
          />
          <Route
            path="/basicdetailsfifteen"
            element={<BasicDetailsFifteen />}
          />
          <Route
            path="/basicdetailstwentyfive"
            element={<BasicDetailsTwentyFive />}
          />
          <Route
            path="/basicdetailsthirtyone"
            element={<BasicDetailsThirtyOne />}
          />
          <Route
            path="/basicdetailsthirtysix"
            element={<BasicDetailsThirtySix />}
          />
          <Route path="/stepsfortythree" element={<StepsFortyThree />} />
          <Route path="/stepsfortyfour" element={<StepsFortyFour />} />
          <Route path="/stepsfortyfive" element={<StepsFortyFive />} />
          <Route path="/stepsfortysix" element={<StepsFortySix />} />
          <Route path="/stepsfortyseven" element={<StepsFortySeven />} />
          <Route path="/stepsfortyeight" element={<StepsFortyEight />} />
          <Route path="/stepsfortynine" element={<StepsFortyNine />} />
          <Route path="/frame53226" element={<Frame53226 />} />
          <Route path="/codegeneratedtwo" element={<CodeGeneratedTwo />} />
          <Route path="/codetwo" element={<CodeTwo />} />
          <Route
            path="/databaselockedthree"
            element={<DatabaselockedThree />}
          />
          <Route path="/databaselockedtwo" element={<DatabaselockedTwo />} />
          <Route path="/resetpasswordone" element={<ResetPasswordOne />} />
          <Route path="/resetpasswordtwo" element={<ResetPasswordTwo />} />
          <Route path="/resetpasswordthree" element={<ResetPasswordThree />} />
          <Route path="/resetpasswordfour" element={<ResetPasswordFour />} />
          <Route path="/resetpasswordfive" element={<ResetPasswordFive />} />
          <Route path="/resetpasswordnine" element={<ResetPasswordNine />} />
          <Route path="/resetpasswordten" element={<ResetPasswordTen />} />
          <Route path="/resetpasswordeight" element={<ResetPasswordEight />} />
          <Route path="/selectmodelfour" element={<SelectModelFour />} />
          <Route path="/fetechstackone" element={<FETechStackOne />} />
          <Route
            path="/fetechstackselectedone"
            element={<FETechStackselectedOne />}
          />
          <Route path="/fetemplateone" element={<FETemplateOne />} />
          <Route path="/fetemplateopenone" element={<FETemplateopenOne />} />
          <Route path="/fetemplateaddedone" element={<FETemplateaddedOne />} />
          <Route path="/fetemplatehoverone" element={<FETemplatehoverOne />} />
          <Route path="/backendone" element={<BackEndOne />} />
          <Route path="/databasetwo" element={<DatabaseTwo />} />
          <Route path="/databasethree" element={<DatabaseThree />} />
          <Route path="/capabilitiestwo" element={<CapabilitiesTwo />} />
          <Route
            path="/capabilitiesselectedtwo"
            element={<CapabilitiesselectedTwo />}
          />
          <Route
            path="/basicdetailsthirtyfive"
            element={<BasicDetailsThirtyFive />}
          />
          <Route
            path="/basicdetailsthirtyeight"
            element={<BasicDetailsThirtyEight />}
          />
          <Route
            path="/basicdetailsthirtythree"
            element={<BasicDetailsThirtyThree />}
          />
          <Route
            path="/basicdetailsthirtynine"
            element={<BasicDetailsThirtyNine />}
          />
          <Route path="/basicdetailsseven" element={<BasicDetailsSeven />} />
          <Route path="/basicdetailsten" element={<BasicDetailsTen />} />
          <Route path="/basicdetailstwelve" element={<BasicDetailsTwelve />} />
          <Route path="/basicdetailsfour" element={<BasicDetailsFour />} />
          <Route path="/review" element={<Review />} />
          <Route path="/stepsone" element={<StepsOne />} />
          <Route path="/stepstwo" element={<StepsTwo />} />
          <Route path="/stepsthree" element={<StepsThree />} />
          <Route path="/stepsfour" element={<StepsFour />} />
          <Route path="/stepsfive" element={<StepsFive />} />
          <Route path="/stepsseven" element={<StepsSeven />} />
          <Route path="/stepseight" element={<StepsEight />} />
          <Route path="/stepsnine" element={<StepsNine />} />
          <Route path="/stepsten" element={<StepsTen />} />
          <Route path="/stepseleven" element={<StepsEleven />} />
          <Route path="/stepstwelve" element={<StepsTwelve />} />
          <Route path="/codegenerated" element={<CodeGenerated />} />
          <Route path="/code" element={<Code />} />
          <Route path="/yourmodelstwo" element={<YourModelsTwo />} />
          <Route path="/stepssix" element={<StepsSix />} />
          <Route path="/databaselocked" element={<Databaselocked />} />
          <Route path="/whatsnew" element={<WhatsNew />} />
          <Route path="/helpandsupportone" element={<HelpandSupportOne />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/error" element={<Error />} />
          <Route path="/error1" element={<Error1 />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
          <Route
            path="/verticallinearstepper"
            element={<VerticalLinearStepper />}
          />
        </Routes>
      {/* </Router> */}
    </React.Suspense>
    // </div>
  );
};
export default ProjectRoutes;
