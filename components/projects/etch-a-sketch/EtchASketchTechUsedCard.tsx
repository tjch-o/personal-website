import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';

const card = (
    <React.Fragment>
        <CardContent className="flex space-x-4">
            <a
                href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src="home/html.svg" alt="HTML" height={50} width={50}></Image>
            </a>

            <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src="home/css.svg" alt="CSS" height={50} width={50}></Image>
            </a>

            <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                <Image src="home/javascript.svg" alt="JavaScript" height={50} width={50}></Image>
            </a>
        </CardContent>
    </React.Fragment>
);

function EtchASketchTechUsedCard() {
    return (
        <div className="my-4">
            <Box>
                <h1 className="text-2xl font-bold pb-4">Skills</h1>
                <Card
                    variant="outlined"
                    sx={{ maxWidth: '225px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                >
                    {card}
                </Card>
            </Box>
        </div>
    );
}

export default EtchASketchTechUsedCard;
