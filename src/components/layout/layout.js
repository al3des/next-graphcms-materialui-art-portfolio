import React from 'react'

import Aside, { isDrawerOpenContext } from "./aside";
import Nav from "./nav";
import { Box, Container } from "@mui/material";
import MyAppBar from "./appbar";

export default function Layout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  return (
    <isDrawerOpenContext.Provider value={{isDrawerOpen, setIsDrawerOpen}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          flexGrow: 1,
        }}
      >
        <MyAppBar />
        <Aside />
        <Container component="main">{children}</Container>
      </Box>
    </isDrawerOpenContext.Provider>
  );
}
