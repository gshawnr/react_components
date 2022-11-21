import React from "react";

const Router = ({ navigation, children }) => {
  return navigation === children.type.name && children;
};

export default Router;
