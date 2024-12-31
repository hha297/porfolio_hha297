import Image from 'next/image';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
        return (
                <div className="bg-primary/60 w-full h-full">
                        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
                                <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
                                        <motion.h1
                                                variants={fadeIn('down', 0.2)}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="h1 z-10"
                                        >
                                                Transforming Idea <br /> Into{' '}
                                                <span className="text-accent">Digital Reality</span>
                                        </motion.h1>
                                        <motion.div
                                                variants={fadeIn('down', 0.3)}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="max-w-sm z-10 xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
                                        >
                                                4 years ago, I started learning programming. Since then, I have done
                                                remote work for agencies, consulted for startups, and collaborated on
                                                digital products for business and consumer use.
                                                <br />
                                                <div className="hidden md:block">
                                                        My journey has allowed me to work with diverse teams, tackle
                                                        complex challenges, and continuously expand my skill set. I am
                                                        passionate about creating impactful solutions and always eager
                                                        to take on new challenges in the tech industry.
                                                </div>
                                        </motion.div>
                                        <div className="flex z-10 justify-center xl:hidden relative">
                                                <ProjectsBtn />
                                        </div>
                                        <motion.div
                                                variants={fadeIn('down', 0.4)}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="hidden xl:flex z-10"
                                        >
                                                <ProjectsBtn />
                                        </motion.div>
                                </div>
                        </div>
                        <div className="w-full h-full absolute right-0 bottom-0">
                                <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
                                <ParticlesContainer />
                                <motion.div
                                        variants={fadeIn('up', 0.2)}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        className="w-full h-full max-w-[737px] max-h-[678px] absolute bottom-0 lg:right-[12%]"
                                >
                                        <Avatar />
                                </motion.div>
                        </div>
                </div>
        );
};

export default Home;
