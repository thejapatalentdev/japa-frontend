import Image from "next/image";
import React from "react";
import DevGuy from "../../../public/assets/DevGuy.svg";
import Box100 from "../../../public/assets/100k.svg";
import JobOfferedImage from "../../../public/assets/JobOffered.svg";

export default function CoursesBanner() {
  return (
    <div className="my-16 ">
      {" "}
      <div className="m-auto flex justify-center items-center bg-[#5a22a9] w-full max-w-[80vw] h-[65vh] rounded-[30px] text-white text-5xl font-bold p-10">
        <div className="grid grid-cols-2 place-items-center px-8 py-4 relative">
          <p className="w-full">Learn Skills for your Dream Job</p>

          <Image src={DevGuy} width={400} height={300} alt="devguy" />

          <div className="absolute top-10 right-10">
            <Image src={Box100} width={200} height={200} alt="100k+" />
          </div>
          <div className="absolute bottom-8 left-[650px]">
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
