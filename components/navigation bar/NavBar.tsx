import React from 'react';
import Link from 'next/link';
import SocialMediaButton from './SocialMediaButton';

function NavBar() {
    return (
        <nav className="flex items-center justify-between flex-row bg-tokyo-night">
            <div className="flex space-x-8 mx-2 space-x-4 text-lg">
                <Link href="/" className="text-tokyo-night pl-2">
                    <strong>Home</strong>
                </Link>
                <Link href="/experience" className="text-tokyo-night">
                    <strong>Experience</strong>
                </Link>
                <Link href="/education" className="text-tokyo-night">
                    <strong>Education</strong>
                </Link>
                <Link href="/projects" className="text-tokyo-night">
                    <strong>Projects</strong>
                </Link>
            </div>
            <div className="flex space-x-4 mx-2">
                <SocialMediaButton
                    icon="LinkedIn"
                    link="https://www.linkedin.com/in/tze-jie-choo/"
                />
                <SocialMediaButton icon="GitHub" link="https://github.com/tjch-o" />
            </div>
        </nav>
    );
}

export default NavBar;
