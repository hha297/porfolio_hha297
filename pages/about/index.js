/* eslint-disable react/jsx-key */

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import TimelineComponent from '../../components/TimelineComponent';
import { skills, experiences, education } from '../../constants';
import CountUp from 'react-countup';
//  data
const aboutData = [
        {
                title: 'Skills',
        },
        {
                title: 'Experience',
        },
        {
                title: 'Education',
        },
];

const About = () => {
        const [index, setIndex] = useState(0);

        return (
                <div className="h-full bg-primary/30 pt-48 py-24 md:py-36 text-center xl:text-left">
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
                        <div className="container w-full md:w-3/4 mx-auto h-full flex-1 flex flex-col items-center xl:flex-row gap-x-6">
                                <div className=" hidden md:flex  flex-col justify-center">
                                        <motion.h2
                                                variants={fadeIn('right', 0.2)}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="h2"
                                        >
                                                Captivating <span className="text-accent">stories</span> birth
                                                magnificent designs.
                                        </motion.h2>
                                        <motion.p
                                                variants={fadeIn('right', 0.2)}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="max-w-96 mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
                                        >
                                                4 years ago, I started learning programming. Since then, I have done
                                                remote work for agencies, consulted for startups, and collaborated on
                                                digital products for business and consumer use.
                                        </motion.p>

                                        {/* Counter */}
                                        <motion.div
                                                variants={fadeIn('right', 0.2)}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="hidden md:flex md:max-w-xl  xl:max-w-none mx-auto xl:mx-0 mb-12 xl:mb-0"
                                        >
                                                <div className="flex flex-1 xl:gap-x-6">
                                                        {/* Experience */}
                                                        <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                                                        <CountUp start={0} end={2} duration={5} />+
                                                                </div>
                                                                <div className="text-sm uppercase tracking-[1px] leading-[1.4] max-w-[100[x]">
                                                                        Years of experience
                                                                </div>
                                                        </div>

                                                        {/* Projects */}
                                                        <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                                                        <CountUp start={0} end={20} duration={10} />+
                                                                </div>
                                                                <div className="text-sm uppercase tracking-[1px] leading-[1.4] max-w-[100[x]">
                                                                        Completed projects
                                                                </div>
                                                        </div>
                                                </div>
                                        </motion.div>
                                </div>

                                {/* Info */}
                                <motion.div
                                        variants={fadeIn('left', 0.4)}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        className="flex flex-col w-full xl:max-w-[60%] h-full"
                                        style={{ overflow: 'auto' }}
                                >
                                        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-16 z-10">
                                                {aboutData.map((item, itemIndex) => {
                                                        return (
                                                                <div
                                                                        key={itemIndex}
                                                                        onClick={() => setIndex(itemIndex)}
                                                                        className={`${
                                                                                index === itemIndex &&
                                                                                'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-all'
                                                                        } cursor-pointer relative capitalize xl:text-xl text-lg after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                                                >
                                                                        <div className="">{item.title}</div>
                                                                </div>
                                                        );
                                                })}
                                        </div>
                                        <TimelineComponent
                                                data={index === 0 ? skills : index === 1 ? experiences : education}
                                        />
                                </motion.div>
                        </div>
                </div>
        );
};

export default About;
