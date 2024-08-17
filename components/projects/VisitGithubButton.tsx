import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

interface VisitGithubButtonProps {
    href: string;
}

function VisitGithubButton({ href }: VisitGithubButtonProps) {
    return (
        <div className="mb-16">
            <Link href={href}>
                <FaGithub className="text-4xl text-tokyo-night-light" />
            </Link>
        </div>
    );
}

export default VisitGithubButton;
