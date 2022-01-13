import Image from "next/image";
import Link from "@src/Link";
import useTranslation from "next-translate/useTranslation";

// MUI
import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export default function RecentProjects({ projects }) {
  const { t } = useTranslation("common");
  return (
    <Box
      maxWidth={800}
      margin="0px auto"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      {projects &&
        projects.map((p) => (
          <Card key={p.id}>
            <CardContent>
              <CardActionArea>
                <Image
                  src={p.featuredImage.url}
                  alt={p.title}
                  height={300}
                  width={300}
                  layout="responsive"
                  objectFit="cover"
                />
              </CardActionArea>
              <Typography component="h2" variant="h5">
                {p.title}
              </Typography>
              <Typography variant="body2">{p.excerpt}</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                component={Link}
                noLinkStyle
                href={`/item/${p.slug}`}
              >
                {t("read_more")}
              </Button>
            </CardActions>
          </Card>
        ))}
    </Box>
  );
}
