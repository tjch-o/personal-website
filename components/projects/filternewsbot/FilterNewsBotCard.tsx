import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import VisitGithubButton from '../VisitGithubButton';
import FilterNewsBotTechUsedCard from './FilterNewsBotTechUsedCard';

function FilterNewsBotCard() {
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
                        minWidth: 600,
                        minHeight: 600,
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '10px',
                    }}
                    image="projects/filternewsbot.png"
                    title="Filter-News-Bot"
                />
                <CardContent>
                    <div>
                        <h1 className="text-4xl font-bold mb-4">Filter-News-Bot</h1>
                        <h3 className="font-medium mb-4">
                            A Telegram bot that enables users to customise their news feed by
                            filtering out news articles with parameters of their choice, such as
                            keywords, news sources, and news categories.
                        </h3>
                        <h3 className="text-l font-medium mb-4">
                            {' '}
                            The very first Telegram bot I have written.
                        </h3>
                        <div className="flex flex-row space-x-4">
                            <VisitGithubButton href="https://github.com/tjch-o/filter-news-bot" />
                        </div>
                        <FilterNewsBotTechUsedCard />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default FilterNewsBotCard;
