import icon from "@/assets/company/freeCodeCmap.png";
import Image from 'next/image';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const ExperienceCard = () => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: "#1d1946", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #232631" }}
            date={'experience.date'}
            // iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="flex justify-center items-center h-full w-full">
                    <Image
                        src={icon}
                        alt={"company_name"}
                        width={10}
                        height={10}
                        className=" object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{"experience.title"}</h3>
                <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                >
                    {"experience.company_name"}
                </p>
            </div>
            <ul className="mt-5 list-disc ml-5 space-y-2">

                <li className="text-white-100 text-[14px] pl-1 -tracking-wider">
                    point
                </li>

            </ul>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;