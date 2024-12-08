import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';
import VisitGithubButton from '../visitGithub';
import VisitSiteButton from '../visitSite';
import GrindTogetherTechUsedCard from './GrindTogetherTechUsedCard';

function GrindTogetherCard() {
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
                        minWidth: 750,
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '10px',
                    }}
                    image="projects/grindtogether.png"
                    title="GrindTogether"
                />
                <CardContent>
                    <div>
                        <h1 className="text-4xl font-bold mb-4">GrindTogether</h1>
                        <div className="inline-block bg-tokyo-night-light text-white px-3 py-1 my-2 rounded-full">
                            <h3 className="text-l font-medium">NUS Orbital Programme 2023</h3>
                        </div>
                        <h3 className="font-bold"> What is GrindTogether? </h3>
                        <h3 className="font-medium my-2">
                            A full-stack web app that allows NUS students to find study partners by
                            posting study invitations based on modules, faculty and location.
                        </h3>
                        <h3 className="font-bold my-2"> What features does GrindTogether have? </h3>
                        <ul className="my-2 list-square list-inside">
                            <li className="text-gray-800 text-base">
                                Modern frontend following the design of popular social media sites
                                such as Instagram
                            </li>
                            <li className="text-gray-800 text-base">
                                Users can create, edit and delete listings
                            </li>
                            <li className="text-gray-800 text-base">
                                Users can search for study listings using filters such as modules,
                                location and faculty
                            </li>
                            <li className="text-gray-800 text-base">
                                Users can sort study listings
                            </li>
                            <li className="text-gray-800 text-base">
                                Location dashboard for study listings with busyness indicators
                            </li>
                            <li className="text-gray-800 text-base mb-4">
                                Automated email notifications for posts using keywords
                            </li>
                        </ul>
                        <div className="flex flex-row space-x-4">
                            <VisitGithubButton href="https://github.com/tjch-o/orbital-grindtogether" />
                            <VisitSiteButton href="https://glittery-pastelito-97d2c4.netlify.app/" />
                        </div>
                        <GrindTogetherTechUsedCard />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default GrindTogetherCard;
