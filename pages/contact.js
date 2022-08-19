import ContactCard from "../components/Contact/ContactCard";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/header";
import ContactForm from "../components/Contact/Contactfrom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s from "../styles/contact.module.css"

import Contactgegevens from "../components/Contact/Contactgegevens/Contactgegevens";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div>
        <div className=" bg-fixed bg-[url('/USP/test.jpg')] bg-cover bg-center py-28">
          <h1 className="flex justify-center text-4xl text-white font-bold divide-x-0 divide-main divide-solid">
            Contact
          </h1>
          <div className="flex text-white justify-center pt-8">
            <p>Home /</p>
            <p className="text-main">Contact </p>
          </div>
        </div>
      </div>

      <div className={s.container}>
        <div className="  bg-white">
          <Contactgegevens
            email="info@amrio.nl"
            tel="+31 615543324"
            kvk="83841636"
          />
        </div>
        <div className="flex  bg-[#F8F8F8] py-16 px-16">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </>
  );
};
export default ContactPage;
