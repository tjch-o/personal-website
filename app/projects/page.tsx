import NavBar from "@/components/navigation bar/NavBar";
import GrindTogetherCard from "@/components/projects/grindtogether/GrindTogetherCard";
import JobFestGoCard from "@/components/projects/jobfestgo/JobFestGoCard";
import FilterNewsBotCard from "@/components/projects/filternewsbot/FilterNewsBotCard";
import URLShortsCard from "@/components/projects/urlshorts/URLShortsCard";
import EtchASketchCard from "@/components/projects/etch-a-sketch/EtchASketchCard";

function Projects() {
  return (
    <div className='h-screen overflow-auto bg-aq-blue'>
      <NavBar />
      <div className="flex flex-col justify-center m-16 space-y-16">
        <GrindTogetherCard />
        <JobFestGoCard />
        <FilterNewsBotCard />
        <URLShortsCard />
        <EtchASketchCard />
      </div>
    </div>
  );
}

export default Projects;
