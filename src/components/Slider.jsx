import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';




function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src='https://gifts.khaadi.com/media/wysiwyg/khaadi/01-01-2ndscroll/2nd-scroll-0530.jpg'/></SwiperSlide>
      <SwiperSlide><img src='https://gifts.khaadi.com/media/wysiwyg/khaadi/01-01-2ndscroll/2nd-scroll-0530.jpg'/></SwiperSlide>
      <SwiperSlide><img src='https://gifts.khaadi.com/media/wysiwyg/khaadi/01-01-2ndscroll/2nd-scroll-0530.jpg'/></SwiperSlide>
      <SwiperSlide><img src='https://gifts.khaadi.com/media/wysiwyg/khaadi/01-01-2ndscroll/2nd-scroll-0530.jpg'/></SwiperSlide>
      <SwiperSlide><img src='https://gifts.khaadi.com/media/wysiwyg/khaadi/01-01-2ndscroll/2nd-scroll-0530.jpg'/></SwiperSlide>
      ...
    </Swiper>
  )
}

export default Slider
