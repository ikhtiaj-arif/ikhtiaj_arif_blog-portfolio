/* eslint-disable react/no-unescaped-entities */
import arif from '@/assets/ikhtiaj.webp';
import Image from 'next/image';
import TypingText from './shared/TypingText';

const Hero = () => {
    return (
        <div>
            <section className="relative w-full h-[95vh] mx-auto">
                <div
                    className={`padding-x absolute inset-0 top-[40px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
                >
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-[#9e30c0]" />
                        <div className="w-1 sm:h-80 h-40 violet-gradient" />
                    </div>

                    <div>
                        {/* <h1 className={`text-white hero-head-text`}>
                            Hi, I'm <span className="text-[#9e30c0]">Arif</span>
                        </h1> */}
                        <TypingText
                            text={
                                <h1 className={`text-white hero-head-text`}>
                                    Hi, I'm <span className="text-[#9e30c0]">Arif</span>
                                </h1>
                            }
                        />
                        <p className={`hero-sub-text mt-2 text-white-100`}>
                            Full stack developer, I design and build <br className="sm:block hidden" />{" "}
                            web applications that deliver  performance, <br className="sm:block hidden" />{" "} scalability, and a seamless <br className="sm:block hidden" />{" "} user experience. {" "}
                        </p>

                        {/* Add your photo */}
                        <div className="mt-6">
                            <Image
                                src={arif} // Update the path to your photo
                                alt="Arif"
                                className="w-[13rem] h-[13rem] rounded-full object-cover border-2 border-[#9e30c0]"
                            />
                        </div>

                        {/* Add resume download button */}
                        <div className="mt-6">
                            <a
                                href="/ikhtiaj_resume.pdf" // Update the path to your resume
                                download="ikhtiaj_resume.pdf"
                                className="inline-flex items-center px-6 py-3 bg-[#9e30c07a] text-white font-semibold rounded-lg hover:bg-[#7a1f8f] transition-colors duration-300"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Hero;