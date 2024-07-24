import React from "react";
import Imageview from "../Imageview/Imageview";
import Typography from "../Typography/Typography";

interface ITestimonialCardProps {
  img: string;
  testimony?: string;
  name: string;
}
const TestimonialCard: React.FC<ITestimonialCardProps> = ({
  img,
  testimony,
  name,
}) => {
  return (
    <div className="px-10">
      <div className="brutalist-card">
        <div className="grid lg:grid-cols-3">
          <div>
            <Imageview src={img} width="w-2/3" />
          </div>
          <div className="col-span-2">
            <Typography variant="primary" size="sm">
              Japa is a platform that has helped me understand what being
              informed is. <br />
              <br />I got to undetstand that I don’t have to settle for less. I
              could keep going till I get to the destination i desire
            </Typography>
            <Typography
              variant="primary"
              size="xl"
              weight="bold"
              className="py-5"
            >
              {name}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
