import { Typography } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import React from "react";
import { SpecialistsData } from "../../Config";

function SpecialistPage() {
  return (
    <div className="py-16 w-full h-auto">
      <Typography
        variant="h2"
        className="text-[#1B3C74] font-display font-semibold text-5xl flex items-center justify-center"
      >
        Our Medical Specialist
      </Typography>
      <div className="rounded-xl">
        <Swiper
          slidesPerView={4}
          spaceBetween={60}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {SpecialistsData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="mt-10 mb-20 w-[380px]">
                <div className="flex flex-col mb-5 h-[420px] w-[380px] bg-gradient-to-b to-[rgba(42,167,255,1)] from-[rgba(225,243,255,1)] border-4 border-white rounded-t-full drop-shadow-2xl relative">
                  <img src={item.image} alt={item.name} className=" absolute bottom-0 left-8 "/>
                </div>
                <Typography
                  variant="h4"
                  className=" flex font-display items-center justify-center text-2xl text-[#1B3C74] font-normal"
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="h5"
                  className="flex font-display items-center justify-center text-primary text-lg font-medium"
                >
                  {item.specialist}
                </Typography>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SpecialistPage;
