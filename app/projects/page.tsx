import NavBar from "@/components/navigation bar/NavBar";
import GrindTogetherCard from "@/components/projects/grindtogether/GrindTogetherCard";

function Projects() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center m-4">
        <GrindTogetherCard />
      </div>
    </div>
  );
}

export default Projects;
