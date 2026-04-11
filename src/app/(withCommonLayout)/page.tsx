import Contact from "@/components/Contact";
import Experience from "@/components/experience/Experience";
import Intro from "@/components/introduction/Intro";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Tech from "@/components/tech/Tech";
import Hero from "@/components/Hero";
import Education from "@/components/education/Education";

export default async function Home() {
  const res = await fetch(`https://blog-server-l2a3.vercel.app/api/projects`, { next: { revalidate: 3600 } })
  const data = await res.json();
  const projectData = data?.data || [];

  return (
    <div className="w-full relative z-0">
      <Hero />
      <div className="relative z-0">
        <Intro />
        <Tech />
        <Education />
        <Experience />
        <FeaturedProjects projectData={projectData} />
        <Contact />
      </div>
    </div>
  );
}
