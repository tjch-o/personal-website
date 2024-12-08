import Preview from '../preview';

const PeerPrepPreview = () => {
    const desc = `PeerPrep is a real-time collaborative platform to help users practice and prepare for their technical interviews through pair
                programming.`;

    return (
        <Preview
            title="PeerPrep"
            description={desc}
            techUsed={[
                'Nextjs',
                'TypeScript',
                'Nodejs',
                'Expressjs',
                'MongoDB',
                'Docker',
                'Socketio',
                'RabbitMQ',
            ]}
            cardWidth={550}
            image=""
            githubLink="https://github.com/tjch-o/peerprep"
        />
    );
};

export default PeerPrepPreview;
