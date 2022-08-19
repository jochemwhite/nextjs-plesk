import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import Slider_content from "./Slider_content";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
const USP = () => {
  return (
    <>
      <div className="flex bg-fixed bg-[url('/USP/test.jpg')] bg-cover bg-center">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 5000,
          }}
        >
          {/* Webhosting */}
          <SwiperSlide>
            <Slider_content
              //slider title + disc
              slider_title="WebHosting"
              slider_description1="Creëer je eigen website en vraag een professioneel"
              slider_description2="e-mailadres aan"
              // slider_items
              item1_bold="Automatische"
              item1="Backups"
              item2_bold="Gratis"
              item2="SSL-certificaat"
              item3_bold="99%"
              item3="Uptime"
              item4_bold="gratis"
              item4="wordpress install"
              //slider button
              slider_button="Details bekijken"
              slider_url="/webhosting"
              //slider image
              img_url="/USP/webhosting.png"
              img_alt="Amrio Webserver"
              img_width="500px"
              img_height="500px"
              text1="vanaf"
              price="€2,49,-"
              text2="/maand"
            />
          </SwiperSlide>
          {/* Game Hosting */}
          <SwiperSlide>
            <Slider_content
              //slider title + disc
              slider_title="Game Hosting"
              slider_description1="Creëer je eigen gameserver of creëer je eigen "
              slider_description2="teamspeak server"
              // slider_items
              item1_bold="Automatische"
              item1="Backups"
              item2_bold="Gratis"
              item2="subdomain"
              item3_bold="99%"
              item3="Uptime"
              item4_bold="Gratis"
              item4="Mod support"
              //slider button
              slider_button="Details bekijken"
              slider_url="/minecraft"
              //slider image
              img_url="/USP/webhosting.png"
              img_alt="Amrio Logo"
              img_width="500px"
              img_height="500px"
              text1="vanaf"
              price="€39,-"
              text2="/maand"
            />
          </SwiperSlide>
          {/* WebDesign */}
          <SwiperSlide>
            <Slider_content
              //slider title + disc
              slider_title="WebDesign"
              slider_description1="Amrio maakt websites met custom code"
              slider_description2="net zoals deze website"
              // slider_items
              item1_bold="Professioneel"
              item1="Professioneel"
              item2_bold="Custom"
              item2="Gecodeerd"
              item3_bold="Mobiel"
              item3="Vriendelijk"
              item4_bold="Revisies"
              item4="Zijn Mogelijk"
              //slider button
              slider_button="Details bekijken"
              slider_url="/webdesign"
              //slider image
              img_url="/Accordion/webdesign.png"
              img_alt="Amrio Webdesign"
              img_width="600px"
              img_height="600px"
              text1="vanaf"
              price="€299,-"
              text2="eenmalig"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default USP;
