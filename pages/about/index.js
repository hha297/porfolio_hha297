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
                                icon: [<SiKotlin />, <FaReact />],
                        },
                        {
                                title: 'Version Control && Database',
                                icon: [
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
        return <div>About</div>;
};

export default About;
