'use client';

import Image from 'next/image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// data
export const workSlides = {
        slides: [
                {
                        images: [
                                {
                                        title: 'Snapshot',
                                        path: '/snapshot.png',
                                        url: 'https://snapshot-zeta-five.vercel.app/',
                                },
                                {
                                        title: 'Imaginify',
                                        path: '/imaginify.png',
                                        url: 'https://imaginify-self-eight.vercel.app/',
                                },
                                {
                                        title: '3D Portfolio',
                                        path: '/3dportfolio.png',
                                        url: 'https://portfolio-hha2907s-projects.vercel.app/',
                                },
                                {
                                        title: 'Moview',
                                        path: '/moview.png',
                                        url: 'https://reactjs-movie-hha2907.vercel.app/',
                                },
                        ],
                },
                // {
                //         images: [
                //                 {
                //                         title: 'Snapshot',
                //                         path: '/snapshot.png',
                //                         url: 'https://snapshot-zeta-five.vercel.app/',
                //                 },
                //                 {
                //                         title: 'Imaginify',
                //                         path: '/imaginify.png',
                //                         url: 'https://imaginify-self-eight.vercel.app/',
                //                 },
                //                 {
                //                         title: '3D Portfolio',
                //                         path: '/3dportfolio.png',
                //                         url: 'https://portfolio-hha2907s-projects.vercel.app/',
                //                 },
                //                 {
                //                         title: 'Moview',
                //                         path: '/moview.png',
                //                         url: 'https://reactjs-movie-hha2907.vercel.app/',
                //                 },
                //         ],
                // },
        ],
};

const WorkSlider = () => {
        const router = useRouter();
        return (
                <Swiper
                        spaceBetween={0}
                        pagination={{
                                clickable: true,
                        }}
                        className="h-[280px] sm:h-[640px]"
                        modules={[Pagination]}
                >
                        {workSlides.slides.map((slide, index) => {
                                return (
                                        <SwiperSlide key={index}>
                                                <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer h-full">
                                                        {slide.images.map((image, index) => (
                                                                <Link
                                                                        href={image.url || '#'}
                                                                        className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                                                                        key={index}
                                                                >
                                                                        {/* Image */}
                                                                        <div className="flex items-center justify-center relative overflow-hidden w-full h-full">
                                                                                <Image
                                                                                        src={image.path}
                                                                                        alt={image.title}
                                                                                        width={500}
                                                                                        height={500}
                                                                                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                                                                                />
                                                                                {/* Overlay */}
                                                                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-60 transition-all duration-700"></div>
                                                                                {/* Sliding Title */}
                                                                                <div className="absolute top-0 -translate-y-full group-hover:translate-y-10 transition-all duration-300">
                                                                                        <div className="flex items-center gap-x-2 text-sm tracking-[0.2em]">
                                                                                                <div className="text-xl font-bold text-white uppercase">
                                                                                                        {image.title}
                                                                                                </div>
                                                                                        </div>
                                                                                </div>

                                                                                {/* Bottom Text */}
                                                                                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-all duration-300">
                                                                                        <div className="flex items-center gap-x-2 text-xl font-bold tracking-[0.2em]">
                                                                                                <div className="delay-100">
                                                                                                        LIVE
                                                                                                </div>
                                                                                                <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-100">
                                                                                                        PROJECT
                                                                                                </div>
                                                                                                <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300">
                                                                                                        <FaArrowRight />
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </Link>
                                                        ))}
                                                </div>
                                        </SwiperSlide>
                                );
                        })}
                </Swiper>
        );
};

export default WorkSlider;
