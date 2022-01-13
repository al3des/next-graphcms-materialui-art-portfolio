import React from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import { DRAWER_WIDTH } from "@/constants/constants";
import MenuIcon from "@mui/icons-material/Menu";
import Nav from "./nav";

export const isDrawerOpenContext = React.createContext(false);

export default function Aside({ children }) {
  const { isDrawerOpen } = React.useContext(isDrawerOpenContext);
  return (
    <Box>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          display: { xs: "none", md: "block" },
          flexShrink: 0,
          width: DRAWER_WIDTH,
          "& .MuiDrawer-paper": {
            width: { md: DRAWER_WIDTH, sm: `calc(${DRAWER_WIDTH} / 2)` },
          },
        }}
        position="fixed"
      >
        <Nav />
      </Drawer>
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        sx={{
          display: { xs: "block", md: "none" },
          width: DRAWER_WIDTH,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
          },
        }}
      >
        <Nav />
      </Drawer>
    </Box>
  );
}
