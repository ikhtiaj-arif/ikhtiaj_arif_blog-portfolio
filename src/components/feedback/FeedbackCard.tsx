/* eslint-disable react/no-unescaped-entities */
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "@/assets/eye.png"

const FeedbackCard = () => {
    return (
        <motion.div
        variants={fadeIn("left", "spring", 2 * 0.5, 0.75)}
        className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
      >
        <p className="text-white font-black text-[48px]">"</p>
        <div className="mt-1">
          <p className="text-white tracking-wider text-[18px]">I thought it was impossible to make a website as beautiful as our product, but Arif proved me wrong.</p>
          <div className="mt-7 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[16px]">
                <span className="blue-text-gradient">@</span> Some One
              </p>
              <p className="mt-1 text-secondary text-[12px]">
                designation of company
              </p>
            </div>
            <Image
              src={image}
              alt={`feedback-by`}
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    );
};

export default FeedbackCard;