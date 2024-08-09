import TechStackCard from './TechStackCard';

function TechStack() {
    return (
        <div className="flex flex-col justify-center items-center m-8">
            {/* <h1 className="text-4xl font-bold mb-4">I have experience in</h1> */}
            <div className="flex items-center justify-center w-full my-4">
                <div className="h-px w-1/4 bg-tokyo-night-light"></div>
                <div className="px-4 py-2 bg-tokyo-night-light text-3xl font-bold text-center text-indigo-300 rounded-lg shadow-lg">
                    Skills
                </div>
                <div className="h-px w-1/4 bg-tokyo-night-light"></div>
            </div>
            <TechStackCard />
        </div>
    );
}

export default TechStack;
