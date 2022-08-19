import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import Image from "next/image";
import s from "./Testimonoial.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
export default function Testimonial() {
  return (
    <>
      <div className={s.bg}>
        <div className="flex justify-center pb-16">
          <div className=" inline-block border-b-2 border-main">
            <h1 className="font-bold text-4xl ">Testimonial</h1>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 10000,
          }}
        >
          <SwiperSlide>
            <div className="flex justify-center pb-16">
              <p className="text-center w-1/2 leading-8">
                I had a great experience with Amrio. They really listened to me,
                and helped me creating the logo that I had in mind. They
                provided me with professional help and guidance. Every
                adjustment/corrections was taken seriously, and it didn't feel
                like I was bothering them. I would definitely recommend working
                with them
              </p>
            </div>
            <div>
              <div className="flex justify-center">
                <a
                  className="font-bold italic hover:text-main"
                  target="_blank"
                  href="https://twitch.tv/ron0x"
                >
                  Ron0x - Content creator on Twitch
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center pb-16">
              <p className="text-center w-1/2 leading-8">
                I had a great experience with Amrio. They really listened to me,
                and helped me creating the logo that I had in mind. They
                provided me with professional help and guidance. Every
                adjustment/corrections was taken seriously, and it didn't feel
                like I was bothering them. I would definitely recommend working
                with them
              </p>
            </div>
            <div>
              <div className="flex justify-center">
                <a
                  className="font-bold italic hover:text-main"
                  target="_blank"
                  href="https://twitch.tv/ron0x"
                >
                  Ron0x - Content creator on Twitch
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
