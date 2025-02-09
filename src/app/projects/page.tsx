"use client"
import ProjectCard from '@/components/projects/ProjectCard';
import { styles } from '@/styles';
import { fadeIn, textVariant } from '@/utils/motion';
import { motion } from 'framer-motion'

const ProjectsPage = () => {
    return (
        <div>
            ProjectsPage
            <div>
                <>
                    <motion.div variants={textVariant()}>
                        <p className={styles.sectionSubText}>My Works</p>
                        <h2 className={styles.sectionHeadText}>Projects.</h2>
                    </motion.div>
                    <div className="w-full flex">
                        <motion.p
                            variants={fadeIn("left", "tween", 0.1, 1)}
                            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                        >
                            The following projects showcase my skillset & experience as a
                            full-stack developer through real-world examples which solved
                            real-world problems. Projects are briefly described with the link to
                            code repositorys and live examples. It reflects my skills and ability
                            to solve complex problems, work on new and latest technologies and
                            project management abilities.
                        </motion.p>
                    </div>
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />

                    </div>
                </>
            </div>

        </div>
    );
};

export default ProjectsPage;