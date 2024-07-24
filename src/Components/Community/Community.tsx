import React from "react";
import Typography from "../Typography/Typography";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Community = () => {
  return (
    <div className="py-20">
      <Typography
        variant="primary"
        size="lg"
        weight="bold"
        className="!text-[30px] text-center"
      >
        What our Community members are saying
      </Typography>
      <div className="grid md:grid-cols-2 gap-10 md:gap-0 py-10">
        <TestimonialCard img="/assets/Head.svg" name="Ogala" />
        <TestimonialCard img="/assets/Head.svg" name="Ogala" />
      </div>
      <div className="md:w-1/2 m-auto">
      <TestimonialCard img="/assets/Head.svg" name="Ogala" />
      </div>
    </div>
  );
};

export default Community;
