import React, { Fragment } from "react";
import { Typography } from "@mui/material";

import UserCatalog from "./UserCatalog/UserCatalog";

const Index = () => {
  return (
    <Fragment>
      <Typography style={{ textAlign: "center" }}>Click on any card</Typography>
      <UserCatalog />
    </Fragment>
  );
};

export default Index;
