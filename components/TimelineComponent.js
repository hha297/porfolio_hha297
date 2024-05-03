import React from 'react';
import Image from 'next/image';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logoImage from '../public/logo.png';
import webDev from '../public/webdev.png';
import UiUX from '../public/uiux.png';
import mobileDev from '../public/mobile.png';
import VscDb from '../public/vscdb.png';
import EternityDesign from '../public/eternity_design.png';
import UITLogo from '../public/uit_logo.png';
import OAMKLogo from '../public/OAMK_logo.png';
import { SiReact } from 'react-icons/si';

const getIcon = (item) => {
        console.log(item.title);

        const lowerCaseTitle = item.title.toLowerCase();
        if (lowerCaseTitle.includes('web') && lowerCaseTitle.includes('development')) {
                return <Image src={webDev} height={100} width={100} alt="webIcon" className=" rounded-full" />;
        } else if (lowerCaseTitle.includes('ui/ux') && lowerCaseTitle.includes('design')) {
                return <Image src={UiUX} height={48} width={48} alt="UI/UX Icon" className="mx-auto mt-[8px]" />;
        } else if (lowerCaseTitle.includes('mobile') && lowerCaseTitle.includes('development')) {
                return <Image src={mobileDev} height={48} width={48} alt="Mobile Icon" className="mx-auto mt-[4px]" />;
        } else if (lowerCaseTitle.includes('version control') && lowerCaseTitle.includes('database')) {
                return <Image src={VscDb} height={52} width={52} alt="Version Control" className="mx-auto mt-[4px]" />;
        } else if (lowerCaseTitle.includes('internship')) {
                return (
                        <Image
                                src={EternityDesign}
                                height={60}
                                width={60}
                                alt="Eternity Design"
                                className="mx-auto rounded-full"
                        />
                );
        } else if (lowerCaseTitle.includes('information system')) {
                return (
                        <Image
                                src={UITLogo}
                                height={52}
                                width={52}
                                alt="Version Control"
                                className="mx-auto mt-[8px]"
                        />
                );
        } else {
                return <Image src={OAMKLogo} height={56} width={56} alt="Version Control" className="mx-auto" />;
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
                <VerticalTimeline>
                        {data.map((item, index) => (
                                <VerticalTimelineElement
                                        key={index}
                                        className="vertical-timeline-element"
                                        contentStyle={{
                                                background: '#131424',
                                                color: '#fff',
                                        }}
                                        contentArrowStyle={{ borderRight: '8px solid #393A47' }}
                                        date={item.date}
                                        dateClassName="mx-4"
                                        iconStyle={{ background: '#fff', color: '#000' }}
                                        icon={getIcon(item)}
                                >
                                        <h3
                                                className={`vertical-timeline-element-title text-2xl text-accent`}
                                                style={{ marginBottom: '12px' }}
                                        >
                                                {item.title}
                                        </h3>
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
                                                                        className="text-white-100 text-[16px] pl-1 tracking-wider"
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
