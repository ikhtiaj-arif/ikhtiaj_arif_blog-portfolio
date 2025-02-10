
const Hero = () => {
    return (
        <div>
            <section className="relative  w-full h-[95vh] mx-auto">

                <div
                    className={`padding-x absolute inset-0 top-[40px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
                >
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-[#9e30c0]]" />
                        <div className="w-1 sm:h-80 h-40 violet-gradient" />
                    </div>

                    <div>
                        <h1 className={` text-white hero-head-text`}>
                            Hi, Im <span className="text-[#9e30c0]">Arif</span>
                        </h1>
                        <p className={`hero-sub-text mt-2 text-white-100`}>
                            MERN stack developer, I develop <br className="sm:block hidden" />{" "}
                            full-stack web applications{" "}
                        </p>
                    </div>
                </div>

                {/* <ComputersCanvas /> */}
                <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                    <a href="#about">
                        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">

                        </div>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Hero;