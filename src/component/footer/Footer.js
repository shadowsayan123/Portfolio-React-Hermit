import * as React from "react";
import { AppBar, Box, Toolbar, Icon } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import FooterCss from "./footer.module.css";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={FooterCss.footer}>
        <Toolbar className={FooterCss.toolbar}>
          <div className={FooterCss.textMessage}>
            <p>Connect with me via</p>
          </div>
          <div className={FooterCss.icons}>
            <Icon fontSize="large">
              <FacebookOutlinedIcon fontSize="large" />
            </Icon>
            <Icon fontSize="large">
              <LinkedInIcon fontSize="large" />
            </Icon>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
