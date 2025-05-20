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
    const res = await fetch(`https://blog-server-l2a3.vercel.app/api/experience`)
    const data = await res.json();
    const experienceData = data?.data
    // console.log("dataaa", experienceData);

    return (
        <div className="py-10">
            <div>
                <p className="section-sub-text">I've done so far</p>
                <h2 className="section-head-text">Experience.</h2>
            </div>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-20">
                {experienceData?.map((experience: Experience, idx: number) => (
                    <li key={experience?._id}>
                        <hr className="bg-white" />
                        <div className="timeline-middle h-14 w-14 border-[3px] border-white rounded-full">
                            <Image src={experience?.company_logo} alt="image" height={40} width={40} className="h-10 w-10 rounded-full mx-auto mt-[5px]" />
                        </div>
                        <div
                            className={`${idx % 2 === 0 ? 'timeline-start' : 'timeline-end'
                                } mb-10 max-w-lg bg-tertiary p-6`}
                        >
                            <time className=" text-sm italic">{experience.duration}</time>
                            <h3 className="text-white text-[24px] font-bold">{experience.company_name}</h3>
                            <h4 className=" font-semibold italic">{experience.job_title}</h4>
                            <ul className="mt-5 list-disc ml-5 space-y-2">
                                {
                                    experience.bullet_points.map((point) => (
                                        <>
                                            <li className="text-white-100 text-[14px] pl-1">{point}</li>
                                        </>
                                    ))
                                }
                            </ul>
                        </div>
                        <hr className="bg-white" />
                    </li>
                ))}
              
            </ul>
        </div>
    );
};

export default Experience;
