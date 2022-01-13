import { useRouter } from "next/router";

import { SITE_NAME } from "@/constants/constants";

import NavLink from "@/components/utils/nav-link";

import useTranslation from "next-translate/useTranslation";
import { Box, Container, List, ListItem, Typography } from "@mui/material";
import Link from "@src/Link";

export default function Nav(props) {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <Box sx={{p: 2}}>
      <Box>
        <Link underline='none' href="/">
          <Typography variant="h5" component="h2">{SITE_NAME}</Typography> 
        </Link>
      </Box>
      <List>
        <ListItem>
          <Link sx={{fontWeight: router.asPath.includes('/works') ? 'bold' : 'normal' }} underline='none' href="/works">{t("works")}</Link>
        </ListItem>
        <ListItem>
          <Link sx={{fontWeight: router.asPath.includes('/prod/taller_humano') ? 'bold' : 'normal' }} underline='none' href="/prod/taller_humano">{t("taller_humano")}</Link>
        </ListItem>
        <ListItem>
          <Link sx={{fontWeight: router.asPath.includes('/prod/estampida') ? 'bold' : 'normal' }} underline='none' href="/prod/estampida">{t("estampida")}</Link>
        </ListItem>
        <ListItem>
          <Link sx={{fontWeight: router.asPath.includes('prod/exhibicion') ? 'bold' : 'normal' }} underline='none' href="/prod/exhibicion">{t("exhibitions")}</Link>
        </ListItem>
        {/* <ListItem><Link sx={{fontWeight: router.asPath.includes('') ? 'bold' : 'normal' }} underline='none'
            href="/productions"
            className={styles.Link}
            activeClassName={styles.LinkActive}
            >
            {t("curatorship_production")}
          </Link></ListItem> */}
        <ListItem>
          <Link sx={{fontWeight: router.asPath.includes('/contact') ? 'bold' : 'normal' }} underline='none' href="/contact">{t("contact")}</Link>
        </ListItem>
        <div>
          language:
          {router.locale === "de" ? (
            <Link underline='none' href={router.asPath} locale="en">
              en
            </Link>
          ) : (
            <Link underline='none' href={router.asPath} locale="de">
              de
            </Link>
          )}
        </div>
      </List>
    </Box>
  );
}
