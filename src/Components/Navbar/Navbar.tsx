import Link from "next/link";
import React from "react";
import Typography from "../Typography/Typography";
import Image from "next/image";

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
  return (
    <div>
      <div className="md:flex justify-between items-center border-b boder-t-0 border-r-0 border-l-0 pt-9 pb-3 hidden px-20">
        <div className="flex gap-3 items-center">
          {homeLinks.map(({ label, link }, index) => (
            <>
              <div className="border border-black rounded-full py-2 px-4 hover:bg-[#5922A9]">
                <Link href={link}>
                  <Typography variant="tertiary" size="sm" weight="medium" className="hover:text-white transistion-all ease-in-out">
                    {label}
                  </Typography>
                </Link>
              </div>
            </>
          ))}
        </div>
        <div>
          <Image
            src={"/assets/JAPA-LOGO.svg"}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain object-center"
          />
        </div>
        <div>
          <div className="flex gap-3 items-center">
            {leftLinks.map(({ label, link }, index) => (
              <>
                <div className="border  border-black rounded-full py-2 px-4 hover:bg-[#5922A9] hover:text-white transistion-all ease-in-out">
                  <Link href={link}>
                    <Typography variant="tertiary" size="sm" weight="medium" className="hover:text-white transistion-all ease-in-out">
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
