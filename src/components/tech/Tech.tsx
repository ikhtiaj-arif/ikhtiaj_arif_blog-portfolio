import SkillList from "./SkillList";

const Tech = async () => {
    try {
        const res = await fetch(`https://blog-server-l2a3.vercel.app/api/skills`, { next: { revalidate: 3600 } });
        const data = await res.json();
        const technologies = data?.data || [];

        return (
            <section id="skills" className="py-20">
                <div className="text-center lg:text-left mb-10">
                    <p className="section-sub-text">What I Bring to the Table</p>
                    <h2 className="section-head-text">My Skills.</h2>
                </div>

                <SkillList skills={technologies} />
            </section>
        );
    } catch (error) {
        console.error("Failed to fetch skills:", error);
        return null;
    }
};

export default Tech;
