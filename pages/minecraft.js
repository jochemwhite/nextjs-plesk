import React from "react";
import Header from "../components/header/header";
import Banner from "../components/banner/banner";
import Support from "../components/gameservers/Minecraft/support/Support";
import Price_Table from "../components/Price_Table/Game_Price_Table";
import s from "../styles/webhosting.module.css";
import Accordion from "../components/Accordion/Accordion";
import Footer from "../components/Footer/Footer";

export default function minecraft() {
  const faqs = [
    {
      key: 0,
      title: "Hoe richt ik een Minecraft server op?",
      description:
        "Als eerst koopt u een van onze Minecraft pakketten. Vervolgens zal u binnen een paar minuten een email ontvangen met een bevestiging en een link waarmee u toegang krijgt tot uw persoonlijke Multicraft dashboard. Van hieruit kunt u uw minecraft server beheren. Geef uw server een naam en druk daarna op “Accept EULA”. Vervolgens moet u op “start” drukken bovenaan uw dashboard pagina. U opent uw eigen minecraft launcher en u moet daarna naar de multiplayer optie gaan. Hier drukt u op “add server”. Vul het IP adres in die u kunt vinden in uw Multicraft dashboard in de “Server Address” en voeg daarna een dubbele punt toe gevolgd door de nummers die u kunt vinden in de port bar area in uw multicraft dashboard. Het hoort er zoals dit uit te zien: “116.201.85.247:25569”. Als laatst kunt u een toepasselijke naam toevoegen om in te vullen bij “Server Name” en daarna drukt u op “done” in uw minecraft launcher. Uw persoonlijke server is nu klaar voor gebruik, veel plezier!",
    },
    {
      key: 1,
      title: "Hoe installeer ik plugins?",
      description: "Amrio heeft al een lijst met diverse plugins die u kunt activeren met maar een paar klikken op uw muis! Ga als eerst naar uw persoonlijke Multicraft dashboard en druk op het “file” knopje in uw zij menu. Vervolgens moet u op “plugin list” drukken in dit menu en kunt u kiezen welke plugins u zou willen toevoegen. Als u uw plugin gevonden heeft kunt u drukken op de naam ervan en vervolgens zal er een optie tevoorschijn komen met “install”. Druk op dit knopje en restart uw server. Uw plugins zijn nu klaar voor gebruik!"
    },
    {
      key: 2,
      title: "Hoe kwalificeer ik voor het affiliate programma?",
      description:
      "Om je te registreren als affiliate moet je in ieder geval een server bij Amrio hebben. Zodra je een server hebt kun je navigeren naar Affiliate Als je voldoet aan alle eisen voor een affiliate, kun je een verzoek indienen middels het formulier. Wij controleren dan of je bij ons team past en nemen contact met je op. Als je verzoek wordt geaccepteerd ontvang je een promotiecode. Voor iedereen die deze code invult, ontvang je een beloning en kun je geld verdienen via het affiliate programma!"
    },
  ];

  return (
    <>
      <Header />
      <Banner
        title="Minecraft Hosting"
        subtitle="Minecraft for everyone"
        background="/Minecraft/Minecraft_banner.jpg"
      />
      <div className={s.pakketten_container}>
        <div className={s.pakketten}>
          <Price_Table
            className={s.price_table}
            price="€4.99/m"
            image="/Minecraft/blocks/iron.png"
            title="Iron"
            items1="10GB SSD Cloud Opslag"
            items2="2 GB RAM"
            items3="2 vCPUs"
            items4="Unlimited players"
            items5="DDoS Protectie"
            items6="Plugin support"
            items7="Mod support"
            button="Koop nu"
          />

          <Price_Table
            price="€9.99/m"
            title="Gold"
            image="/Minecraft/blocks/gold_block.webp"
            items1="25GB SSD Cloud Opslag"
            items2="4 GB RAM"
            items3="2 vCPUs"
            items4="Unlimited players"
            items5="DDoS Protectie"
            items6="Plugin support"
            items7="Mod support"
            button="Koop nu"
          />
          <Price_Table
            price="€19.99/m"
            image="/Minecraft/blocks/diamond_block.webp"
            title="Diamond"
            items1="35GB SSD Cloud Opslag"
            items2="6 GB RAM"
            items3="3 vCPUs"
            items4="Unlimited players"
            items5="DDoS Protectie"
            items6="Plugin support"
            items7="Mod support"
            button="Koop nu"
          />
          <Price_Table
            price="€34.99/m"
            image="/Minecraft/blocks/Netherite_block.webp"
            title="Netherite"
            items1="50GB SSD Cloud Opslag"
            items2="12 GB RAM"
            items3="4 vCPUs"
            items4="Unlimited players"
            items5="DDoS Protectie"
            items6="Plugin support"
            items7="Mod support"
            button="Koop nu"
          />
        </div>
      </div>
      <Support />

      <Accordion faqs={faqs} image="/Minecraft/faq/minecraft-faq.png" />


      <Footer />
    </>
  );
}
