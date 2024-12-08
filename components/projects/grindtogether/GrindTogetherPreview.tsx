import Preview from '../preview';

const GrindTogetherPreview = () => {
    const desc = `GrindTogether is a web app that allows NUS students to find study partners by
                            posting study invitations based on modules, faculty and location.`;

    return (
        <Preview
            title="GrindTogether"
            description={desc}
            techUsed={['Nextjs', 'Nodejs', 'Expressjs', 'Firebase', 'Netlify']}
            cardWidth={350}
            image="projects/grindtogether.png"
            githubLink="https://github.com/tjch-o/orbital-grindtogether"
            siteLink="https://glittery-pastelito-97d2c4.netlify.app/"
        />
    );
};

export default GrindTogetherPreview;
