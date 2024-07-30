import Image from "next/image";
import React from "react";
import DevGuy from "../../../public/assets/DevGuy.svg";
import Box100 from "../../../public/assets/100k.svg";
import JobOfferedImage from "../../../public/assets/JobOffered.svg";

export default function CoursesBanner() {
  return (
    <div className="my-16 ">
      {" "}
      <div className="m-auto xl:flex xl:justify-center xl:items-center lg:flex lg:justify-center lg:items-center  md:flex md:justify-center md:items-center bg-[#5a22a9] w-full max-w-[80vw] xl:h-[70vh] lg:h-[70vh]  md:h-[60vh] rounded-[30px] text-white xl:text-5xl lg:text-4xl md:text-3xl hidden font-bold p-10 ">
        <div className="xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2  place-items-center px-8 py-4 relative hidden">
          <p className="w-full">Learn Skills for your Dream Job</p>

          <div className="xl:w-[400px] lg:w-[300px]">
            <Image src={DevGuy} width={400} height={300} alt="devguy" />
          </div>
          <div className="absolute xl:w-56 xl:top-10 xl:right-0 lg:w-[160px] lg:top-10 lg:right-8 md:w-[100px] md:top-12 md:right-[-20px]">
            <Image src={Box100} width={200} height={200} alt="100k+" />
          </div>
          <div className="absolute xl:w-56 xl:bottom-8 xl:left-[600px] lg:bottom-10 lg:left-[460px] lg:w-[160px] md:w-[100px] md:bottom-10">
            <Image src={JobOfferedImage} width={200} height={200} alt="100k+" />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <Image src={DevGuy} width={500} height={500} alt="devguy" /> */
}
