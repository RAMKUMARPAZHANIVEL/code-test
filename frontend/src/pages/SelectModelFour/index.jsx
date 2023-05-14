import React from "react";
import { useSelector } from "react-redux";

import SelectModelCommonPage from "pages/SelectModelCommon";

const SelectModelFourPage = () => {
  const selected_model = useSelector(store => store.fullstack.fullstack_details?.modelType);
  return (
    <>
      <SelectModelCommonPage path="/fetechstackone" selected_model={selected_model} />
    </>
  );
};

export default SelectModelFourPage;
