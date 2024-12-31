import Image from 'next/image';

//next link
import Link from 'next/link';

//components
import Socials from '../components/Socials';

const Header = () => {
        return (
                <header className="absolute z-30 w-full items-center px-0 xl:h-[90px] ">
                        <div className="container mx-auto ">
                                <div className="flex flex-row w-full justify-between items-center gap-y-6 mt-2 md:mt-8">
                                        <Link href={'/'}>
                                                <Image
                                                        src={'/logo.png'}
                                                        width={108}
                                                        height={48}
                                                        alt="Logo"
                                                        priority={true}
                                                />
                                        </Link>
                                        <Socials />
                                </div>
                        </div>
                </header>
        );
};

export default Header;
