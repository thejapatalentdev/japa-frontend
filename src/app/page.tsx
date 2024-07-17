import AvailableJobs from "@/Components/AvailableJobs/AvailableJobs";
import Banner from "@/Components/Banner/Banner";
import Community from "@/Components/Community/Community";
import CvRevamp from "@/Components/CvRevamp/CvRevamp";
import Navbar from "@/Components/Navbar/Navbar";
import Notice from "@/Components/Notice/Notice";
import OurCourses from "@/Components/OurCourses/OurCourses";
import WhatWeDone from "@/Components/WhatWeDone/WhatWeDone";
import WhyJapa from "@/Components/WhyJapa/WhyJapa";

export default function page() {
  return <main>
    <Navbar />
    <Banner />
    <Notice />
    <WhatWeDone />
    <OurCourses />
    <WhyJapa />
    <CvRevamp />
    <AvailableJobs />
    <Community />
  </main>;
}
