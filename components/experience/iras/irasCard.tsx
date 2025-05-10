import Card from '../card';

const IrasCard = () => {
    const url = 'https://www.iras.gov.sg/';
    const techStack = ['Python', 'FastAPI', 'Vuejs', 'MongoDB', 'TailwindCSS', 'Redis'];
    const desc = [
        'Sole developer for in-house greenfield contact analyser project',
        'Built FastAPI backend, integrating it with MongoDB in Azure CosmosDB and OpenAI GPT-4o model',
        'Optimised backend performance and cost-efficiency by implementing Redis caching, MongoDB indexes and rate limiting',
        'Built frontend in Vue.js and Tailwind, implementing interactive drag-and-drop classification, analytics and history tracking',
        'Designed and implemented MongoDB aggregation pipelines for real-time analytics'
    ];
    return (
        <Card
            company={'Inland Revenue Authority of Singapore (IRAS)'}
            role="Software Engineer Intern"
            startDate="6 January 2025"
            endDate="20 June 2025"
            techUsed={techStack}
            description={desc}
            siteLink={url}
            image=""
            cardWidth={425}
        />
    );
};

export default IrasCard;
