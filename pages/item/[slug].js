import React from "react";
import { getAllProductions, getProductionBySlug } from "@/lib/graphcms";
import { Box, Button, Typography } from "@mui/material";
import ModalImage from "@src/components/widgets/modal-image";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function Item(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const handleOpen = (image) => {
    setOpen(true);
    setSelectedImage(image);
  };
  const handleClose = () => setOpen(false);

  const { t } = useTranslation("common");

  return (
    <>
      {props.taller && (
        <Box sx={{ marginBottom: "2em" }}>
          <Box
            sx={{
              // marginBottom: '2em',
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "column",
              backgroundImage: `url(${props.taller.featuredImage.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              height: "300px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                bgcolor: "text.primary",
                color: "primary.contrastText",
                width: "100%",
                position: "absolute",
                bottom: 0,
                p: 2,
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                style={{ fontSize: "3rem", fontWeight: "bold" }}
              >
                {props.taller.title}
              </Typography>
              <Box>
                <Typography variant="h5" component="h3">
                  {t(props.taller.rol)} |{" "}
                  {new Date(props.taller.dateFrom).toLocaleDateString()}
                  to {new Date(props.taller.dateTo).toLocaleDateString()}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            {props.taller.description.split("\n").map((p) => (
              <Typography key={p.id} variant="body1" style={{ margin: "1em 0" }}>
                {p}
              </Typography>
            ))}
          </Box>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1em",
            }}
          >
            {props.taller.gallery.map((image) => (
              <>
                <Button>
                  <Image
                    key={image.id}
                    src={image.url}
                    alt={props.taller.title}
                    width={200}
                    height={200}
                    objectFit="cover"
                    onClick={() => handleOpen(image)}
                  />
                </Button>
              </>
            ))}
          </div>
          {open && (
            <ModalImage
              image={selectedImage}
              handleOpen={handleOpen}
              handleClose={handleClose}
              open={open}
            />
          )}
        </Box>
      )}
    </>
  );
}

export async function getStaticProps(ctx) {
  const slug = ctx.params.slug;
  const taller = await getProductionBySlug(slug, ctx.locale);

  return {
    props: {
      taller,
    },
  };
}

export async function getStaticPaths() {
  const projects = await getAllProductions();
  const paths = projects.map((p) => ({ params: { slug: p.slug } }));

  return {
    paths,
    fallback: true,
  };
}
