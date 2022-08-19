import React from "react";
import Price from "../Price/Price";
import s from "./test.module.css";
let shop_button = "Koop Nu"

export default function Popular_Packages() {
  return (
    <div className="my-24">
      <div className="flex flex-row justify-center text-4xl py-12 font-bold my">
        <h1>Populaire Pakketten</h1>
      </div>
      <div className={s.container}>
        <div className={s.shop_container}>
          <Price
            price="€5.99/m"
            title="WebHosting"
            items1="2GB RAM"
            items2="20GB SSD Cloud Opslag"
            items3="Wekelijkse Backups"
            items4="DDoS Protectie"
            items5="Volledige Root Toegang"
            items6="24/7/365 Technische ondersteuning"
            button={shop_button}
          />
        </div>
        <div className={s.shop_container}>
          <Price
            price="€39"
            title="Logo Design"
            items1="2GB RAM"
            items2="20GB SSD Cloud Opslag"
            items3="Wekelijkse Backups"
            items4="DDoS Protectie"
            items5="Volledige Root Toegang"
            items6="24/7/365 Technische ondersteuning"
            button={shop_button}
          />
        </div>
        <div className={s.shop_container}>
          <Price
            price="€699"
            title="WebDeisgn"
            items1="4 Pagina's"
            items2="Mobiel Vriendelijk"
            items3="Geavanceerd ontwerp"
            items4="3 Revisies"
            items5="3 maanden gratis hosting"
            items6="Online meetings"
            button="Offerte"
          />
        </div>
      </div>
    </div>
  );
}
