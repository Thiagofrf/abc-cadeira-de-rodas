"use client"

import { items } from "../../../public/items.json"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function SimpleSlider() {
    const { elastic } = items;
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                loop={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className='mySwiper max-w-screen-xl max-h-96 mx-auto'
            >
                {elastic.map((item) => {
                    return (
                        <SwiperSlide>
                            <img src={item.imageUrl} alt={item.title} className="object-cover w-full h-1/5"/>
                        </SwiperSlide> 
                    )
                })}
            </Swiper>
        </>
    )
}

