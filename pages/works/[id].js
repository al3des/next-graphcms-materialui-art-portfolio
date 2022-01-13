import { getAllWorks, getWorkById } from "@/lib/graphcms";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function WorkDetail(props) {
  const { work } = props;
  if (!work) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <Head>
        <title>
          {process.env.NEXT_PUBLIC_SITE_TITLE} | {props.work.title}
        </title>
      </Head>
      <div className="w-lg max-h-screen flex flex-shrink">
        {work.image && (
          <Image
          src={work.image.url}
          alt={work.title}
            height={work.image.height}
            width={work.image.width}
            // layout="fill"
            objectFit="contain"
            placeholder="blur"
            blurDataURL="/placeholder.png"
            />
            )}
      </div>
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const work = await getWorkById(params.id, preview);
  return {
    props: {
      work,
    },
  };
}

export async function getStaticPaths() {
  const works = await getAllWorks();
  const paths = works.map((work) => ({ params: { id: work.id } }));
  return {
    paths,
    fallback: true,
  };
}
