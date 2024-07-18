import React from "react";
import Typography from "../Typography/Typography";
import Imageview from "../Imageview/Imageview";

interface IUserReqProps {
  key: number;
  label: string;
}
const CoursesOverview = () => {
  const userRequirements: IUserReqProps[] = [
    {
      key: 1,
      label: "Basic Computer literacy",
    },
    {
      key: 2,
      label: "Typing Skills",
    },
    {
      key: 3,
      label: "Beginner friendly",
    },
    {
      key: 4,
      label: "No prior knowledge needed",
    },
    {
      key: 5,
      label: "Project Based Learning",
    },
    {
      key: 6,
      label: "Learn and build on the go",
    },
  ];

  const courseOutline: IUserReqProps[] = [
    {
      key: 1,
      label: "Introduction to Data Science & Statistics",
    },
    {
      key: 2,
      label: "Excel for Data Science and A/B Testing",
    },
    {
      key: 3,
      label: "SQL & Database Management for Data Science",
    },
    {
      key: 4,
      label: "PowerBI for Data Visualization, Reporting, and Data Storytelling",
    },
    {
      key: 5,
      label: "Python for Data Science - Part 1",
    },
    {
      key: 6,
      label: " Python for Data Science - Part 2",
    },
    {
      key: 7,
      label: "Predictive Analytics and Final Project",
    },
    {
      key: 8,
      label: "Data Analysis and the Future (Class Discussion)",
    },
  ];

  return (
    <div>
      <Typography variant="primary" size="xl" weight="bold">
        Data Analysis Certification
      </Typography>
      <div className="py-10 w-full md:w-[70%] lg:w-[60%] leading-[27px] space-y-4">
        <Typography variant="primary" size="sm">
          Embark on a comprehensive journey through the fundamental tools and
          techniques of data analytics with our Mastering Data Analytics course.
          Over 7 weeks, spanning 14 interactive intensive sessions, you will
          delve into Statistics, Excel, SQL, PowerBI, and Python. This program
          will equip you with a strong foundation in data analysis and
          visualization, database management, and predictive analytics.
        </Typography>
        <Typography variant="primary" size="sm">
          Don&apos;t miss this opportunity to become a proficient data analyst.
          Join us on this transformative journey and unlock the door to a world
          of data-driven insights and opportunities.
        </Typography>
        <Typography variant="primary" size="sm">
          This program is powered by JAPA a community of over 1000 Africans
          passionate about upskilling and career advancement. Terms & Conditions
          Apply
        </Typography>
        <div className="my-10">
          <div className="shadow-md border border-muted w-full p-10 ">
            <div className="grid lg:grid-cols-3 space-y-4">
              <div className="border-y-0 lg:border-r-2">
                <Typography variant="primary" size="sm" className="text-center">
                  4.8
                </Typography>
              </div>
              <div className="border-y-0 lg:border-r-2">
                <Typography variant="primary" size="sm" className="text-center">
                  Beginner Level
                </Typography>
              </div>
              <div>
                <Typography variant="primary" size="sm" className="text-center">
                  Flxible Schedules
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <Typography
            variant="primary"
            size="xl"
            weight="bold"
            className="!pb-4"
          >
            Requirements
          </Typography>
          {userRequirements.map(({ key, label }) => (
            <Typography variant="primary" size="sm" key={key} className="!py-2">
              {label}
            </Typography>
          ))}
        </div>
      </div>
      <div className="py-10 space-y-4">
        <Imageview src="/assets/idea-01.svg" width="w-10" />
        <Typography variant="primary" size="xs" className="!text-[#5922A9]">
          A perfectly structured course
        </Typography>
        <Typography variant="primary" size="xl" weight="bold">
          Course outline:
        </Typography>
        {courseOutline.map(({ key, label }) => (
          <>
            <Typography variant="primary" size="md" weight="semibold" key={key}>
              week{key}: {" "}
              <span className="font-normal">{label}</span>
            </Typography>
          </>
        ))}
      </div>
    </div>
  );
};

export default CoursesOverview;
