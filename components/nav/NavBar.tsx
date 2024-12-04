'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SocialMediaButton from './SocialMediaButton';

function NavBar() {
    const navItems: string[] = ['Experience', 'Education', 'Projects'];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between flex-wrap bg-tokyo-night p-4">
            <div className="flex items-center">
                <Link href="/" className="text-white">
                    <strong>Home</strong>
                </Link>
            </div>

            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white focus:outline-none"
                >
                    <span className="block w-6 h-1 bg-white mb-1"></span>
                    <span className="block w-6 h-1 bg-white mb-1"></span>
                    <span className="block w-6 h-1 bg-white"></span>
                </button>
            </div>

            <div
                className={`
                    absolute top-full left-0 right-0 
                    md:static md:flex 
                    bg-tokyo-night 
                    ${isMenuOpen ? 'block' : 'hidden'} 
                    md:block 
                    md:space-x-8 
                    py-4 md:py-0
                `}
            >
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                    {navItems.map((item: string, index: number) => (
                        <Link
                            href={`/${item.toLowerCase()}`}
                            key={index}
                            className="text-white hover:text-gray-300 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <strong>{item}</strong>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="hidden md:flex space-x-4">
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
