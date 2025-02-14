
'use client'

import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import ProjectCard, { TProject } from "./ProjectCard";


type TProjectProp = {
  projectData: TProject[]
}

const FeaturedProjects = ({ projectData }: TProjectProp) => {

  return (
    <div className="py-10">
      <motion.div variants={textVariant()}>
        <p className={`section-sub-text`}>My Works</p>
        <h2 className={`section-head-text`}>Projects.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("left", "tween", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        The following projects showcase my skill set & experience as a
        full-stack developer through real-world examples which solved
        real-world problems. Projects are briefly described with the link to
        code repositories and live examples. It reflects my skills and ability
        to solve complex problems, work on new and latest technologies and
        project management abilities.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-between">

        {
          projectData && projectData?.map((project: TProject) => (
            <ProjectCard key={project._id} project={project} />

          ))
        }
      </div>
    </div>
  );
};

export default FeaturedProjects;