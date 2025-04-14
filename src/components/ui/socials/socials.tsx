"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

export const Socials = ({ props, color }: any) => {
  return (
    <div className="flex flex-col gap-2">
      {props.map((item: any) => {
        const Icons = (size: any) => {
          switch (item.icons) {
            case "fb":
              return <FaFacebookF fontSize={size.size} color={color.color} />;
            case "ig":
              return <FaInstagram fontSize={size.size} color={color.color} />;
            case "ld":
              return <FaLinkedin fontSize={size.size} color={color.color} />;
            case "yt":
              return <FaYoutube fontSize={size.size} color={color.color} />;
            default:
              "";
          }
        };
        return (
          <Link
            href={`${item.link}`}
            key={item._uid}
            className="border-[1px] border-black p-4 w-fit h-fit rounded-[50%] hover:border-[#51b688] social-links"
          >
            <Icons size="16" />
          </Link>
        );
      })}
    </div>
  );
};
