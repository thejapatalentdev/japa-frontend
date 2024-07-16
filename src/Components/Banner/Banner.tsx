import React from "react";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import Imageview from "../Imageview/Imageview";

const Banner = () => {
  return (
    <div className="banner-background md:h-[100vh] 2xl:h-[80vh] overflow-hidden">
      <div className="grid md:grid-cols-2 lg:px-20 px-5">
        <div className="pt-[10rem]">
          <div className="">
            <Typography
              variant="tertiary"
              size="jumbo"
              weight="bold"
              className="lg:leading-[90px]"
            >
              Unlock Your Potential
            </Typography>
            <Typography
              variant="tertiary"
              size="jumbo"
              weight="bold"
              className="lg:leading-[90px]"
            >
              For Global Success
            </Typography>
            <Typography
              variant="tertiary"
              size="jumbo"
              weight="bold"
              className="lg:leading-[90px]"
            >
              With <span className="text-[#5922A9]">JAPA</span>
            </Typography>
            <Typography variant="primary" size="sm">
              The Easiest Way to Boost Your Employment and Secure
            </Typography>
            <Typography variant="primary" size="sm">
              Global Opportunities
            </Typography>
          </div>
          <div className="py-5">
            <div className="flex gap-4 items-center">
              <Button variant="primary">Take a course</Button>
              <Button variant="secondary">Apply for jobs</Button>
            </div>
          </div>
        </div>
        <div className="md:flex relative">
          <div className="absolute top-[170px]">
            <Imageview src="/assets/Statistics.svg" width="w-full" />
          </div>
          <Imageview
            src="/assets/Girl-with-ipad.svg"
            width="w-full"
            height="h-auto"
            className="pt-[4.8rem]"
          />
          <div className="absolute top-[340px] right-[370px] hidden lg:block">
            <Imageview src="/assets/Bulb.svg" width="w-full" />
          </div>
          <div className="absolute top-[140px] right-[170px] hidden lg:block">
            <Imageview src="/assets/Circle.svg" width="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
