"use client";

import Image from "next/image";

export const ImageBlock = ({ blok }: any) => {
  return (
    <div>
      <div
        className={`
          hidden lg:flex lg:relative mx-auto 
          lg:w-[1000px] 
          ${blok.big_image ? "lg:h-[600px] mb-20" : "lg:h-[200px]"}
        `}
      >
        <Image
          src={blok.image_desktop.filename}
          fill
          className={blok.big_image ? "object-cover" : "object-contain"}
          alt={blok.image_desktop.alt}
        />
      </div>

      {blok.image_mobile?.filename && (
        <div
          className={`
            relative lg:hidden mx-auto 
            ${blok.big_image ? "-mt-20 w-[350px] h-[400px] mb-10" : "-mt-10 -mb-10 w-[350px] h-[400px]"}
          `}
        >
          <Image
            src={blok.image_mobile.filename}
            fill
            className="object-contain"
            alt={blok.image_mobile.alt}
          />
        </div>
      )}
    </div>
  );
};
