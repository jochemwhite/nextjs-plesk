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

const faqComponents = faqs.map((faq) => {
  return <Accordion title={faq.title} description={faq.description} />;
});



const title = "Inclusief BTW"


export default function () {
  return (
    <>
      <Header />
      <Banner
        background="/banner/webhosting.jpg"
        title="Webdesign"
        subtitle="home / Webdesign"
      />

      <div className={s.pakketten_container}>
        <h1>Webdesign Pakketten</h1>
        <div className={s.pakketten}>
          <Price_Table
            className={s.price_table}
            price="€299,-"
            title="Basis"
            items1="1 Pagina"
            items2="Mobiel Vriendelijk"
            items3="Basis Ontwerp"
            items4="1 Revisie"
            items5=""
            items6=""
            items7=""
            button="Offerte"
          />

          <Price_Table
            price="€699,-"
            title="Standaard"
            items1="4 Pagina's"
            items2="Mobiel Vriendelijk"
            items3="Geavanceerd Ontwerp"
            items4="3 Revisies"
            items5="1 Maand Gratis Hosting"
            items6=""
            items7=""
            button="Offerte"
          />
          <Price_Table
            price="€999,-"
            title="Deluxe"
            items1="6 Pagina's"
            items2="Mobiel Vriendelijk"
            items3="Geavanceerd Ontwerp"
            items4="3 Revisies"
            items5="1 Maand Gratis Hosting"
            items6="Gratis Domein"
            items7=""
            button="Offerte"
          />
          <Price_Table
            price="1199,-"
            title="Premium"
            items1="Oneindig Veel Pagina's"
            items2="Mobiel Vriendelijk"
            items3="Geavanceerd Ontwerp"
            items4="3 Revisies"
            items5="1 Maand Gratis Hosting"
            items6="Gratis Domein"
            items7="Animaties"
            button="Offerte"
          />
        </div>
      </div>

      <Domain />
      <Why />
      <Features_1 />
      <Drag_And_Drop />
      <Accordion faqs={faqs} image="/Accordion/webdesign.png" />
      <Footer />
    </>
  );
}
