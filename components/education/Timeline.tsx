import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool } from 'react-icons/fa';
import { IoSchool } from 'react-icons/io5';

function Timeline() {
    return (
        <div className="my-16">
            <VerticalTimeline lineColor="white">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="August 2022 - Present"
                    contentStyle={{ background: '#9146ff', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #9146ff' }}
                    iconStyle={{ background: '#594d5b', color: '#fff' }}
                    visible={true}
                    icon={<IoSchool size={50} />}
                >
                    <h3 className="vertical-timeline-element-title">
                        National University of Singapore (NUS)
                    </h3>
                    <p>Currently a Year 3 Computer Science undergraduate.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="January 2018 - December 2019"
                    contentStyle={{ background: '#8a3cff', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #8a3cff' }}
                    iconStyle={{ background: '#594d5b', color: '#fff' }}
                    visible={true}
                    icon={<FaSchool size={50} />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Nanyang Junior College (NYJC)
                    </h3>
                    <p>Achieved 88.875 RP for A Levels with 6 distinctions.</p>
                    <p>
                        Served as a photographer for different school events under NYJC Photographic
                        Society (NYPS) and also as an OGL for J1 Orientation 2019.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="January 2014 - December 2017"
                    contentStyle={{ background: '#7c32e6', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #7c32e6' }}
                    iconStyle={{ background: '#594d5b', color: '#fff' }}
                    visible={true}
                    icon={<FaSchool size={50} />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Zhonghua Secondary School (ZHSS)
                    </h3>
                    <p>
                        Achieved raw L1R5 of 7 points, net L1R5 of 3 points for O Levels with 9
                        distinctions.
                    </p>
                    <p>Served as a team leader in Infocomm Club.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="January 2008 - December 2013"
                    contentStyle={{ background: '#6e29cc', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #6e29cc' }}
                    iconStyle={{ background: '#594d5b', color: '#fff' }}
                    visible={true}
                    icon={<FaSchool size={50} />}
                >
                    <h3 className="vertical-timeline-element-title">Rosyth School</h3>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Timeline;
