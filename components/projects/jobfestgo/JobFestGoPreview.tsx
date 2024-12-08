import Preview from '../preview';

const JobFestGoPreview = () => {
    const desc = `JobFestGo is a command-line desktop application built for job festival event
                            planners in Singapore to manage contacts and tasks for their events.`;

    return (
        <Preview
            title="JobFestGo"
            description={desc}
            techUsed={['Java', 'CSS']}
            cardWidth={160}
            image="projects/jobfestgo.png"
            githubLink="https://github.com/AY2324S1-CS2103T-T09-1/tp"
        />
    );
};

export default JobFestGoPreview;
