import React from 'react';
import Button from '@mui/material/Button';
import { FaGithub } from 'react-icons/fa';

interface VisitGithubButtonProps {
    href: string;
}

function VisitGithubButton({ href }: VisitGithubButtonProps) {
    return (
        <div className="mb-16">
            <Button
                variant="contained"
                size="large"
                startIcon={<FaGithub />}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    backgroundColor: '#9146ff',
                    'text-transform': 'none',
                    fontSize: '18px',
                    '&:hover': {
                        backgroundColor: '#fde992',
                        color: '#af9e8e',
                    },
                }}
            >
                Visit Github
            </Button>
        </div>
    );
}

export default VisitGithubButton;
