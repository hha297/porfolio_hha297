import React from 'react';
import Image from 'next/image';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logoImage from '../public/logo.png';
import webDev from '../public/webdev.png';
import UiUX from '../public/uiux.png';
import mobileDev from '../public/mobile.png';
import VscDb from '../public/vscdb.png';
import KatchLogo from '../public/katch-logo.png';
import UITLogo from '../public/uit_logo.png';
import OAMKLogo from '../public/OAMK_logo.png';
import { SiReact } from 'react-icons/si';
import { RiEarthFill } from 'react-icons/ri';

const getIcon = (item) => {
        const lowerCaseTitle = item.title.toLowerCase();
        const iconClasses = ' object-contain mx-auto w-12 h-12 sm:w-16 sm:h-16';
        if (lowerCaseTitle.includes('web') && lowerCaseTitle.includes('development')) {
                return <Image src={webDev} alt="Web Development Icon" className={`${iconClasses}`} />;
        } else if (lowerCaseTitle.includes('ui/ux') && lowerCaseTitle.includes('design')) {
                return <Image src={UiUX} alt="UI/UX Design Icon" className={`${iconClasses} !w-12 !h-12`} />;
        } else if (lowerCaseTitle.includes('mobile') && lowerCaseTitle.includes('development')) {
                return <Image src={mobileDev} alt="Mobile Development Icon" className={`${iconClasses} !w-12 !h-12`} />;
        } else if (lowerCaseTitle.includes('version control') && lowerCaseTitle.includes('database')) {
                return <Image src={VscDb} alt="Version Control Icon" className={`${iconClasses} !w-12 !h-12`} />;
        } else if (lowerCaseTitle.includes('internship')) {
                return <Image src={KatchLogo} alt="Internship Icon" className={`${iconClasses}`} />;
        } else if (lowerCaseTitle.includes('information system')) {
                return <Image src={UITLogo} alt="Information System Icon" className={`${iconClasses}`} />;
        } else {
                return <Image src={OAMKLogo} alt="Default Icon" className={`${iconClasses}`} />;
        }
};

const TimelineComponent = ({ data }) => {
        if (!data) {
                return <div>No data available</div>;
        }
        console.log(data);

        if (!Array.isArray(data)) {
                return <div>Data is not an array</div>;
        }
        return (
                <VerticalTimeline>
                        {data.map((item, index) => (
                                <VerticalTimelineElement
                                        key={index}
                                        className="vertical-timeline-element"
                                        contentStyle={{
                                                background: '#131424',
                                                color: '#fff',
                                                maxWidth: '360px',
                                                width: '300px',

                                                borderRadius: '8px',
                                        }}
                                        date={item.date}
                                        dateClassName="mx-16"
                                        iconStyle={{
                                                background: '#fff',
                                                color: '#20183d',
                                        }}
                                        icon={<RiEarthFill />}
                                >
                                        <h3
                                                className={`vertical-timeline-element-title text-2xl text-accent`}
                                                style={{ marginBottom: '8px' }}
                                        >
                                                {item.title}
                                        </h3>
                                        {item.location && (
                                                <h3
                                                        className="vertical-timeline-element-subtitle text-lg text-neutral-400"
                                                        style={{ marginBottom: '8px' }}
                                                >
                                                        {item.location}
                                                </h3>
                                        )}
                                        {item.companyName && (
                                                <h4 className="vertical-timeline-element-subtitle text-xl">
                                                        {item.companyName}
                                                </h4>
                                        )}
                                        {item.schoolName && (
                                                <h4 className="vertical-timeline-element-subtitle text-xl">
                                                        {item.schoolName}
                                                </h4>
                                        )}
                                        {item.gpa && <p>GPA: {item.gpa}</p>}
                                        {item.icons && (
                                                <div className="flex flex-col">
                                                        {item.icons.map((iconData, iconIndex) => (
                                                                <div
                                                                        key={iconIndex}
                                                                        className="flex gap-2 mb-2 flex-row"
                                                                >
                                                                        {iconData.icon}{' '}
                                                                        <span className="-mt-1">{iconData.label}</span>
                                                                </div>
                                                        ))}
                                                </div>
                                        )}
                                        {item.points && (
                                                <ul className="mt-5 list-disc ml-5 space-y-2">
                                                        {item.points.map((point, pointIndex) => (
                                                                <li
                                                                        className="text-white-100 text-[16px] pl-1 tracking-wider text-left"
                                                                        key={pointIndex}
                                                                >
                                                                        {point}
                                                                </li>
                                                        ))}
                                                </ul>
                                        )}
                                </VerticalTimelineElement>
                        ))}
                </VerticalTimeline>
        );
};

export default TimelineComponent;
