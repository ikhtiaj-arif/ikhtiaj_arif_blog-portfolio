/* eslint-disable react/no-unescaped-entities */
import blankUser from "@/assets/blank_user.png";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

type FeedbackProps = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  // image: string;
};

const FeedbackCard: React.FC<FeedbackProps> = ({ testimonial, name, designation, company }) => {
  return (
    <motion.div
      variants={fadeIn("left", "spring", 2 * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation}, {company}
            </p>
          </div>
          <Image
            src={blankUser}
            alt={`feedback-by-${name}`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackCard;
