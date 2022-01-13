import Footer from "./footer";
import Header from "./header";

import Aside from "./aside";
import Nav from "./nav";
import { Box, Container } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Box sx={{ display: "flex" , flexGrow: 1}}>
      <Aside>
        <Nav />
      </Aside>
      <Container
        component="main"
      >
        {children}
      </Container>
    </Box>
  );
}
