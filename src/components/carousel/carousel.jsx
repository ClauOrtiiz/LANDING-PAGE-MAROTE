import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const Carousel = () => {

    const images = [
        'src/assets/carousel1.jpg',
        'src/assets/carousel2.jpg',
        'src/assets/carousel3.jpg',
        'src/assets/carousel4.jpg',
        'src/assets/carousel5.jpg',
        'src/assets/carousel6.jpg',
        'src/assets/carousel7.jpg',
        'src/assets/carousel8.jpg',
        'src/assets/carousel9.jpg',
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}

            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
                768: {
                    slidesPerView: 3,
                }
            }}
        >

            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        style={{ width: '100%', height: 'auto', margin: '0 auto', display: 'block',justifyContent: 'center' }}
                    />
                </SwiperSlide>
            ))}


        </Swiper>
    );
};

