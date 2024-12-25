import NavBar from '@/components/nav/NavBar';
import AzendianCard from '@/components/experience/azendian/azendianCard';

function Experience() {
    return (
        <div className="h-screen overflow-auto bg-tokyo-night">
            <NavBar />
            <div className="flex flex-col justify-center m-16 space-y-16 pt-16">
                <AzendianCard />
            </div>
        </div>
    );
}

export default Experience;
