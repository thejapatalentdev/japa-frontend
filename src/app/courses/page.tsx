import Community from "@/Components/Community/Community";
import CoursesBanner from "@/Components/CoursesBanner/CoursesBanner";
import CourseOverviewCard from "@/app/courses/DataAnalysis/CoursesOverviewOne/CourseOverviewCardOne";
import CoursesOverview from "@/app/courses/DataAnalysis/CoursesOverviewOne/CoursesOverviewOne";
import OurCourses from "@/Components/OurCourses/OurCourses";
import React from "react";

const Courses = () => {
  return (
    <section>
      <CoursesBanner />
      <OurCourses />
      <Community />
    </section>
  );
};

export default Courses;
