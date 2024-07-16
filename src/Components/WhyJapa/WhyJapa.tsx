import React from "react";
import Typography from "../Typography/Typography";
import Imageview from "../Imageview/Imageview";

const japaDataItems = [
  {
    img: "/assets/Frame-1.png",
    title: " Transform your Career",
    desc: ` Gain the skills and knowledge to excel in today&apos;s job
                  market.`,
  },
  {
    img: "/assets/Frame-2.png",
    title: "Career Support",
    desc: "Get help with CVs and access to job postings.",
  },
  {
    img: "/assets/Frame-3.png",
    title: "Expert Instructors",
    desc: "Learn from industry professionals with real-world experience.",
  },
  {
    img: "/assets/Frame-4.png",
    title: " Transform your Career",
    desc: "Get help with CVs and access to job postings.",
  },
];
const WhyJapa = () => {
  return (
    <div className="my-20">
      <div className="grid lg:grid-cols-3">
        <div className="lg:border-r border border-y-0 text-center p-10">
          <Typography variant="primary" size="jumbo" weight="bold">
            Why Japa?
          </Typography>
        </div>
        <div className="col-span-2">
          <div className="grid lg:grid-cols-2 gap-7">
            {japaDataItems.map(({ img, title, desc }, index) => (
              <>
                <div className="flex gap-2 px-10 ">
                  <Imageview src={img} width="w-full" height="h-auto" />
                  <div>
                    <Typography variant="primary" size="sm">
                      {title}
                    </Typography>
                    <Typography variant="secondary" size="xs">
                      {desc}
                    </Typography>
                  </div>
                </div>
              </>
            ))}

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJapa;
