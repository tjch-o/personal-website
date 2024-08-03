import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';

const card = (
    <React.Fragment>
        <CardContent className="flex space-x-4">
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                <Image src="home/reactjs.svg" alt="Reactjs" height={50} width={50}></Image>
            </a>

            <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                <Image src="home/bootstrap.svg" alt="Bootstrap" height={50} width={50}></Image>
            </a>

            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                <Image src="home/nextjs.svg" alt="Nextjs" height={50} width={50}></Image>
            </a>

            <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                <Image src="home/nodejs.svg" alt="Nodejs" height={50} width={50}></Image>
            </a>

            <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                <Image src="home/expressjs.svg" alt="Expressjs" height={50} width={50}></Image>
            </a>

            <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
                <Image src="home/firebase.svg" alt="Firebase" height={50} width={50}></Image>
            </a>

            <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
                <Image src="home/netlify.svg" alt="Netlify" height={50} width={50}></Image>
            </a>
        </CardContent>
    </React.Fragment>
);

function GrindTogetherTechUsedCard() {
    return (
        <div className="my-4">
            <Box>
                <h1 className="text-2xl font-bold pb-4">Skills</h1>
                <Card
                    variant="outlined"
                    sx={{ maxWidth: '450px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                >
                    {card}
                </Card>
            </Box>
        </div>
    );
}

export default GrindTogetherTechUsedCard;
