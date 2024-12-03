import NavBar from '@/components/nav/NavBar';
import FilterNewsBotCard from '@/components/projects/filternewsbot/FilterNewsBotCard';
import GrindTogetherCard from '@/components/projects/grindtogether/GrindTogetherCard';
import JobFestGoCard from '@/components/projects/jobfestgo/JobFestGoCard';

function Projects() {
    return (
        <div className="h-screen overflow-auto bg-tokyo-night">
            <NavBar />
            <div className="flex flex-col justify-center m-16 space-y-16">
                <GrindTogetherCard />
                <JobFestGoCard />
                {/* <FilterNewsBotCard /> */}
            </div>
        </div>
    );
}

export default Projects;
