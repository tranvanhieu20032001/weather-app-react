import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // install Swiper modules
      spaceBetween={30}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">01:00 PM</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            className="w-12"
          />
          <p className="font-medium">20°C</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">02:00 PM</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            className="w-12"
          />
          <p className="font-medium">20°C</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">03:00 PM</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            className="w-12"
          />
          <p className="font-medium">20°C</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:00 PM</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            className="w-12"
          />
          <p className="font-medium">20°C</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">05:00 PM</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            className="w-12"
          />
          <p className="font-medium">20°C</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">06:00 PM</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            className="w-12"
          />
          <p className="font-medium">20°C</p>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">07:00 PM</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            className="w-12"
          />
          <p className="font-medium">20°C</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">08:00 PM</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            className="w-12"
          />
          <p className="font-medium">20°C</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">11:00 PM</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            className="w-12"
          />
          <p className="font-medium">20°C</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="isActive">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">12:00 PM</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            className="w-12"
          />
          <p className="font-medium">20°C</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">13:00 PM</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            className="w-12"
          />
          <p className="font-medium">20°C</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">14:00 PM</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            className="w-12"
          />
          <p className="font-medium">20°C</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">15:00 PM</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            className="w-12"
          />
          <p className="font-medium">20°C</p>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};
