import CoursesOverviewOne from "./CoursesOverviewOne/CoursesOverviewOne";
import CourseOverviewCardOne from "./CoursesOverviewOne/CourseOverviewCardOne";
import React from "react";

export default function DataAnalysis() {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 p-5 md:p-20">
        <section className="col-span-2 ">
          <CoursesOverviewOne />
        </section>
        <section className="col-span-1">
          <CourseOverviewCardOne />
        </section>
      </div>
    </div>
  );
}
