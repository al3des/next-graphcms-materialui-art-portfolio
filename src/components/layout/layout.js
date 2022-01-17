import React from 'react'

import Aside, { isDrawerOpenContext } from "./aside";
import { Box, Container } from "@mui/material";
import MyAppBar from "./appbar";
import Head from 'next/head';
import { SITE_NAME } from '@/constants/constants';

export default function Layout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  return (
    <isDrawerOpenContext.Provider value={{isDrawerOpen, setIsDrawerOpen}}>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <MyAppBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          flexGrow: 1,
        }}
      >
        <Aside />
        <Container component="main">{children}</Container>
      </Box>
    </isDrawerOpenContext.Provider>
  );
}
