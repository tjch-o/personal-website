import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';

const card = (
    <React.Fragment>
        <CardContent className="flex space-x-4">
            <a href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer">
                <Image src="home/java.svg" alt="Java" height={50} width={50}></Image>
            </a>

            <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                <Image src="home/bootstrap.svg" alt="Bootstrap" height={50} width={50}></Image>
            </a>

            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                <Image src="home/git.svg" alt="Git" height={50} width={50}></Image>
            </a>

            <a
                href="https://en.wikipedia.org/wiki/Object-oriented_programming"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="home/oop.svg"
                    alt="Object Oriented Programming"
                    height={50}
                    width={50}
                ></Image>
            </a>
        </CardContent>
    </React.Fragment>
);

function JobFestGoTechUsedCard() {
    return (
        <div className="my-4">
            <Box>
                <h1 className="text-2xl font-bold pb-4">Skills</h1>
                <Card
                    variant="outlined"
                    sx={{ maxWidth: '275px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                >
                    {card}
                </Card>
            </Box>
        </div>
    );
}

export default JobFestGoTechUsedCard;
