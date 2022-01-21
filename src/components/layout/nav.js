import React from "react";

import { useRouter } from "next/router";

import { SITE_NAME } from "@/constants/constants";

import useTranslation from "next-translate/useTranslation";
import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MyLink from "@src/Link";
import { isDrawerOpenContext } from "./aside";
import Footer from "./footer";

function Link({children, ...restProps}){
  return <MyLink color='inherit' {...restProps}>{children}</MyLink>
}

export default function Nav(props) {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { setIsDrawerOpen } = React.useContext(isDrawerOpenContext);
  return (
    <Box sx={{ p: 2 }}>
      <List onClick={()=>setIsDrawerOpen(false)}>
        <ListItem>
          <IconButton onClick={()=>setIsDrawerOpen(false)}>
            <ArrowBackIosIcon />
          </IconButton>
        </ListItem>
        <ListItem>
          <Link
            sx={{
              fontWeight: router.asPath.includes("/works") ? "bold" : "normal",
            }}
            underline="none"
            href="/works"
          >
            {t("works")}
          </Link>
        </ListItem>
        <ListItem>
          <Link
            sx={{
              fontWeight: router.asPath.includes("/curatorship") ? "bold" : "normal",
            }}
            underline="none"
            href="/prod/curatorship"
          >
            {t("curatorship")}
          </Link>
        </ListItem>
        <ListItem>
          <Link
            sx={{
              fontWeight: router.asPath.includes("/prod/taller_humano")
                ? "bold"
                : "normal",
            }}
            underline="none"
            href="/prod/taller_humano"
          >
            {t("taller_humano")}
          </Link>
        </ListItem>
        <ListItem>
          <Link
            sx={{
              fontWeight: router.asPath.includes("/prod/estampida")
                ? "bold"
                : "normal",
            }}
            underline="none"
            href="/prod/estampida"
          >
            {t("estampida")}
          </Link>
        </ListItem>
        <ListItem>
          <Link
            sx={{
              fontWeight: router.asPath.includes("prod/exhibicion")
                ? "bold"
                : "normal",
            }}
            underline="none"
            href="/prod/exhibicion"
          >
            {t("exhibitions")}
          </Link>
        </ListItem>

        <ListItem>
          <Link
            sx={{
              fontWeight: router.asPath.includes("/contact")
                ? "bold"
                : "normal",
            }}
            underline="none"
            href="/contact"
          >
            {t("contact")}
          </Link>
        </ListItem>
        <ListItem>
          language:
          {router.locale === "de" ? (
            <Link underline="none" href={router.asPath} locale="en">
              en
            </Link>
          ) : (
            <Link underline="none" href={router.asPath} locale="de">
              de
            </Link>
          )}
        </ListItem>
      </List>
      <Footer />
    </Box>
  );
}
