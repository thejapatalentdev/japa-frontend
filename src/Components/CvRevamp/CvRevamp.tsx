import React from "react";
import Imageview from "../Imageview/Imageview";
import Typography from "../Typography/Typography";

const CvRevamp = () => {
  return (
    <div className="px-4 lg:px-[10rem] py-10">
      <div className="bg-[#5922A9] rounded-[30px] px-20 py-[6rem] relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <Imageview
            src="/assets/Note.png"
            width="lg:w-[70%] w-full"
            className="m-auto"
          />
          <div>
            <div className="mt-10">
              <Imageview
                src="/assets/Stroke.png"
                className="absolute -top-20 right-3 hidden lg:block"
                width="w-[15rem]"
              />
              <Typography variant="primary" size="sm" className="!text-white">
                CV Revamp
              </Typography>
              <Typography
                variant="primary"
                size="xl"
                className="!text-white py-4 !text-[30px]"
                weight="bold"
              >
                Get your CV revamped by <br />
                professionals to stand out <br />
                in the job market.
              </Typography>
              <div>
                <button className="rounded-full bg-white text-[#5922A9] font-medium text-[16px] py-[10px] px-[24px]">
                  Revamp My CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvRevamp;
