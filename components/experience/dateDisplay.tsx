import React from 'react';
import { MdDateRange } from 'react-icons/md';
import dayjs from 'dayjs';

interface DateDisplayProps {
    start: string;
    end: string;
}

function DateDisplay({ start, end }: DateDisplayProps) {
    const formattedStart = dayjs(start).format('DD-MM-YYYY');
    const formattedEnd = dayjs(end).format('DD-MM-YYYY');

    return (
        <div className={`flex items-center`}>
            <MdDateRange size={25} />
            <p>
                {formattedStart} to {formattedEnd}
            </p>
        </div>
    );
}

export default DateDisplay;
