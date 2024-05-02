import Link from 'next/link';
import { RiInstagramLine, RiFacebookFill, RiGithubLine, RiLinkedinFill } from 'react-icons/ri';

const Socials = () => {
        return (
                <div className="flex items-center z-10 gap-x-5 text-2xl xl:text-3xl">
                        <Link
                                href={'https://github.com/hha297'}
                                className="hover:text-accent transition-all duration-300"
                        >
                                <RiGithubLine />
                        </Link>
                        <Link
                                href={'https://www.linkedin.com/in/dang-hoang-ha-b08925257/'}
                                className="hover:text-accent transition-all duration-300"
                        >
                                <RiLinkedinFill />
                        </Link>
                        <Link
                                href={'https://www.instagram.com/hha.297/'}
                                className="hover:text-accent transition-all duration-300"
                        >
                                <RiInstagramLine />
                        </Link>
                        <Link
                                href={'https://www.facebook.com/hha.2907/'}
                                className="hover:text-accent transition-all duration-300"
                        >
                                <RiFacebookFill />
                        </Link>
                </div>
        );
};

export default Socials;
