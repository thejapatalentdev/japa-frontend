import React from "react";
import Typography from "../Typography/Typography";
import Imageview from "../Imageview/Imageview";
import Button from "../Button/Button";

const courseCards = [
  {
    img: "",
    title: "Data Analysis",
    desc: "",
    bgColor: "bg-[#DDFEBF]",
  },
  {
    img: "",
    title: "Product Management",
    desc: "",
    bgColor: "bg-[#B7AEDA]",
  },
  {
    img: "",
    title: "Data Analysis",
    desc: "",
    bgColor: "bg-[#FAEACC]",
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
          {courseCards.map(({ img, title, desc, bgColor }, index) => (
            <>
              <div className={`${bgColor} p-6 rounded-xl lg:w-full m-auto`}>
                <Imageview
                  src="/assets/Girl-reading.png"
                  width="w-full"
                  height="h-auto"
                />
                <Typography
                  variant="primary"
                  size="xl"
                  weight="bold"
                  className="pt-5 pb-3"
                >
                  {title}
                </Typography>
                <Typography variant="primary" size="sm">
                  Learn data analysis from industry experts. Gain practical
                  skills and hands-on experience.
                </Typography>
                <div className="pt-20 pb-3">
                  <Button variant="tertiary">Learn more</Button>
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
