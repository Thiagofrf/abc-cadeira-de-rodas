"use client"

import Link from 'next/link'

import { items } from "../../../public/products.json"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Navigation, Pagination } from 'swiper/modules';

export default function ProductSlider() {
    const { products } = items;

    return (
        <div className="mx-auto mt-24 max-w-screen-xl mb-10">
            <h1 className="text-center text-3xl font-bold text-[#172554] mb-10">Produtos Destacados</h1>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {products.map((item) => {
                    return (
                        <SwiperSlide className="bg-[#eee] flex-col p-2.5 rounded-lg">
                            <img src={item.imageUrl} alt={item.title} className="!w-52 !h-52"/>
                            <h2 className="text-sm mt-5 font-light h-10 w-4/5">{item.title}</h2>
                            <p className="mt-3 font-bold text-[#172554]">Por: R${item.price}</p>
                            <Link className='mt-5 mb-5 bg-[#16a34a] hover:bg-[#15803d] w-4/5 p-2 text-white font-semibold text-base rounded-md' href="#">Ver detalhes</Link>
                        </SwiperSlide> 
                    )
                })}
            </Swiper>

        </div>
    )
}