import React from 'react';
import Link from 'next/link';
import SocialMediaButton from './SocialMediaButton';

function NavBar() {
    const navItems: string[] = [
        "Experience",
        "Education",
        "Projects"
    ]


    return (
        <nav className="flex items-center justify-between flex-row bg-tokyo-night">
            <div className="flex space-x-8 mx-2 space-x-4 text-lg">
                <Link href="/" className="text-tokyo-night pl-2">
                    <strong>Home</strong>
                </Link>
                {
                    navItems.map((item: string, index: number) => (
                        <Link href={`/${item.toLowerCase()}`} key={index} className='text-tokyo-night'>
                            <strong>{item}</strong>
                        </Link>
                    ))
                }
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
