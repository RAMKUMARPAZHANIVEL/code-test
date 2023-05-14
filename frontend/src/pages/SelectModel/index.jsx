import React from "react";
import { useSelector } from "react-redux";

import SelectModelCommonPage from "pages/SelectModelCommon";

const SelectModelPage = () => {
    const selected_model = useSelector(store => store.frontend.frontend_details?.modelType);
    
  return (
    <>
      <SelectModelCommonPage path="/fetechstack" selected_model={selected_model} />
    </>
  );
};

export default SelectModelPage;
