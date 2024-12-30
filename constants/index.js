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
                        { icon: <SiTailwindcss />, label: 'TailwindCSS' },
                        { icon: <FaJs />, label: 'JavaScript' },
                        { icon: <SiTypescript />, label: 'TypeScript' },
                        { icon: <FaReact />, label: 'React.js' },
                        { icon: <FaNodeJs />, label: 'Node.js' },
                        { icon: <SiNextdotjs />, label: 'Next.js' },
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
                title: 'Internship - Full Stack Web Developer',
                companyName: 'Katch Oy',
                location: 'Espoo, Finland',
                date: 'September 2024 - Present',
                points: [
                        'Developing and maintaining web applications using React.js and other related technologies.',
                        'Collaborated with other designers to conduct user research, including surveys and interviews, to gather insights into user behaviors and preferences.',
                        'Participating in code reviews - Provide and receive constructive feedback on code, helping to identify areas for improvement and ensuring code quality.',
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
