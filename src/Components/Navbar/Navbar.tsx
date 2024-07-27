"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import React from "react";
import Typography from "../Typography/Typography";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const homeLinks = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Courses",
      link: "/courses",
    },
    {
      label: "CV Revamp",
      link: "/cv-revamp",
    },
  ];
  const leftLinks = [
    {
      label: "Jobs",
      link: "/jobs",
    },
    {
      label: "Login",
      link: "/auth/login",
    },
  ];

  const pathname = usePathname();
  return (
    <div>
      <div className="md:flex justify-between items-center border-b boder-t-0 border-r-0 border-l-0 pt-9 pb-3 px-20">
        <div className="xl:flex xl:gap-3 lg:flex lg:gap-3 md:flex md:gap-3 items-center hidden">
          {homeLinks.map(({ label, link }, index) => (
            <>
              <div
                className={`border border-black rounded-full py-2 px-4 ${
                  pathname === link ? "bg-[#5922A9] border-none" : ""
                }`}
                key={index}
              >
                <Link href={link}>
                  <Typography
                    variant="tertiary"
                    size="sm"
                    weight="medium"
                    className={`transistion-all ease-in-out ${
                      pathname === link ? "!text-white" : ""
                    }`}
                  >
                    {label}
                  </Typography>
                </Link>
              </div>
            </>
          ))}
        </div>
        <div className="flex gap-16">
          <Image
            src={"/assets/JAPA-LOGO.svg"}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-[100px] xl:w-full h-auto object-contain object-center"
          />
          <MobileMenu />
        </div>

        <div>
          <div className="xl:flex xl:gap-3 lg:flex lg:gap-3 md:flex md:gap-3 hidden items-center">
            {leftLinks.map(({ label, link }, index) => (
              <>
                <div
                  className={`border border-black rounded-full py-2 px-4 ${
                    pathname === link ? "bg-[#5922A9] border-none" : ""
                  }`}
                  key={index}
                >
                  <Link href={link}>
                    <Typography
                      variant="tertiary"
                      size="sm"
                      weight="medium"
                      className={`transistion-all ease-in-out ${
                        pathname === link ? "!text-white" : ""
                      }`}
                    >
                      {label}
                    </Typography>
                  </Link>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
