import React from 'react';
import Image from 'next/image';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent } from '@mui/lab';
import TimelineConnector from '@mui/lab/TimelineConnector';
import webDev from '../public/webdev.png';
import UiUX from '../public/uiux.png';
import mobileDev from '../public/mobile.png';
import VscDb from '../public/vscdb.png';
import KatchLogo from '../public/katch-logo.png';
import UITLogo from '../public/uit_logo.png';
import OAMKLogo from '../public/OAMK_logo.png';

const getIcon = (item) => {
        const lowerCaseTitle = item.title.toLowerCase();
        const iconClasses = 'object-contain mx-auto w-12 h-12 sm:w-16 sm:h-16';
        if (lowerCaseTitle.includes('web') && lowerCaseTitle.includes('development')) {
                return <Image src={webDev} alt="Web Development Icon" className={iconClasses} />;
        } else if (lowerCaseTitle.includes('ui/ux') && lowerCaseTitle.includes('design')) {
                return <Image src={UiUX} alt="UI/UX Design Icon" className={`${iconClasses} !w-12 !h-12`} />;
        } else if (lowerCaseTitle.includes('mobile') && lowerCaseTitle.includes('development')) {
                return <Image src={mobileDev} alt="Mobile Development Icon" className={`${iconClasses} !w-12 !h-12`} />;
        } else if (lowerCaseTitle.includes('version control') && lowerCaseTitle.includes('database')) {
                return <Image src={VscDb} alt="Version Control Icon" className={`${iconClasses} !w-12 !h-12`} />;
        } else if (lowerCaseTitle.includes('internship')) {
                return <Image src={KatchLogo} alt="Internship Icon" className={iconClasses} />;
        } else if (lowerCaseTitle.includes('information system')) {
                return <Image src={UITLogo} alt="Information System Icon" className={iconClasses} />;
        } else {
                return <Image src={OAMKLogo} alt="Default Icon" className={iconClasses} />;
        }
};

const TimelineComponent = ({ data }) => {
        if (!data) {
                return <div>No data available</div>;
        }

        if (!Array.isArray(data)) {
                return <div>Data is not an array</div>;
        }

        return (
                <Timeline position="alternate">
                        {data.map((item, index) => (
                                <TimelineItem key={index}>
                                        <TimelineSeparator>
                                                <TimelineDot className="bg-white flex items-center justify-center w-16 h-16">
                                                        {getIcon(item)}
                                                </TimelineDot>
                                                {index !== data.length - 1 && <TimelineConnector />}
                                        </TimelineSeparator>

                                        <TimelineContent className="bg-gray-800 text-white p-4 rounded-lg max-w-[360px] w-full">
                                                <h3 className="text-xl text-accent mb-2">{item.title}</h3>

                                                {/* Location */}
                                                {item.location && (
                                                        <p className="text-sm text-neutral-400 mb-2">{item.location}</p>
                                                )}

                                                {/* Company / School Name */}
                                                {item.companyName && (
                                                        <p className="text-sm text-neutral-400 mb-2">
                                                                {item.companyName}
                                                        </p>
                                                )}
                                                {item.schoolName && (
                                                        <p className="text-sm text-neutral-400 mb-2">
                                                                {item.schoolName}
                                                        </p>
                                                )}

                                                {/* GPA */}
                                                {item.gpa && (
                                                        <p className="text-sm text-neutral-400 mb-2">GPA: {item.gpa}</p>
                                                )}

                                                {/* Icons */}
                                                {item.icons && (
                                                        <div className="flex flex-col gap-2 mb-3">
                                                                {item.icons.map((iconData, iconIndex) => (
                                                                        <div
                                                                                key={iconIndex}
                                                                                className="flex gap-2 items-center"
                                                                        >
                                                                                <div>{iconData.icon}</div>
                                                                                <span className="text-sm text-neutral-400">
                                                                                        {iconData.label}
                                                                                </span>
                                                                        </div>
                                                                ))}
                                                        </div>
                                                )}

                                                {/* Points */}
                                                {item.points && (
                                                        <ul className="list-disc ml-5">
                                                                {item.points.map((point, pointIndex) => (
                                                                        <li
                                                                                key={pointIndex}
                                                                                className="text-sm text-neutral-300"
                                                                        >
                                                                                {point}
                                                                        </li>
                                                                ))}
                                                        </ul>
                                                )}
                                        </TimelineContent>
                                </TimelineItem>
                        ))}
                </Timeline>
        );
};

export default TimelineComponent;
