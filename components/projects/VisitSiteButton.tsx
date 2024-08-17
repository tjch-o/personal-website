import React from 'react';
import Button from '@mui/material/Button';
import { FaGlobeAmericas } from 'react-icons/fa';
import Link from 'next/link';

interface VisitSiteButtonProps {
    href: string;
}

function VisitSiteButton({ href }: VisitSiteButtonProps) {
    return (
        <div className="mb-16">
            <Link href={href}>
                <FaGlobeAmericas className="text-4xl text-tokyo-night-light" />
            </Link>
        </div>
    );
}

export default VisitSiteButton;
