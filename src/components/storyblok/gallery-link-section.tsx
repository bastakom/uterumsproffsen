"use client";

import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

export const GalleryLinkSection = ({ blok }: any) => {
  return (
    <div
      id="sponsor"
      {...storyblokEditable}
      className="container-section mb-20 mt-10 lg:mt-20 lg:px-20"
    >
      <h3 className="text-center uppercase mb-10 text-[#766153]">
        Samarbetspartners
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-6 gap-5">
        {blok.fields.map((item: any) => (
          <Link
            href={item.link.cached_url}
            target="_blank"
            className="grayscale transition-all duration-300 hover:grayscale-0 flex justify-center items-center py-4"
            key={item._uid}
          >
            <Image
              src={item.image.filename}
              alt={item.title || "title"}
              width={110}
              height={200}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
