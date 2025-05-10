import React from 'react';
import { MdDateRange } from 'react-icons/md';

interface DateDisplayProps {
    start: string;
    end: string;
}

function DateDisplay({ start, end }: DateDisplayProps) {
    return (
        <div className={`flex items-center font-fira-sans`}>
            <MdDateRange size={25} />
            <p className="ml-1">
                {start} to {end}
            </p>
        </div>
    );
}

export default DateDisplay;
