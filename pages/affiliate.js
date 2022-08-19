import React from "react";
import Header from "../components/header/header.js";
import Banner from "../components/banner/banner";
import Affiliate_form from "../components/Form/Affiliate/Affiliate_form.js";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import s from "../styles/affiliate.module.css";
import Link from "next/link";

export default function affiliate() {
  return (
    <>
      <Header />
      <Banner
        background="/affiliate/partner.jpg"
        title="Affiliate Program"
        subtitle="home / affiliate"
      />
      <div className={s.container}>
        <h1 className={s.title}>Hoe het werkt</h1>
        <div className={s.items}>
          <div className={s.item}>
            <div className={s.icon}>
              <Image src="/affiliate/icons/01.png" width="70px" height="70px" />
            </div>
            <h1 className={s.subtitle}>Registreren als affiliate</h1>
            <p className={s.description}>
              Registreer als affiliate, in dit proces wordt je gechecked door de
              leden van Amrio of je in aamerking komt voor het affiliate
              programmaard
            </p>
          </div>
          <div className={s.item}>
            <div className={s.icon}>
              <Image src="/affiliate/icons/02.png" width="70px" height="70px" />
            </div>
            <h1 className={s.subtitle}>Deel je code</h1>
            <p className={s.description}>
              Deel je eigen kortingscode van 10% met je kijkers
            </p>
          </div>

          <div className={s.item}>
            <div className={s.icon}>
              <Image src="/affiliate/icons/03.png" width="70px" height="70px" />
            </div>
            <h1 className={s.subtitle}>Wordt betaald</h1>
            <p className={s.description}>
              Krijg 30% betaald van het pakket dat de kijker koopt (Wood, Iron,
              diamond & Emerald). De kijker moet minimaal 2 maanden klant zijn
              om even om het bedrag te innen.
            </p>
          </div>
        </div>
      </div>
      <div className={s.inschijven}>
        <div></div>

        <div className={s.content}>
          <h1 className={s.title2}>Schijf je nu in!</h1>
          <p className={s.description2}>
            Ben jij een enthousiaste streamer en wil je je aanmelden voor ons
            affiliate programma? Klik op de registreerknop en meld je aan, wij
            doen de rest!
          </p>
          <div className={s.buttons}>
            <Link href="/affiliate/registreren">
              <a className={s.button}>Registreren</a>
            </Link>
            <Link href="/affiliate/login">
              <a className={s.button}>Inloggen</a>
            </Link>
          </div>
        </div>
      </div>
      <Affiliate_form />
      <Footer />
      
    </>
  );
}
