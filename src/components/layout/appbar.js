import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SITE_NAME } from "@/constants/constants";
import { isDrawerOpenContext } from "./aside";
import Link from "@src/Link";

export default function MyAppBar() {
  const { isDrawerOpen, setIsDrawerOpen } =
    React.useContext(isDrawerOpenContext);

  return (
    <Box
      sx={{
        flexGrow: 1,
        // display: { xs: "block", md: "none" },
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" color="text.primary" underline="none">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {SITE_NAME}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
