import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface TechUsedProps {
    techUsed: string[];
    cardWidth: number;
}

const TechUsedCard = ({ techUsed, cardWidth }: TechUsedProps) => {
    return (
        <div className="my-4">
            <Box>
                <Card
                    variant="outlined"
                    sx={{ maxWidth: `${cardWidth}px`, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                >
                    <CardContent className="flex flex-row space-x-4">
                        {techUsed.map((tech) => (
                            <Image
                                key={tech}
                                src={`home/${tech.toLowerCase()}.svg`}
                                alt={tech}
                                height={50}
                                width={50}
                            />
                        ))}
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
};

export default TechUsedCard;
