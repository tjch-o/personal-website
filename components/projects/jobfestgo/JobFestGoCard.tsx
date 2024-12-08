import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';
import VisitGithubButton from '../visitGithubButton';
import JobFestGoTechUsedCard from './JobFestGoTechUsedCard';

function JobFestGoCard() {
    return (
        <div>
            <Card
                sx={{
                    maxWidth: '100%',
                    borderColor: '#fff',
                    borderWidth: '5px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(255, 255, 255, 0.8)',
                }}
                className="flex justify-center align-center space-x-4 p-6"
            >
                <CardMedia
                    sx={{
                        minWidth: 825,
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '10px',
                    }}
                    image="projects/jobfestgo.png"
                    title="JobFestGo"
                />
                <CardContent>
                    <div>
                        <h1 className="text-4xl font-bold mb-4">JobFestGo</h1>
                        <div className="inline-block bg-tokyo-night-light text-white px-3 py-1 my-2 rounded-full">
                            <h3 className="text-l font-medium">CS2103T</h3>
                        </div>
                        <h3 className="font-bold"> What is JobFestGo? </h3>
                        <h3 className="font-medium my-2">
                            A command-line (CLI) desktop application built for job festival event
                            planners in Singapore to manage contacts and tasks for their events.
                        </h3>
                        <h3 className="font-bold my-2"> Technical Aspects of JobFestGo </h3>
                        <ul className="my-2 list-square list-inside">
                            <li className="text-gray-800 text-base">
                                Designed using OOP and follows MVC design pattern
                            </li>
                            <li className="text-gray-800 text-base mb-4">
                                Extensive test coverage
                            </li>
                        </ul>
                        <div className="flex flex-row space-x-4">
                            <VisitGithubButton href="https://github.com/AY2324S1-CS2103T-T09-1/tp" />
                        </div>
                        <JobFestGoTechUsedCard />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default JobFestGoCard;
