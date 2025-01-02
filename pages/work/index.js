import Circles from '../../components/Circles.js';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants.js';
import WorkSlider from '../../components/WorkSlider.js';
import Bulb from '../../components/Bulb.js';
const Work = () => {
        return (
                <div className="h-full bg-primary/30 py-24 md:py-36 flex items-center ">
                        <Circles />
                        <div className="container mx-auto">
                                <div className="flex flex-col xl:flex-row gap-x-8">
                                        {/* Text */}
                                        <div className="xl:text-left text-center flex xl:w-[30vw] flex-col mb-4 xl:mb-0 ">
                                                <motion.h2
                                                        variants={fadeIn('up', 0.2)}
                                                        initial="hidden"
                                                        animate="show"
                                                        exit="hidden"
                                                        className="h2 xl:mt-12"
                                                >
                                                        My work <span className="text-accent">.</span>
                                                </motion.h2>
                                                <motion.div
                                                        variants={fadeIn('up', 0.4)}
                                                        initial="hidden"
                                                        animate="show"
                                                        exit="hidden"
                                                        className="mb-4 xl:max-w-[480px] mx-auto lg:mx-0 xl:text-left text-center text-xl"
                                                >
                                                        <p className="mb-4">
                                                                I specialize in creating visually stunning and
                                                                user-friendly designs, tailored to bring ideas to life.
                                                        </p>

                                                        <p className="mb-4">
                                                                My expertise spans web and graphic design, ensuring each
                                                                project is functional and aesthetically appealing.
                                                        </p>

                                                        <p className="text-accent font-semibold">
                                                                Explore my portfolio to see the passion, precision, and
                                                                innovation that drive every project I undertake.
                                                        </p>
                                                </motion.div>
                                        </div>
                                        {/* Slider */}
                                        <motion.div
                                                variants={fadeIn('down', 0.6)}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="w-full xl:max-w-[65%] "
                                        >
                                                <WorkSlider />
                                        </motion.div>
                                </div>
                        </div>
                        <Bulb />
                </div>
        );
};

export default Work;
