import React from "react";
import { useLocation } from "react-router-dom";

const DigestContent = () => {
  const location = useLocation();
  const data = location.state;

  console.log("Data from digest content: ", data);
  return <div>{/* <AppIcons app={getDigestAppCategory} /> */}</div>;
};

export default DigestContent;
