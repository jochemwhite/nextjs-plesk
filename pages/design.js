import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Slider_content from "../components/slider/Slider_content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "../components/Accordion/Accordion";
import {
  faFacebookF,
  faTwitter,
  faDiscord,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import Testimonial from "../components/Testimonial/Testimonial";

import s from "../styles/design.module.css";
import Cards from "../components/Cards/Cards";

const faqs = [
  {
    key: 0,
    title: "In welk programma worden websites gemaakt? ",
    description:
      "We programmeren de website helemaal vanaf het begin zodat we in staat zijn om elke aanpassing te maken die u van ons verwacht. Door gebruik te maken van PHP, HTML en CSS zijn wij instaat om elk gedetailleerde wijziging te maken waardoor de website uniek is en op maat gemaakt. We vermijden het gebruik van WordPress en Joomla omdat het de authenticiteit van uw website zal verminderen. Door dit te vermijden wordt uw website in hogere kwaliteit beschouwt. Echter, op aanvraag kunnen we wel een website maken met WordPress en Joomla, of wijzigingen maken aan uw huidige website.",
  },
  {
    key: 1,
    title: "Kan ik aanpassingen doorvoeren aan de website? ",
    description:
      "Wij geven tot vijf aanpassingen aan uw website, afhankelijk van welk webdesign pakket u gekozen heeft. Nadat we uw website hebben gemaakt, zullen we u het eind product opsturen. Hierop kunt u reageren naar het e-mail adres webdesign@amrio.nl. Het is van belang dat u uw naam toevoegt en de verwachte wijzigingen in zoveel mogelijk detail uitlegt zodat we er gelijk mee aan de slag kunnen gaan. Nadat we klaar zijn om de veranderingen toe te voegen waar u voor gevraagd heeft zullen we opnieuw het eind product opsturen en als u extra aanpassingen nog over heeft in uw pakket kunt u die gebruiken voor alternatieve veranderingen die u nog zou willen zien in de website. Als alle aanpassingen zijn gebruikt kunt u eventueel nog extra aanpassingen komen. Het bedrag van deze aanpassingen worden in overleg bepaald afhankelijk van de grootte van de aanpassing en de moeilijkheidsgraad ervan.",
  },
  {
    key: 2,
    title: "Wie maakt de inhoud van de website? ",
    description:
      "Wij zullen een template gebruiken om de plaatjes en de teksten toe te voegen in de website. Daarna sturen we u een bericht om te zeggen wat u qua tekst zou willen zien in de met template tekst en foto’s ingevulde gedeeltes van uw website. Als u later toch meer wijzigingen zou willen toevoegen aan uw website, zou u altijd nog gebruik kunnen maken van een aanpassing.",
  },
];

export default function Design() {
  return (
    <>
      <Header />
      <div className=" bg-fixed flex bg-[url('/Banner/design-banner.png')] bg-cover bg-center">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <Slider_content
              slider_title="Logo"
              slider_description1="Wij maken u logo super clean"
              slider_description2="en super snel"
              slider_item1="Professioneel  ontwerp"
              slider_item2="In elk formaat "
              slider_item3="Razend snel"
              slider_item4="Revisies Zijn Mogelijk"
              slider_button="Details bekijken"
              slider_image="/USP/webhosting.png"
              img_url="/USP/webhosting.png"
              img_alt="Amrio Webserver"
              img_width="500px"
              img_height="500px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider_content
              slider_title="Logo"
              slider_description1="Wij maken u logo super clean"
              slider_description2="en super snel"
              slider_item1="Professioneel  ontwerp"
              slider_item2="In elk formaat "
              slider_item3="Razend snel"
              slider_item4="Revisies Zijn Mogelijk"
              slider_button="Details bekijken"
              slider_image="/USP/webhosting.png"
              img_url="/USP/webhosting.png"
              img_alt="Amrio Webserver"
              img_width="500px"
              img_height="500px"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <section className={s.cards}>
        <Cards
          background="/Accordion/hosting-page-faq.png"
          title="Logo's"
          subtitle="vanaf €20"
          description="Amrio maakt al een logo vanaf €20"
          link="logo"
        />
        <Cards
          background="/Accordion/hosting-page-faq.png"
          title="Flyers"
          subtitle="vanaf €20"
          description="Amrio maakt al een logo vanaf €20"
          link="flyer"
        />
        <Cards
          background="/Accordion/hosting-page-faq.png"
          title="visite kaartjes"
          subtitle="vanaf €20"
          description="Amrio maakt al een logo vanaf €20"
          link="visite_kaartjes"
        />
        <Cards
          background="/Accordion/hosting-page-faq.png"
          title="Huisstyle"
          subtitle="vanaf €20"
          description="Amrio maakt al een logo vanaf €20"
          link="huisstyle"
        />
      </section>

      
      <Testimonial />
      <Accordion faqs={faqs} image="/Accordion/webdesign.png" />
      <Footer />
    </>
  );
}

// portfolio
// werkwijze

