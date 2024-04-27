import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
        return (
                <div>
                        <Link
                                href={'/work'}
                                className="relative w-48 h-48 flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
                        >
                                <Image
                                        src={'/rounded-text.png'}
                                        width={144}
                                        height={144}
                                        alt=""
                                        className="animate-spin-slow w-full h-full max-w-36 max-h-36"
                                />
                                <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 group-hover:text-accent transition-all duration-300" />
                        </Link>
                </div>
        );
};

export default ProjectsBtn;
