import React from 'react';

const Courses = () => {
    return (
        <section className="py-10  " id="courses">
            <div >
                <p className={`section-sub-text`}>What I&apos;ve Learned</p>
                <h2 className={`section-head-text`}>Courses.</h2>
            </div>
            <p
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                Here are some of the professional courses and certifications I&apos;ve completed to strengthen my full-stack development skills.
            </p>
            <div className="mt-20 flex flex-wrap gap-10">
                {/* <h2 className="text-4xl font-bold text-white mb-8">Courses.</h2> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Course Card */}
                    <div className="bg-tertiary rounded-2xl p-6 shadow-card border border-gray-700">
                        <h3 className="text-xl font-semibold text-white">JavaScript Algorithms and Data Structures</h3>
                        <p className="text-sm text-gray-400 mt-2">FreeCodeCamp · 2022</p>
                        <p className="text-sm text-gray-400 mt-4">Covers basic javascript concepts such as array, string, object and es6.</p>
                    </div>

                    {/* Course Card */}
                    <div className="bg-tertiary rounded-2xl p-6 shadow-card border border-gray-700">
                        <h3 className="text-xl font-semibold text-white">Complete web development</h3>
                        <p className="text-sm text-gray-400 mt-2">Programming Hero · 2023</p>
                        <p className="text-sm text-gray-400 mt-4">Deep dive into modern web app development using React, Node.js, express.</p>
                    </div>

                    {/* Course Card */}
                    <div className="bg-tertiary rounded-2xl p-6 shadow-card border border-gray-700">
                        <h3 className="text-xl font-semibold text-white">Next Level Web Development</h3>
                        <p className="text-sm text-gray-400 mt-2">Programming Hero · 2025</p>
                        <p className="text-sm text-gray-400 mt-4">Focus on Redux, Nextjs, REST APIs, authentication, MongoDB, postgreSql, Prisma and deployment.</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Courses;