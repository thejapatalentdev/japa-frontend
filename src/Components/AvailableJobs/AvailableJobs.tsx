import React from "react";
import Typography from "../Typography/Typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { title } from "process";
import Button from "../Button/Button";

const newJobsData = [
  {
    title: "Facebook",
    location: "New York",
    jobType: "Remote",
    jobRole: "Front-end Developer",
    buttonOne: "CSS",
    buttonTwo: "NEXT JS",
    buttonThree: "HTML 5",
    buttonFour: "REACT JS",
  },
  {
    title: "Facebook",
    location: "New York",
    jobType: "Remote",
    buttonOne: "CSS",
    buttonTwo: "NEXT JS",
    buttonThree: "HTML 5",
    buttonFour: "REACT JS",
  },
  {
    title: "Facebook",
    location: "New York",
    jobType: "Remote",
    buttonOne: "CSS",
    buttonTwo: "NEXT JS",
    buttonThree: "HTML 5",
    buttonFour: "REACT JS",
  },
  {
    title: "Facebook",
    location: "New York",
    jobType: "Remote",
    buttonOne: "CSS",
    buttonTwo: "NEXT JS",
    buttonThree: "HTML 5",
    buttonFour: "REACT JS",
  },
  {
    title: "Facebook",
    location: "New York",
    jobType: "Remote",
    buttonOne: "CSS",
    buttonTwo: "NEXT JS",
    buttonThree: "HTML 5",
    buttonFour: "REACT JS",
  },
];
const AvailableJobs = () => {
  return (
    <div className="bg-[#EFEDF1] py-12">
      <Typography
        variant="primary"
        size="md"
        weight="bold"
        className="text-center"
      >
        Hot Jobs Available Now
      </Typography>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-10">
        {newJobsData.map((data, index) => (
          <>
            <Card>
              <CardHeader>
                <CardTitle>{data.title}</CardTitle>
                <CardDescription>{data.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <Typography variant="primary" size="lg" weight="bold">
                  {data.jobRole}
                </Typography>
                <CardDescription>{data.jobType}</CardDescription>
                <div className="grid grid-cols-3 items-center gap-3 mt-10 mb-2">
                  <div className="border border-[#CAC5CA] rounded-full py-2 px-4">
                    <Typography variant="tertiary" size="sm">
                      {data.buttonOne}
                    </Typography>
                  </div>
                  <div className="border border-[#CAC5CA] rounded-full py-2 px-4 text-nowrap">
                    <Typography variant="tertiary" size="sm">
                      {data.buttonTwo}
                    </Typography>
                  </div>
                  <div className="border border-[#CAC5CA] rounded-full py-2 px-4">
                    <Typography variant="tertiary" size="sm">
                      {data.buttonThree}
                    </Typography>
                  </div>
                  <div className="border border-[#CAC5CA] rounded-full py-2 px-4">
                    <Typography
                      variant="tertiary"
                      size="sm"
                      className="text-nowrap"
                    >
                      {data.buttonFour}
                    </Typography>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
};

export default AvailableJobs;
