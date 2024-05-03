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

const skills = [
        {
                title: 'Web Development',
                icons: [
                        { icon: <FaHtml5 />, label: 'HTML5' },
                        { icon: <FaCss3 />, label: 'CSS3' },
                        { icon: <FaJs />, label: 'JavaScript' },
                        { icon: <FaReact />, label: 'ReactJS' },
                        { icon: <FaNodeJs />, label: 'Node.js' },
                        { icon: <SiTypescript />, label: 'TypeScript' },
                        { icon: <SiNextdotjs />, label: 'Next.js' },
                        { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
                ],
        },
        {
                title: 'UI/UX Design',
                icons: [
                        { icon: <FaFigma />, label: 'Figma' },
                        { icon: <SiAdobeillustrator />, label: 'Adobe Illustrator' },
                        { icon: <SiAdobephotoshop />, label: 'Adobe Photoshop' },
                ],
        },
        {
                title: 'Mobile Development',
                icons: [
                        { icon: <SiKotlin />, label: 'Kotlin' },
                        { icon: <FaReact />, label: 'React Native' },
                ],
        },
        {
                title: 'Version Control & Database',
                icons: [
                        { icon: <FaGithub />, label: 'GitHub' },
                        { icon: <FaGitlab />, label: 'GitLab' },
                        { icon: <SiMysql />, label: 'MySQL' },
                        { icon: <SiMongodb />, label: 'MongoDB' },
                        { icon: <SiPostgresql />, label: 'PostgreSQL' },
                        { icon: <SiFirebase />, label: 'Firebase' },
                ],
        },
];

const experiences = [
        {
                title: 'Internship - Products Designer',
                companyName: 'Eternity Design',
                date: 'May 2021 -  September 2021',
                points: [
                        'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
                        'Implementing responsive design and ensuring cross-browser compatibility.',
                ],
        },
        {
                title: 'Internship - Front-End Web Developer',
                companyName: 'Eternity Design',
                date: 'March 2022 - July 2022',
                points: [
                        'Developing and maintaining web applications using React.js and other related technologies.',
                        'Collaborated with senior designers to conduct user research, including surveys and interviews, to gather insights into user behaviors and preferences.',
                        'Participating in code reviews and providing constructive feedback to other developers.',
                ],
        },
];

const education = [
        {
                title: 'Information System',
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
];

export { skills, experiences, education };
