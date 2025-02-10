'use client'

import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import icon from "@/assets/eye.png";
import Image from "next/image";

const ServiceCard = () => {
    return (
        <div className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
          
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <Image src={icon} alt="title" className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
             Title
            </h3>
          </div>
        </motion.div>
      </div>
    );
};

export default ServiceCard;