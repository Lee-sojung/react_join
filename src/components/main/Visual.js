import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Visual() {
  return (
    <figure >
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect='coverflow'
        spaceBetween={50}
        slidesPerView={3}
        coverflowEffect = {{
          rotate: 80,
          stretch:0,
          depth:100,
          modifier:1,
          slideShadow: true
        }}
        grabCursor
        loop
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </figure>
  )
}

export default Visual;