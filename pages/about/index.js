/* eslint-disable react/jsx-key */
// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma, FaGithub, FaGitlab } from 'react-icons/fa';

import {
        SiNextdotjs,
        SiAdobeillustrator,
        SiAdobephotoshop,
        SiTailwindcss,
        SiKotlin,
        SiTypescript,
        SiMysql,
        SiPostgresql,
        SiMongodb,
        SiFirebase,
} from 'react-icons/si';

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
//  data
const aboutData = [
        {
                title: 'Skills',
                info: [
                        {
                                title: 'Web Development',
                                icons: [
                                        <FaHtml5 />,
                                        <FaCss3 />,
                                        <FaJs />,
                                        <FaReact />,
                                        <FaNodeJs />,
                                        <SiTypescript />,
                                        <SiNextdotjs />,
                                        <SiTailwindcss />,
                                ],
                        },
                        {
                                title: 'UI/UX Design',
                                icons: [<FaFigma />, <SiAdobeillustrator />, <SiAdobephotoshop />],
                        },
                        {
                                title: 'Mobile Development',
                                icons: [<SiKotlin />, <FaReact />],
                        },
                        {
                                title: 'Version Control && Database',
                                icons: [
                                        <FaGithub />,
                                        <FaGitlab />,
                                        <SiMysql />,
                                        <SiMongodb />,
                                        <SiPostgresql />,
                                        <SiFirebase />,
                                ],
                        },
                ],
        },
        {
                title: 'Experience',
                info: [
                        {
                                title: 'Internship - UI/UX Designer',
                                companyName: 'Eternity Design',
                                date: 'May 2021 -  September 2021',
                                points: [
                                        'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
                                        'Implementing responsive design and ensuring cross-browser compatibility.',
                                ],
                        },
                        {
                                title: 'Internship - Web Developer',
                                companyName: 'Eternity Design',
                                date: 'March 2022 - July 2022',
                                points: [
                                        'Developing and maintaining web applications using React.js and other related technologies.',
                                        'Collaborated with senior designers to conduct user research, including surveys and interviews, to gather insights into user behaviors and preferences.',
                                        'Participating in code reviews and providing constructive feedback to other developers.',
                                ],
                        },
                ],
        },
        {
                title: 'Education',
                info: [
                        {
                                title: 'Information Technology',
                                schoolName: 'University of Information Technology, Ho Chi Minh City National University ',
                                date: 'September 2020 - Jun 2022',
                                gpa: '3.9',
                        },
                        {
                                title: 'Information Technology',
                                schoolName: 'Oulu University Of Applied Sciences',
                                date: 'September 2022 - Present',
                                gpa: '4.1',
                        },
                ],
        },
];

const About = () => {
        const [index, setIndex] = useState(0);
        console.log(index);
        return (
                <div className="h-full bg-primary/30 py-48 text-center xl:text-left">
                        <Circles></Circles>
                        {/* Avatar */}
                        <motion.div
                                variants={fadeIn('right', 0.2)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="hidden xl:flex absolute bottom-0 -left-[360px]"
                        >
                                <Avatar />
                        </motion.div>
                        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
                                <div className="flex-1 flex flex-col justify-center">Hello</div>
                                <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
                                        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                                                {aboutData.map((item, itemIndex) => {
                                                        return (
                                                                <div
                                                                        key={itemIndex}
                                                                        onClick={() => setIndex(itemIndex)}
                                                                        className={`${
                                                                                index === itemIndex &&
                                                                                'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-all'
                                                                        } cursor-pointer capitalize xl:text-xl text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                                                >
                                                                        {item.title}
                                                                </div>
                                                        );
                                                })}
                                        </div>
                                        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
                                                {aboutData[index].info.map((item, itemIndex) => {
                                                        return (
                                                                <div
                                                                        key={itemIndex}
                                                                        className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center"
                                                                >
                                                                        <div className="font-light mb-2 md:mb-0">
                                                                                {item.title}
                                                                        </div>
                                                                        <div className="hidden md:flex">-</div>
                                                                        <div>{item.date}</div>
                                                                        <div className="flex gap-x-4 mb-4 md:mb-0">
                                                                                {item.icons?.map((icon, itemIndex) => {
                                                                                        return (
                                                                                                <div className="text-2xl transition-all duration-500">
                                                                                                        {icon}
                                                                                                </div>
                                                                                        );
                                                                                })}
                                                                        </div>
                                                                </div>
                                                        );
                                                })}
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default About;
