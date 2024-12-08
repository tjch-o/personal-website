import NavBar from '@/components/nav/NavBar';
import JobFestGoPreview from '@/components/projects/jobfestgo/JobFestGoPreview';
import GrindTogetherPreview from '@/components/projects/grindtogether/GrindTogetherPreview';
import PeerPrepPreview from '@/components/projects/peerprep/PeerPrepPreview';

function Projects() {
    return (
        <div className="h-screen overflow-auto bg-tokyo-night">
            <NavBar />
            <div className="flex flex-col justify-center m-16 space-y-16 pt-16">
                <PeerPrepPreview />
                <JobFestGoPreview />
                <GrindTogetherPreview />
            </div>
        </div>
    );
}

export default Projects;
