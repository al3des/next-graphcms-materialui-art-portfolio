import { getAllProductionsByType } from "@/lib/graphcms";
import Image from "next/image";
import Link from "next/link";

import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import RecentProjects from "@src/components/widgets/recent-projects";

export default function ProductionsList(props) {
  const { t } = useTranslation("common");
  if (!props.productions) {
    return <h2>{t("no_results")}</h2>;
  }
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE} | Taller Humano</title>
      </Head>
      <div>
        {props.productions.length ? <RecentProjects projects={props.productions} /> : t('no_results')}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const productions = await getAllProductionsByType(
    context.params.type,
    context.locale
  );
  return {
    props: {
      productions,
    },
  };
}

export async function getStaticPaths() {
  const paths = ["exhibicion", "taller_humano", "estampida", 'curatorship'].map((type) => ({
    params: { type },
  }));
  return {
    paths,
    fallback: true,
  };
}
