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
                                <div className="flex-1 flex flex-col justify-center ml-20 relative">
                                        <h2 className="h2">
                                                Captivating <span className="text-accent">stories</span> birth
                                                magnificent designs.
                                        </h2>
                                        <p className="max-w-96 mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
                                                4 years ago, I started learning programming. Since then, I have done
                                                remote work for agencies, consulted for startups, and collaborated on
                                                digital products for business and consumer use.
                                        </p>
                                        {/* Counter */}
                                        <div className="flex-1 relative after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                                        {/* Experience */}
                                                        <CountUp start={0} end={2} duration={2} />+
                                                </div>
                                                <div className="text-xs xl:text-xl uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                                        Years of experiences
                                                </div>
                                        </div>
                                </div>

                                {/* Info */}
                                <div
                                        className="flex flex-col w-full xl:max-w-[52%] h-full"
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
                                </div>
                        </div>
                </div>
        );
};

export default About;
