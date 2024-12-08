import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

interface VisitGithubButtonProps {
    href: string;
    padding?: number;
}

function VisitGithubButton({ href, padding = 16 }: VisitGithubButtonProps) {
    return (
        <div className={`mb-${padding}`}>
            <Link href={href}>
                <FaGithub className="text-4xl text-tokyo-night-light" />
            </Link>
        </div>
    );
}

export default VisitGithubButton;
