import React from "react";
import Typography from "../../../../Components/Typography/Typography";
import Imageview from "../../../../Components/Imageview/Imageview";
import Button from "../../../../Components/Button/Button";
import Link from "next/link";

const CourseOverviewCard = () => {
  return (
    <div>
      <div className="border rounded-[16px] py-10 px-5 w-full lg:w-[60%] m-auto shadow-sm">
        <Typography
          variant="primary"
          size="xl"
          weight="bold"
          className="uppercase"
        >
          Course Overview
        </Typography>
        <div className="my-5 border-2 w-20 border-[#5922A9] bg-[#5922A9] rounded-md"></div>
        <div className="space-y-5">
          <div className="flex gap-4">
            <Imageview src="/assets/analytics-01.svg" width="w-full" />
            <Typography variant="primary" size="sm" weight="medium">
              Beginner to Pro
            </Typography>
          </div>
          <div className="flex gap-4">
            <Imageview src="/assets/diploma.svg" width="w-full" />
            <Typography variant="primary" size="sm" weight="medium">
              14 Lessons
            </Typography>
          </div>
          <div className="pt-20">
            <Button variant="primary" className="w-full">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdTpSfKT-GMO91ONrImUxGcNQrUU-tWtnDrjmRsp-Pfo2sNXQ/viewform">
                Enroll
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverviewCard;
