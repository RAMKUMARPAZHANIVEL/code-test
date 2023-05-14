import React from "react";
import { useSelector } from "react-redux";

import BackEndComponent from "components/BackEndComponent";

const BackEndPage = () => {
  const selected_backend = useSelector(store => store.backend.backend_details?.backend);
  return (
    <>
      <BackEndComponent path="/database" selected_backend={selected_backend} />
    </>
  );
};

export default BackEndPage;
