import React from 'react';
// import Image from 'next/image';
import { Button } from '@mui/material';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

interface SocialMediaButtonProps {
    icon: 'LinkedIn' | 'GitHub';
    link: string;
}

const iconMap = {
    LinkedIn: <FaLinkedin size={40} />,
    GitHub: <FaGithub size={40} />,
};

function SocialMediaButton({ icon, link }: SocialMediaButtonProps) {
    return (
        <Button size="large">
            <a className="text-tokyo-night" href={link} target="_blank" rel="noopener noreferrer">
                {iconMap[icon]}
            </a>
        </Button>
    );
}

export default SocialMediaButton;
