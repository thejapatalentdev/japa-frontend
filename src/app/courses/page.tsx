import CoursesOverview from "@/Components/CoursesOverview/CoursesOverview";
import React from "react";

const Courses = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <section className="col-span-2 p-5 md:p-20">
          <CoursesOverview />
        </section>
        <section className="col-span-1"></section>
      </div>
    </div>
  );
};

export default Courses;
