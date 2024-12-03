import { Box, Card } from '@mui/material';
import React, { useState } from 'react';
import TechCard from './techCard';

const techStacks = [
    {
        label: 'Programming Languages',
        stacks: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C'],
    },
    {
        label: 'Frontend',
        stacks: ['HTML', 'CSS', 'Reactjs', 'TailwindCSS', 'Nextjs'],
    },
    {
        label: 'Backend',
        stacks: ['Nodejs', 'Expressjs', 'PostgreSQL', 'MongoDB', 'Firebase', 'Docker', 'RabbitMQ'],
    },
    {
        label: 'Machine Learning',
        stacks: ['Pandas', 'Numpy', 'Pytorch'],
    },
];

const DotCarousel = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
    };

    const activeTechs = techStacks[activeIndex].stacks;
    const activeLabel = techStacks[activeIndex].label;

    return (
        <div className="flex justify-center">
            <Box className="my-4" sx={{ minWidth: '50%' }}>
                <Card variant="outlined" sx={{ boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)' }}>
                    <div className="p-4 text-center">
                        <div className="flex space-x-4">
                            {activeTechs.map((tech, key) => (
                                <TechCard name={tech} key={key} />
                            ))}
                        </div>
                    </div>
                </Card>

                <div className="flex justify-center mt-4">
                    {techStacks.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-4 h-4 mx-1 rounded-full ${
                                activeIndex === index ? 'bg-blue-500' : 'bg-gray-400'
                            }`}
                        />
                    ))}
                </div>

                <div className='flex justify-center my-4'>
                <p className='text-tokyo-night text-xl'>{activeLabel}</p>
                </div>
            </Box>
        </div>
    );
};

export default DotCarousel;
