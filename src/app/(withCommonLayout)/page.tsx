import Contact from "@/components/Contact";
import Experience from "@/components/experience/Experience";
import Feedback from "@/components/feedback/Feedback";
import Intro from "@/components/introduction/Intro";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Tech from "@/components/tech/Tech";

export default function Home() {
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
        <FeaturedProjects />
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
