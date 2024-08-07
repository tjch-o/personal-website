import React from 'react';
import GrindTogetherTechUsedCard from './GrindTogetherTechUsedCard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import VisitGithubButton from '../VisitGithubButton';
import VisitSiteButton from '../VisitSiteButton';

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
                        <h3 className="font-medium mb-4">
                            A full-stack web app that allows NUS students to find study partners by
                            posting study invitations based on modules, faculty and location. Design
                            of the frontend is inspired by popular social media platforms such as
                            Facebook and Instagram.
                        </h3>
                        <h3 className="text-l font-medium mb-4">
                            {' '}
                            Project for NUS Orbital Programme 2023.
                        </h3>
                        <div className="flex flex-row space-x-4">
                            <VisitSiteButton href="https://glittery-pastelito-97d2c4.netlify.app/" />
                            <VisitGithubButton href="https://github.com/tjch-o/orbital-grindtogether" />
                        </div>
                        <GrindTogetherTechUsedCard />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default GrindTogetherCard;
