import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool } from 'react-icons/fa';
import { IoSchool } from 'react-icons/io5';

function Timeline() {
    return (
        <div>
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
                    <p>
                        Currently a Year 2 Computer Science student pursuing a Bachelor of Computing
                        in Computer Science with Honours degree.
                    </p>
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
                    <p>Achieved 88.875 RP for A Levels.</p>
                    <p>
                        Was an active member of Nanyang Photographic Society (NYPS). Regularly
                        served as a photographer for different school events.
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
                    <p>Achieved raw L1R5 of 7 points, net L1R5 of 3 points for O Levels.</p>
                    <p>
                        Was appointed an AV team leader of the Infocomm Club, spearheading the
                        management of the audio-visual system for major school events. Regularly
                        participated in game making competitions.
                    </p>
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
