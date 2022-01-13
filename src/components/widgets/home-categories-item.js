import Image from "next/image";

export default function HomeCategoriesItem({ item }) {
  return (
    <div>
      {item.featuredImage && (
        <div className="relative h-60 w-40">
          <Image
            blurDataURL
            placeholder="blur"
            src={item.featuredImage.url}
            layout="fill"
            objectFit="cover"
            // width={120}
            // height={400}
          />
        </div>
      )}
      <h2>{item.title}</h2>
    </div>
  );
}
