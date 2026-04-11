/* eslint-disable react/no-unescaped-entities */


import Image from "next/image";

interface Experience {
    _id: string;
    company_logo: string;
    company_name: string;
    job_title: string;
    duration: string;
    bullet_points: string[];
    createdAt: string;
    updatedAt: string;
}

const Experience = async () => {
    try {
        const res = await fetch(`https://blog-server-l2a3.vercel.app/api/experience`, { next: { revalidate: 3600 } })
        const data = await res.json();
        const experienceData = data?.data || [];

        return (
            <section id="experience" className="py-20">
                <div className="text-center lg:text-left">
                    <p className="section-sub-text">What I've done so far</p>
                    <h2 className="section-head-text">Work Experience.</h2>
                </div>

                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-20">
                    {experienceData?.map((experience: Experience, idx: number) => (
                        <li key={experience?._id}>
                            <hr className="bg-accent/30" />
                            <div className="timeline-middle h-14 w-14 border-[3px] border-accent bg-primary rounded-full relative overflow-hidden flex justify-center items-center shadow-[0_0_15px_rgba(128,77,238,0.5)]">
                                <Image src={experience?.company_logo} alt={experience.company_name} height={40} width={40} className="h-10 w-10 rounded-full mx-auto" />
                            </div>
                            <div
                                className={`${idx % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end'
                                    } mb-10 max-w-lg bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(128,77,238,0.2)] transition-shadow duration-300`}
                            >
                                <h3 className="text-white text-[24px] font-bold">{experience.company_name}</h3>
                                <h4 className="text-secondary font-semibold text-[18px] mb-2">{experience.job_title}</h4>
                                <time className="text-xs font-semibold text-accent tracking-wider uppercase mb-5 block">{experience.duration}</time>
                                
                                <ul className={`mt-5 list-disc space-y-2 ${idx % 2 === 0 ? 'md:mr-5 mr-0 md:list-inside pl-5 md:pl-0' : 'ml-5'}`}>
                                    {experience.bullet_points.map((point, i) => (
                                        <li key={i} className="text-white-100 text-[14px] leading-relaxed">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <hr className="bg-accent/30" />
                        </li>
                    ))}
                </ul>
            </section>
        );
    } catch (error) {
        console.error("Failed to fetch experience data", error);
        return null;
    }
};

export default Experience;
