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
        <Toolbar sx={{
              display: 'flex',
        }}>
          <Box
            sx={{
              "::before": {
                content: `''`,
                background: `repeating-linear-gradient(
                to right,
                #f6ba52,
                #f6ba52 10px,
                #000 10px,
                #000 20px
              );`,
                height: "1px",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              },
            }}
          ></Box>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" color="text.primary" underline="none" sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div" >
              {SITE_NAME}
            </Typography>
          </Link>
          <Typography sx={{ justifySelf: "flex-end" }}>
            Site under construction
          </Typography>
          <Box
            sx={{
              "::after": {
                content: `''`,
                background: `repeating-linear-gradient(
                to right,
                #f6ba52,
                #f6ba52 10px,
                #000 10px,
                #000 20px
              );`,
                height: "1px",
                width: "100%",
                position: "absolute",
                bottom: 0,
                left: 0,
              },
            }}
          ></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
