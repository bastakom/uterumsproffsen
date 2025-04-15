"use client";

import { LinkTypes } from "@/types/IfLinkInterface";
import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { Socials } from "../socials/socials";

export const FooterSection = ({ props }: any) => {
  return (
    <footer style={{ background: `${props.bg_footer?.color}` }}>
      <div
        className={`flex justify-center mx-auto text-center lg:text-left pb-10 lg:pb-10  pt-4 relative ${
          props.footer_full_width ? "w-full" : "container-section"
        }`}
        style={{ background: `${props.bg_footer?.color}` }}
      >
        <div className="flex flex-col items-center lg:items-start lg:grid lg:grid-cols-4 gap-0 lg:gap-10 w-full lg:w-[80%] lg:mx-auto lg:pt-10 text-white">
          <div>
            <div className="flex flex-col gap-5 mt-10 lg:mt-0">
              <Image
                src={props.logo.filename}
                alt={props.site_title}
                width={200}
                height={150}
                className="lg:-mt-4"
              />
              <span className="render-content lg:mt-7">
                {render(props.adress)}
              </span>
              <div className="flex flex-col">
                <Link href={`mailto:${props.mail}`}>{props.mail}</Link>
                <Link href={`tel:${props.phone}`}>{props.phone}</Link>
              </div>
            </div>
            {props.footer_logo.filename && (
              <Image
                src={props.footer_logo.filename}
                alt={props.footer_logo.alt}
                width={150}
                height={150}
                className=""
              />
            )}
          </div>

          <div className="flex flex-col mt-4 lg:mt-0">
            <div className="px-4 lg:px-0 lg:w-[350px] footer-info">
              {render(props.info_text)}
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center lg:items-end mt-10 lg:mt-0">
            {props.footer_menu.map((item: LinkTypes) => (
              <Link key={item._uid} href={item.link.cached_url}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
            <Socials props={props.fields} color={props.header_text_color} />
          </div>
        </div>
      </div>
    </footer>
  );
};
