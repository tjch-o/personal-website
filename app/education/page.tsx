'use client';

import Timeline from '@/components/education/Timeline';
import NavBar from '@/components/nav/NavBar';
import React from 'react';
import './education.css';

function Education() {
    return (
        <div className="bg-tokyo-night">
            <NavBar />
            <Timeline />
        </div>
    );
}

export default Education;
