import * as React from "react";
import { AppBar, Box, Toolbar, Icon } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import NavbarCss from "./navbar.module.css";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={NavbarCss.navbar}>
        <Toolbar className={NavbarCss.toolbar}>
          <div className={NavbarCss.heading}>
            <h1>Sayan Pal</h1>
          </div>
          <div className={NavbarCss.icons}>
            <Icon fontSize="large">
              <FacebookOutlinedIcon sx={{ color: "white" }} fontSize="large" />
            </Icon>
            <Icon fontSize="large">
              <LinkedInIcon sx={{ color: "white" }} fontSize="large" />
            </Icon>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
