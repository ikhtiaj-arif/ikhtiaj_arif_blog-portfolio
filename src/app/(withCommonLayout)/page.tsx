import Contact from "@/components/Contact";
import Experience from "@/components/experience/Experience";
import Feedback from "@/components/feedback/Feedback";
import Intro from "@/components/introduction/Intro";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Tech from "@/components/tech/Tech";

export default async function Home() {
  const res = await fetch(`https://blog-server-l2a3.vercel.app/api/projects`)
  const data = await res.json();
  const projectData = data?.data
  console.log(projectData);
  return (
    <>
      <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 " >
        <Intro />
      </div>
      <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 " >
        <Experience />
      </div>
      <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 " >
        <Tech />
      </div>
      <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 " >
        <FeaturedProjects projectData={projectData} />
      </div>
      <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 " >
        <Feedback />
      </div>
      <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 " >
        <Contact />
      </div>
    </>
  );
}
