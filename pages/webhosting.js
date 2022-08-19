import Banner from "../components/banner/banner";
import Drag_And_Drop from "../components/drag_and_drop/drag_and_drop";
import Accordion from "../components/Accordion/Accordion";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/header";
import Features_1 from "../components/start/features_1";
import Why from "../components/why/why";
import Price_Table from "../components/Price_Table/Webhosting_Price_Tabel";
import Domain from "../components/domain/domain";
import s from "../styles/webhosting.module.css";

const faqs = [
  {
    key: 0,
    title: "Wat Is Webhosting? ",
    description:
      "Met webhosting kunnen consumenten en bedrijven een website hosten op het internet. De gebruikers kunnen ook een geheel nieuwe website maken met WordPress, HTML, CSS en nog veel meer. Daarnaast kunnen gebruikers hun bestaande website naar onze servers verhuizen, waardoor ze kunnen profiteren van onze services.",
  },
  {
    key: 1,
    title: "Ik heb een hosting pakket gekocht, wat nu? ",
    description:
      "Zodra u een webhosting pakket heeft aangeschaft, krijgt u toegang tot uw PLESK-dashboard. In dit dashboard kunt u beginnen met het maken, ontwikkelen en aanpassen van uw website. Dit kan worden gedaan door de programma's die we voor u beschikbaar hebben gesteld, zoals WordPress, Joomla, Drupal of elk ander programma dat u liever uw website bouwt die wij aanbieden. Het is ook mogelijk om de website die u al heeft naar ons over te dragen.",
  },
  {
    key: 2,
    title: "Hoe stap ik over naar Amrio? ",
    description:
      "Er zijn twee opties om uw website van uw huidige host naar Amrio te verhuizen. De eerste optie is dat u ons toestaat uw website over te dragen naar onze hostingservice. We doen dit gratis. De tweede optie is dat u het zelf doet met behulp van FTP.",
  },
];

export default function webhosting() {
  return (
    <>
      <Header />
      <Banner
        background="/banner/webhosting.jpg"
        title="Webhosting"
        subtitle="home / webhosting"
      />

      <div className={s.pakketten_container}>
        <div className={s.pakketten}>
          <Price_Table
            className={s.price_table}
            price="€2,49/m"
            title="Basis"
            items1="25GB SSD Cloud Opslag"
            items2="1 Database"
            items3="Ongelimiteerde Bandbreedte"
            items4="DDoS Protectie"
            items5=" 1 Email Inbox"
            items6=" Gratis SSL Certificaat"
            items7=" Gratis Wordpress"
            button="koop nu"
          />

          <Price_Table
            price="€2,49/m"
            title="Basis"
            items1="25GB SSD Cloud Opslag"
            items2="1 Database"
            items3="Ongelimiteerde Bandbreedte"
            items4="DDoS Protectie"
            items5=" 1 Email Inbox"
            items6=" Gratis SSL Certificaat"
            items7=" Gratis Wordpress"
            button="koop nu"
          />
          <Price_Table
            price="€2,49/m"
            title="Basis"
            items1="25GB SSD Cloud Opslag"
            items2="1 Database"
            items3="Ongelimiteerde Bandbreedte"
            items4="DDoS Protectie"
            items5=" 1 Email Inbox"
            items6=" Gratis SSL Certificaat"
            items7=" Gratis Wordpress"
            button="koop nu"
          />
          <Price_Table
            price="€2,49/m"
            title="Basis"
            items1="25GB SSD Cloud Opslag"
            items2="1 Database"
            items3="Ongelimiteerde Bandbreedte"
            items4="DDoS Protectie"
            items5=" 1 Email Inbox"
            items6=" Gratis SSL Certificaat"
            items7=" Gratis Wordpress"
            button="koop nu"
          />
        </div>
      </div>

      <Domain />
      <Why />
      <Features_1 />
      <Drag_And_Drop />
      <Accordion faqs={faqs} image="/Accordion/hosting-page-faq.png" />
      <Footer />
    </>
  );
}
