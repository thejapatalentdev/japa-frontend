import React from "react";
import Image from "next/image";

interface IImageProps {
  src: string;
  width?: string;
  height?: string;
  className?:string;
}
const Imageview: React.FC<IImageProps> = ({ src, width, height, className }) => {
  return (
    <div>
      <Image
        src={src}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className={`${width} ${height} ${className} object-contain object-center`}
      />
    </div>
  );
};

export default Imageview;
