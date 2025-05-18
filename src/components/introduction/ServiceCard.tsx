'use client'

import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: StaticImageData;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, icon }) => {
  return (
    <div className="xs:w-[250px] w-full">
      <div

        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <Image src={icon} alt={title} width={64} height={64} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
