import React from 'react';
import Link from 'next/link';
import GithubButton from './GithubButton';
import LinkedInButton from './LinkedInButton';

function NavBar() {
    return (
        <nav className="flex items-center justify-between flex-row bg-royal-blue">
            <div className="flex space-x-8 pl-4 text-lg">
                <Link href="/" className="text-white">
                    <strong>Home</strong>
                </Link>
                <Link href="/professional-experience" className="text-white">
                    <strong>Professional Experience</strong>
                </Link>
                <Link href="/education" className="text-white">
                    <strong>Education</strong>
                </Link>
                <Link href="/projects" className="text-white">
                    <strong>Projects</strong>
                </Link>
            </div>
            <div className="flex space-x-4 pl-2">
                <LinkedInButton />
                <GithubButton />
            </div>
        </nav>
    );
}

export default NavBar;
