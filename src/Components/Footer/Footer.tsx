import Image from "next/image";
import Link from "next/link";

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

  return (
    <footer className="h-full px-20 py-20 border-t border-gray-300 mb-40 flex gap-20 justify-between">
      <div className="min-w-[160px]">
        <Image
          src={"/assets/JAPA-LOGO.svg"}
          alt=""
          width={100}
          height={100}
          sizes="100vw"
          className="w-full h-auto object-contain object-center"
        />
      </div>

      <div className="flex gap-8 justify-end text-xl cursor-pointer">
        <div className="w-[300px]">
          <Link href="/about" className="hover:text-purple-700">
            About Us
          </Link>
        </div>
        <div className="w-[300px]">
          {" "}
          {coursesLinks.map((courses, i) => (
            <Link href={courses.link} key={i}>
              <p className="mb-4 hover:text-purple-700 transistion-all ease-in-out">
                {courses.label}
              </p>
            </Link>
          ))}
        </div>
        <div className="w-[300px]">
          <p className="mb-4 hover:text-purple-700">Contact:</p>
          <Link className="" href="/">
            <p className="mb-4 hover:text-purple-700"> talent@japatalent.com</p>
          </Link>
          <p className="mb-4 hover:text-purple-700">
            +234 <span>8128206869</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
