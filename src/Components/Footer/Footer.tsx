import Image from "next/image";
import Link from "next/link";
import Linkedln from "../../../public/assets/Linkedln.svg";
import instagram from "../../../public/assets/instagram.svg";
import x from "../../../public/assets/x.svg";
export default function Footer() {
  const coursesLinks = [
    {
      label: "Courses",
      link: "/courses",
    },
    {
      label: "CV Revamp",
      link: "/cv-revamp",
    },
    {
      label: "Jobs",
      link: "/job",
    },
  ];

  const footerLinks = [
    {
      label: instagram,
      path: "https://www.instagram.com/japatechglobal/",
    },
    {
      label: x,
      path: "https://x.com/japatechglobal",
    },
    {
      label: Linkedln,
      path: "https://www.linkedin.com/company/japaglobal/?viewAsMember=true",
    },
  ];

  return (
    <footer className="h-full px-20 py-20 border-t border-gray-300 mb-40 flex xl:gap-20 lg:gap-20 md:gap-20 gap-8 justify-between">
      <div className="min-w-[160px] hidden xl:block lg:block md:block">
        <Image
          src={"/assets/JAPA-LOGO.svg"}
          alt=""
          width={100}
          height={100}
          sizes="100vw"
          className="w-full h-auto object-contain object-center"
        />
      </div>

      <div className="flex gap-8 flex-wrap xl:justify-end lg:justify-end md:justify-end text-xl cursor-pointer">
        <div className="xl:w-[300px] lg:w-[300px] md:w-[300px] min-w-[100px]">
          <Link href="/about" className="hover:text-purple-700">
            About Us
          </Link>
        </div>
        <div className="xl:w-[300px] lg:w-[300px] md:w-[300px] min-w-[100px]">
          {" "}
          {coursesLinks.map((courses, i) => (
            <Link href={courses.link} key={i}>
              <p className="mb-4 hover:text-purple-700 transistion-all ease-in-out">
                {courses.label}
              </p>
            </Link>
          ))}
        </div>
        <div className="xl:w-[300px] lg:w-[300px] md:w-[300px] min-w-[100px]">
          <p className="mb-2 hover:text-purple-700">Contact:</p>
          <Link className="" href="/">
            <p className="mb-4 hover:text-purple-700"> talent@japatalent.com</p>
          </Link>
          <p className="mb-4 hover:text-purple-700">
            +234 <span className="pl-2">8128206869</span>
          </p>
          <div className="flex gap-8">
            {footerLinks.map((link) => (
              <Link href={link.path}>
                <Image
                  src={link.label}
                  width={30}
                  height={30}
                  alt="links to our social media platforms"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
