import React from "react";
import CoursesOverview from "./CoursesOverviewThree/CoursesOverviewThree";
import CourseOverviewCard from "./CoursesOverviewThree/CourseOverviewCardThree";

export default function SocialMediaManagement() {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 p-5 md:p-20">
        <section className="col-span-2 ">
          <CoursesOverview />
        </section>
        <section className="col-span-1">
          <CourseOverviewCard />
        </section>
      </div>
    </div>
  );
}
