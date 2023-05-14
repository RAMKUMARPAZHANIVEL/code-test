import React from "react";
import { useSelector } from "react-redux";

import FEScreen from "components/FEScreen";

const FETemplatePage = () => {
  const selected_feTemplates = useSelector(store => store.frontend.frontend_details?.FeTemplate);
  console.log(selected_feTemplates,"fe template")
  return (
    <>
      <FEScreen path="/capabilities" selected_feTemplates={selected_feTemplates}/> 
    </>
  );
};

export default FETemplatePage;
