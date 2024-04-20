import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules'

import 'swiper/css/bundle';

import { OfferCarouselData } from '../../Config';

export default function OfferCarousel() {

  return (
    <div className="w-full px-16 pt-32 pb-10 mt-20">
      <div className="rounded-xl">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {OfferCarouselData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col gap-6 mb-20 group relative">
                <img src={item.image} alt="offer_image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
