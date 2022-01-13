import { getAllCategories, getAllWorks } from "@/lib/graphcms";
import Image from "next/image";
import Link from "@src/Link";
import React from "react";

import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { Avatar, Box, Button, Skeleton, Typography } from "@mui/material";

export default function Works(props) {
  const [filteredWorks, setFilteredWorks] = React.useState(props.works);
  const [filter, setFilter] = React.useState("reset");
  const { t } = useTranslation("common");
  const handleFilterWorksByCategory = (categoryId) => {
    if (categoryId === "reset") {
      setFilter("reset");
      setFilteredWorks(props.works);
      return;
    }
    setFilter(categoryId);
    setFilteredWorks(
      props.works.filter(
        (work) => work.worksCategory && work.worksCategory.id === categoryId
      )
    );
  };

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE} | Works</title>
      </Head>
      {/* Works Filter */}
      <Box sx={{py:2}}>
          <Button
            color={filter === "reset" ? "primary" : "inherit"}
            onClick={() => handleFilterWorksByCategory("reset")}
          >
            <Avatar sx={{mr:2}}>{t("all_works")}</Avatar>
            {t("all_works")}
          </Button>
          {props.categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => handleFilterWorksByCategory(category.id)}
              color={filter === category.id ? "primary" : "inherit"}
              // className={filter === category.id ? styles.filterSelected : ''}
            >
              <Avatar sx={{ mr: 2 }}>
                <Image
                  src={category.featuredImage.url}
                  width={50}
                  height={50}
                  objectFit="cover"
                  alt={category.title}
                />
              </Avatar>
              {category.title}
            </Button>
          ))}
      </Box>
      {/* Works Grid */}
      {filteredWorks.length > 0 ? (
        <Box sx={{display: 'grid', gridTemplateColumns:'repeat(3, minmax(200px, 1fr))'}}>
          {filteredWorks.map((work) => (
            <Box key={work.id}>
              <Link href={`/works/${work.id}`}>
                {work.image ? (
                  <Image
                    src={work.image.url}
                    alt={work.title}
                    width={550}
                    height={400}
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                  />
                ) : (
                  <Skeleton variant="rectangular" width={550} height={400} />
                )}
              </Link>
            </Box>
          ))}
        </Box>
      ) : (
        <Typography variant="body2">{t("no_results")}</Typography>
      )}
    </>
  );
}

export async function getStaticProps(ctx) {
  const works = await getAllWorks();
  const categories = await getAllCategories(ctx.locale);
  return {
    props: {
      categories,
      works,
    },
  };
}
