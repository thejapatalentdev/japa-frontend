import React from "react";
import Typography from "../Typography/Typography";
import Imageview from "../Imageview/Imageview";
import Button from "../Button/Button";
import Link from "next/link";

const courseCards = [
  {
    img: "/assets/Product.svg",
    title: "ProductManagement",
    desc: "Learn product management from industry experts. Gain practical skills and hands-on experience.",
    bgColor: "bg-[#B7AEDA]",
    path: "/courses/ProductManagement",
  },
  {
    img: "/assets/Girl-reading.png",
    title: "Data Analysis",
    desc: "Learn data analysis from industry experts. Gain practicalskills and hands-on experience.",
    bgColor: "bg-[#defebf]",
    path: "/courses/DataAnalysis",
  },
  {
    img: "/assets/Girl-reading.png",
    title: "SocialMediaManagement",
    desc: "Learn social media management from industry experts. Gain practical skills and hands-on experience.",
    bgColor: "bg-[#FAEACC]",
    path: "/courses/SocialMediaManagement",
  },
];

const OurCourses = () => {
  return (
    <div className="border-t border-2 border-x-0 py-20">
      <Typography
        variant="primary"
        size="xl"
        weight="bold"
        className="text-center text-[36px]"
      >
        Our Courses
      </Typography>
      <Typography variant="primary" size="sm" className="text-center">
        We Ignite Your Career: Your Path to Success Begins Here
      </Typography>
      <div className="my-20 px-5 md:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3 lg:gap-20">
          {courseCards.map(({ img, title, desc, bgColor, path }, index) => (
            <>
              <div className={`${bgColor} p-6 rounded-xl lg:w-full m-auto`}>
                <Imageview src={img} width="w-full" height="h-auto" />
                <Typography
                  variant="primary"
                  size="xl"
                  weight="bold"
                  className="pt-5 pb-3"
                >
                  {title}
                </Typography>
                <Typography variant="primary" size="sm">
                  {desc}
                </Typography>
                <div className="pt-20 pb-3">
                  <Button variant="tertiary">
                    <Link href={path}>Learn more</Link>
                  </Button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
